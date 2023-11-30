import { SpeedyBot } from "../../../src"; // REPLACE W/ SPEEDYBOT IMPORT
import { logoRoll } from "../../../src"; // REPLACE W/ SPEEDYBOT IMPORT
import { Websocket } from "./utils";

export const websocketLauncher = async (
  BotRef: SpeedyBot,
  cb?: (data?: { email: string; name?: string }) => any
) => {
  const token = BotRef.getToken();
  if (!token) {
    throw new Error(
      `SpeedyBot must have token specified before launching websockets, set with Bot.setToken()`
    );
  }

  const inst = new Websocket(token);
  try {
    await inst.start();

    inst.on("message", (websocketEvent: any) => {
      BotRef.runMiddleware(websocketEvent);
    });

    inst.on("submit", (websocketSubmitEvent: any) => {
      BotRef.runMiddleware(websocketSubmitEvent);
    });

    const data = await BotRef.getSelf();
    const { displayName } = data;
    const [email] = data.emails;

    if (!cb) {
      announceWebsockets(email, displayName);
    } else {
      return cb({ email, name: displayName });
    }
  } catch (e) {
    throw e;
  }
};

export const announceWebsockets = (email: string, name = "Your bot") => {
  const isColorSupported = process.stdout.isTTY;
  console.log(logoRoll());
  if (isColorSupported) {
    const WEBSOCKETS_READY = `\x1b[1m\x1b[7m\x1b[32m 🌐 CONNECTED \x1b[0m\x1b[32m Websockets active, listening...\x1b[0m`;
    process.stdout.write(WEBSOCKETS_READY + "\n");
  } else {
    console.log("Websockets Registered. Listening...");
  }
  console.log(`You can reach ${name} here: ${email}`);
};
