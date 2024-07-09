import "cross-fetch/polyfill";
import { config } from "dotenv";
import { resolve } from "path";
import { announceExit, getSecrets } from "./index";
import { SpeedySockets } from "./websockets";
import Bot from "./../settings/bot";

// Setup process event handlers
process.on("exit", announceExit);
process.on("SIGINT", () => process.exit(0));

// Load environment variables
config({ path: resolve(__dirname, "..", ".env") });

// Initialize Bot with azure secrets + config and token
Bot.addSecrets(getSecrets());
Bot.setToken(process.env.BOT_TOKEN as string);

// Start WebSocket connection
SpeedySockets(Bot, { force: false, debug: false }).catch(console.log);
