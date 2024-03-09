import "cross-fetch/polyfill";
import { config } from "dotenv";
import { resolve } from "path";
import { announceExit } from "./index";
process.on("exit", announceExit);

config({ path: resolve(__dirname, "..", ".env") });

import { SpeedySockets } from "./websockets";
import Bot from "./../settings/bot";

Bot.setToken(process.env.BOT_TOKEN as string);
SpeedySockets(Bot, { force: false, debug: false }).catch((e) => console.log(e));
