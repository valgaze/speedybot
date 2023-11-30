// npm i cross-fetch dotenv
import "cross-fetch/polyfill";
import { config } from "dotenv";
import { resolve } from "path";
config({ path: resolve(__dirname, "..", ".env") });
import { websocketLauncher } from "../util";

import Bot from "./bot";

Bot.setToken(process.env.BOT_TOKEN as string);

// Pass in your SpeedyBot
websocketLauncher(Bot).catch((e) => console.log("##", e));
