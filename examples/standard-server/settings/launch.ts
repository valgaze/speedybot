import { config } from "dotenv";
import { startServer } from "../src";
import { resolve } from "path";
config({ path: resolve(__dirname, "..", ".env") });

import Bot from "./bot";
Bot.setToken(process.env.BOT_TOKEN as string);

// Pass in your SpeedyBot
startServer(Bot).catch((e) => console.log("##", e));
