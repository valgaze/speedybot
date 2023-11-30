import * as bodyParser from "body-parser";
import { config } from "dotenv";
import * as express from "express";
import { resolve } from "path";
import Bot from "./../settings/bot";
import { validateWebhook } from "./validateWebhook";
import { announceReady } from "../util";
import { SpeedyBot } from "../../../src";

// Expects .env to get token on BOT_TOKEN
config({ path: resolve(__dirname, "..", ".env") });

const app = express();
const port = process.env.PORT || 8000;
app.use(bodyParser.json());

const token = process.env.BOT_TOKEN as string;
if (!token) {
  console.log("\n## Token missing (check .env file)");
  process.exit(0);
}
Bot.setToken(token);

// Replace TARGET below with an email address of room id
const TARGET = "joe@joe.com";

app.post("/speedybot", async (req, res) => {
  const json = req.body;
  // Here could check headers for X-Spark-Signature and hash with a secret to verify envelope is authentic
  // For more info see: https://github.com/valgaze/speedybot-mini/blob/deploy/docs/webhooks.md#secrets

  const signature = req.header("x-spark-signature");
  const webhookSecret = process.env.WEBHOOK_SECRET;

  // Validate webhook & other checks you might need
  if (webhookSecret && signature) {
    const proceed = validateWebhook(json, webhookSecret, signature);
    if (proceed === false) {
      return res.send("Webhook Secret Rejected");
    }
  }

  await Bot.runMiddleware(json);

  res.status(200).send("ok");
});

app.post("/incoming_webhook", async (req, res) => {
  const data = req.body;

  //  here you could validate on the req, req.body, etc
  // Send text
  Bot.sendTo(TARGET, "A webhook just hit the server!");

  // Send a card
  Bot.sendTo(
    TARGET,
    Bot.card()
      .addTitle("Attention!")
      .addText(`Data submitted: ${JSON.stringify(data)}`)
  );

  // Send a file with data
  Bot.sendFileTo(
    TARGET,
    {
      message: "Data report",
      id: data.id,
      stamp: new Date().toISOString(),
    },
    "json"
  );

  res.send(`ok`);
});

app.get("/", (_, res) => {
  res.send(
    "Register your bot's with Speedybot Garage: https://codepen.io/valgaze/full/MWVjEZV"
  );
});

export async function startServer(
  BotRef: SpeedyBot,
  cb?: (data?: { email: string; name?: string }) => any
) {
  return app.listen(port, async () => {
    const token = BotRef.getToken();
    if (!token) {
      throw new Error(
        `SpeedyBot must have token specified before launching websockets, set with Bot.setToken()`
      );
    }

    try {
      const data = await Bot.getSelf();
      const { displayName } = data;
      const [email] = data.emails;
      if (!cb) {
        announceReady(String(port), email, displayName);
      } else {
        return cb({ email, name: displayName });
      }
    } catch (e) {
      throw e;
    }
  });
}

export { app };
