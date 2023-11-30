import { SpeedyBot, logoRoll } from "https://cdn.skypack.dev/speedybot@latest";

Deno.serve(async (req: Request) => {
  if (req.method === "GET") {
    return new Response(`Server is running ${new Date()} ${logoRoll()}`);
  }

  const CONFIG = {
    token: Deno.env.get("token"),
    webhookSecret: Deno.env.get("webhookSecret"),
  };

  if (req.method === "POST") {
    const signature =
      req.headers.get("x-spark-signature") ||
      req.headers.get("X-Spark-Signature");
    const Bot = new SpeedyBot(CONFIG.token);
    const json = await req.json();

    if (CONFIG.webhookSecret && signature) {
      const validateWebhook = async <T = any>(
        requestData: T,
        secret: string,
        signature: string
      ): Promise<boolean> => {
        const stringyBody =
          typeof requestData !== "string"
            ? JSON.stringify(requestData)
            : requestData;
        const algo = {
          name: "HMAC",
          hash: "SHA-1",
        };
        const enc = {
          name: "UTF-8",
        };
        const hmacKey = await crypto.subtle.importKey(
          "raw",
          new TextEncoder().encode(secret),
          algo,
          false,
          ["sign"]
        );
        const hmacData = await crypto.subtle.sign(
          algo,
          hmacKey,
          new TextEncoder().encode(stringyBody)
        );

        const bufferToHex = (buffer: ArrayBufferLike) => {
          return Array.prototype.map
            .call(new Uint8Array(buffer), (x) =>
              ("00" + x.toString(16)).slice(-2)
            )
            .join("");
        };
        const hmacDataHex = bufferToHex(hmacData);
        return hmacDataHex === signature;
      };
      const proceed = await validateWebhook(
        json,
        CONFIG.webhookSecret,
        signature
      );
      if (proceed === false) {
        return new Response("Webhook Secret Rejected");
      }
    }

    Bot.exact("$clear", async ($) => {
      await $.clearScreen();
      return $.end;
    });

    Bot.addStep(async ($) => {
      if ($.data && !$.data.showCard) {
        const dataSnippet = $.buildDataSnippet($.data);
        await $.send(`This data was submitted:`);
        await $.send(dataSnippet);
        return $.end;
      } else {
        return $.next;
      }
    });

    Bot.addStep(async ($) => {
      await $.send(`helllllooo, you said "${$.text}"`);
      const card = $.card().survey([
        {
          type: "text",
          question: "What is the name of your company?",
          id: "company_name",
        },
        {
          type: "text",
          question: "Describe the service performed by the vendor.",
          id: "service_type",
        },
        {
          type: "picker-date",
          question: "When was the service provided?",
          id: "service_date",
        },
        {
          type: "single-select",
          question: "How would you rate the quality of service?",
          choices: ["Excellent", "Good", "Average", "Poor", "Very poor"],
          id: "service_quality",
        },
        {
          type: "multi-select",
          question: "What were the highlights of the service?",
          choices: [
            "Communication",
            "Punctuality",
            "Time to Resolution",
            "Friendliness",
            "Cost",
          ],
          id: "service_highlights",
        },
        {
          type: "single-select",
          question:
            "Would you consider using our services again in the future?",
          choices: [
            "Definitely",
            "Probably",
            "Not sure",
            "Probably not",
            "Definitely not",
          ],
          id: "future_use",
        },
        {
          type: "textarea",
          question:
            "Please provide any other comments or suggestions for improvement.",
          id: "other_comments",
        },
        {
          type: "picker-time",
          question: "What time of day is preferable for future contact?",
          id: "preferred_contact_time",
        },
        {
          type: "picker-dropdown",
          question: "Preferred method of communication for future updates?",
          choices: ["Email", "Phone", "Text"],
          id: "communication_method",
        },
      ]);

      await $.send(card);

      return $.next;
    });

    Bot.captureError(async (payload) => {
      const { roomId } = payload;
      if (roomId) {
        await Bot.sendTo(
          roomId,
          `Whoops, there was a problem: ${payload.message}`
        );
      }
    });

    await Bot.runMiddleware(json);
  }
  return new Response(`Request processed`); // webhooks should return **something**
});
