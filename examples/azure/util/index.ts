import { resolve } from "path";
import { SecretsList } from "../settings/helpers/index";

declare const Bun: unknown;
export const isBun = () => {
  return typeof Bun !== "undefined";
};

export const announceExit = (name?: string) => {
  const isColorSupported = process.stdout.isTTY;
  if (isColorSupported) {
    const BOT_DISCONNECTED = `\n\x1b[1m\x1b[7m\x1b[31m 🤖 DISCONNECTED \x1b[0m\x1b[31m Bot is now offline. \x1b[0m`;
    process.stdout.write(BOT_DISCONNECTED + "\n");
  } else {
    console.log("Bot is now offline.");
  }
  console.log(
    `
  ${name && typeof name === "string" ? name : "Your bot"} is now "off"
      
  You can turn your bot back on by entering the following commands:
      
  cd ${resolve(__dirname, "..")}
  ${isBun() ? "bun --watch util/launch.ts" : "npm run dev"}
  
  If you want to deploy your bot to a persistent server or serverless function, see here:
  https://speedybot.js.org/examples
  `
  );
};

// Modify below
// Note: Requires secrets to be mounted in environment
export const getSecrets = (): Record<SecretsList, string> => {
  const secrets: Partial<Record<SecretsList, string>> = {
    OAUTH_ENDPOINT: process.env.OAUTH_ENDPOINT,
    BASE_URL_LLM: process.env.BASE_URL_LLM,
    MODEL: process.env.MODEL,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    APP_KEY: process.env.APP_KEY,
    API_VERSION: process.env.API_VERSION,
  };

  const missingSecrets = Object.keys(secrets).filter(
    (key) => secrets[key as SecretsList] === undefined
  ) as SecretsList[];

  if (missingSecrets.length > 0) {
    throw new Error(`Missing secrets: ${missingSecrets.join(", ")}`);
  }

  if (
    secrets["OAUTH_ENDPOINT"] ===
    "https://yourDomain.com/oauth2/default/v1/token"
  ) {
    throw new Error(
      "Placeholder configuration detected, replace placeholders in .env with real values and try again"
    );
  }

  return secrets as Record<SecretsList, string>;
};
