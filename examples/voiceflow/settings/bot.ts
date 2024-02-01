import { SpeedyBot, $Magic } from "speedybot";
import {
  processResponse,
  VFHelper,
  VF_SUBMIT_LABEL,
  VF_SUBMIT_LABEL_INTENT,
} from "./voiceflow";

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
    // If you want to support file fileuploads, see code below
    // If you want to be able to chat with documents, see this example: https://speedybot.js.org/examples/voiceflow-kb
    // const validFileExtensions: string[] = [];
    // const { name, contentType, extension, url } = $.file;
    // const fileData = await $.file.getData() // fileData
    await $.send(`This agent does not currently support file uploads`);
  }
  return $.en;
});

// ## Don't leave users hanging
Bot.captureError(async (payload) => {
  const { roomId } = payload;
  if (roomId)
    await Bot.sendTo(roomId, `Whoops, there was a problem: ${payload.message}`);
});

// export the Bot
export default Bot;
