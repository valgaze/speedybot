import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { ENVELOPES } from "speedybot"; // relace w/ speedybot
import Bot from "./settings/bot";
import { validateSignature } from "./validate_webhook";
import "cross-fetch/polyfill"; // for node <18, need Blob + FormData

export const handler: APIGatewayProxyHandlerV2 = async (event, context) => {
  // Check webhook secret
  const signature = event.headers["x-spark-signature"];
  const CONFIG = {
    secret: process.env.WEBHOOK_SECRET as string,
    BOT_TOKEN: process.env.BOT_TOKEN as string,
  };
  Bot.setToken(CONFIG.BOT_TOKEN);

  let data = {};
  if ("body" in event && event.body) {
    try {
      data = JSON.parse(event.body);
    } catch (e) {
      console.log("#Error with body", e);
    }
  }

  const secret = CONFIG.secret; // webhook secret
  try {
    // patch to run before starting middleware loop
    // useful for validating secrets, see deets: https://github.com/valgaze/speedybot/blob/deploy/docs/webhooks.md#webhook-secrets

    Bot.insertStepToFront(async ($) => {
      // Webhook "secret" check
      if (secret && signature) {
        const proceed = validateSignature(
          signature as string,
          secret as string,
          data
        );
        if (!proceed) {
          // Invalid webhook signature, discard
          return $.end;
        }
        await $.send(`Just wanna let you know, we decided: ${$.next}`);
        return $.next;
      } else {
        // no signature check
        return $.next;
      }
    });

    Bot.addSecrets(CONFIG);
    await Bot.runMiddleware(data as ENVELOPES);

    console.log(">>[FINISHED]:   await Bot.runMiddleware(data as ENVELOPES);");
  } catch (e) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        msg: `There was an issue`,
        error: e,
      }),
    };
  }
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `SpeedyBot: Your request was received at ${event.requestContext.time}.`,
  };
};
