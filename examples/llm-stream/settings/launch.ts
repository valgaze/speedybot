// npm i cross-fetch dotenv
import "cross-fetch/polyfill";
import { config } from "dotenv";
import { resolve } from "path";
config({ path: resolve(__dirname, "..", ".env") });
import { announceExit, websocketLauncher } from "../util";
import Bot from "./bot";
process.on("exit", announceExit);

// Assert these are available on process.env yadda-yadda, otherwise would have to `process.env.BOT_TOKEN as string`
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BOT_TOKEN: string;
      OPEN_AI_KEY: string;
    }
  }
}

// Add secrets
Bot.setToken(process.env.BOT_TOKEN as string);
Bot.addSecret("OPEN_AI_KEY", process.env.OPEN_AI_KEY);

// Pass in your SpeedyBot
websocketLauncher(Bot).catch((e) => console.log("##", e));
