// npm i cross-fetch dotenv
import "cross-fetch/polyfill";
import { resolve } from "path";
import { config } from "dotenv";
config({ path: resolve(__dirname, "..", ".env") });
import { websocketLauncher } from "../util";

// Assert these are available on process.env yadda-yadda, otherwise would have to `process.env.BOT_TOKEN as string`
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BOT_TOKEN: string;
      VOICEFLOW_API_KEY: string;
    }
  }
}

import Bot from "./bot";

Bot.setToken(process.env.BOT_TOKEN);
Bot.addSecret("VOICEFLOW_API_KEY", process.env.VOICEFLOW_API_KEY);
// Pass in your SpeedyBot
websocketLauncher(Bot).catch((e) => console.log("##", e));
