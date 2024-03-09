import "cross-fetch/polyfill";
import { config } from "dotenv";
import { resolve } from "path";
import { announceExit } from "./index";
process.on("exit", announceExit);
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BOT_TOKEN: string;
      VOICEFLOW_API_KEY: string;
    }
  }
}
config({ path: resolve(__dirname, "..", ".env") });

import { SpeedySockets } from "./websockets";
import Bot from "./../settings/bot";

Bot.setToken(process.env.BOT_TOKEN as string);
Bot.addSecret("VOICEFLOW_API_KEY", process.env.VOICEFLOW_API_KEY);

SpeedySockets(Bot, { force: false, debug: false }).catch((e) => console.log(e));
