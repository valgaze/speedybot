import { SpeedyBot, $Magic } from "speedybot";
import {
  processResponse,
  VFHelper,
  VF_SUBMIT_LABEL,
  VF_SUBMIT_LABEL_INTENT,
} from "./voiceflow";

// Add users who can upload documents to this list:
const APPROVED_CONTRIBUTORS: string[] = [];
const MAXIMUM_UPLOAD_SIZE_MB = 10; // << current limitation

export const RETRY_TOKEN = `__retry__file`;
const Bot = new SpeedyBot<"VOICEFLOW_API_KEY">();

// short-hand for exact match
Bot.exact("$clear", async ($) => {
  await $.clearScreen();
  return $.end;
});

// Handle card + "chip" taps
Bot.addStep(async ($) => {
  const vf_inst = new VFHelper(Bot.getSecret("VOICEFLOW_API_KEY") as string);
  if ($.data && typeof $.data === "object") {
    if ($.data[VF_SUBMIT_LABEL] || $.data[VF_SUBMIT_LABEL_INTENT]) {
      // Destroy card
      await Bot.deleteMessage($.id);
      const session = $.author.id;

      // PathId
      const id = $.data[VF_SUBMIT_LABEL] as string;
      const intent = $.data[VF_SUBMIT_LABEL_INTENT] as string;
      let res = Boolean(intent)
        ? await vf_inst.clickIntent(session, intent)
        : await vf_inst.clickButton(session, id);

      // if empty array, something went wrong or tapped old cold
      if (!res.length) {
        // Destroy card (since invalid)
        Bot.deleteMessage($.id);
        res = await vf_inst.launch(session);
      }
      const tidyResponse = vf_inst.simplifyResponse(res);
      const { hasEnd } = tidyResponse;
      const { text, cards, choices, images } = tidyResponse;

      const restEmpty =
        text.length === 0 &&
        cards.length === 0 &&
        choices.length === 0 &&
        images.length === 0;

      if (hasEnd && restEmpty) {
        // If reach terminal part of conversation don't leave user hanging
        const res = await vf_inst.launch(session);
        await processResponse($, vf_inst.simplifyResponse(res));
      } else {
        // pass tidy response in to processor
        await processResponse($, tidyResponse);
      }
    } else {
      // Other card/"attachmentActions" submissions
      // Ex. From here data could be transmitted to another service or a 3rd-party integrationn
      $.send(`Submission received! You sent us ${JSON.stringify($.data)}`);
    }
  }

  return $.next;
});

// handle text
Bot.addStep(async ($) => {
  if ($.text) {
    const vf_inst = new VFHelper(Bot.getSecret("VOICEFLOW_API_KEY") as string);
    const session = $.author.id;
    let hasVisited = await vf_inst.getData<true | null>("hasVisited", session);
    let res;

    try {
      if (!hasVisited) {
        res = await vf_inst.launch(session);
        await vf_inst.saveTheData(session, { hasVisited: true });
      } else {
        res = await vf_inst.send($.text, session);
      }
      res = await vf_inst.send($.text, session);

      const tidyResponse = vf_inst.simplifyResponse(res);
      const { hasEnd, text } = tidyResponse;
      if (hasEnd && !text.length) {
        // relaunch, don't leave them hanging or handle on canvas
        const res = await vf_inst.launch(session);
        await processResponse($, vf_inst.simplifyResponse(res));
      } else {
        await processResponse($, tidyResponse);
      }
    } catch (e) {
      $.send(`Error: ${e}`);
    }
  }
  return $.next;
});

// handle file uploads to knowledge base/RAG/embedding db
Bot.addStep(async ($) => {
  if ($.file) {
    const { name, contentType, extension, url } = $.file;
    const root_msg = await $.send(
      `File upload in progress... ${name} (${contentType})`
    );
    const valids = ["pdf", "txt", "docx"];

    if (
      APPROVED_CONTRIBUTORS.length > 0 &&
      !APPROVED_CONTRIBUTORS.includes($.author.email)
    ) {
      await $.send(
        `Sorry, you are not authorized to add documents to this corpus`
      );
      return $.end;
    }

    const vf_inst = new VFHelper(Bot.getSecret("VOICEFLOW_API_KEY") as string);

    if (valids.includes(extension)) {
      await retryLogic($, vf_inst, url); // attempt upload, otherwise send try-again card
    } else {
      await $.send(
        `Sorry, there is no support for ${extension} files. Valid files are: ${valids.join(
          ", "
        )}`
      );
    }
    await $.edit(root_msg, "File uploaded");
  }
  return $.next;
});

// Retry if file still undergoing virus scan
Bot.addStep(async ($) => {
  if ($.data && $.data[RETRY_TOKEN]) {
    const vf_inst = new VFHelper(Bot.getSecret("VOICEFLOW_API_KEY") as string);
    const { url } = $.data;
    await retryLogic($, vf_inst, url as string); // attempt upload, otherwise send try-again card
  }
  return $.next;
});

// ## Don't leave users hanging
Bot.captureError(async (payload) => {
  const { roomId } = payload;
  if (roomId)
    await Bot.sendTo(roomId, `Whoops, there was a problem: ${payload.message}`);
});

// If 423 error (large file still undergoing virus scanning), retry
async function retryLogic($: $Magic, vf_inst: VFHelper, url: string) {
  try {
    const SpeedyFile = await $.getFile(url);
    const { bytes, contentType, name } = SpeedyFile;

    const bytesToMB = (bytes: number, integerOnly: boolean = false): number => {
      const megabytes = bytes / (1024 * 1024);
      if (integerOnly) {
        return Math.floor(megabytes);
      } else {
        return +megabytes.toFixed(2);
      }
    };

    const MB = bytesToMB(bytes);
    if (MB > MAXIMUM_UPLOAD_SIZE_MB) {
      await $.send(
        `Sorry, there is a limit of ${MAXIMUM_UPLOAD_SIZE_MB} megabytes, your file ${name} is ~${MB} MB`
      );
      return $.end;
    }

    const data = await SpeedyFile.getData();
    const upload = await vf_inst.kbUploadDoc(name, data as Uint8Array);
    const yayCard = $.card()
      .addTitle(`🗃 ${name} was uploaded successfully!!`)
      .addTable([
        ["Name", name],
        ["Type", contentType],
      ]);
    await $.send(yayCard);
  } catch (e) {
    if (
      typeof e === "object" &&
      e &&
      "statusCode" in e &&
      e.statusCode === 423
    ) {
      const card = $.card()
        .addTitle(`File still scanning`)
        .addText(`The file you uploaded is being scanned for viruses`)
        .attachData({
          url,
          [RETRY_TOKEN]: true,
        });
      await $.send(card);
    } else {
      const payload = {
        sc: e.statusCode ?? "none",
        msg: e.message ?? "none",
      };
      await $.send(
        `There was an error sending that file to Knowledge Base: ${JSON.stringify(
          payload
        )}`
      );
    }
  }
}

// export the Bot
export default Bot;
