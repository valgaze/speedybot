import { resolve } from "path";

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
  ${name ? name : "Your bot"} is now "off"
      
  You can turn your bot back on by entering the following commands:
      
  cd ${resolve(__dirname, "..")}
  npm run dev
  
  If you want to deploy your bot to a persistent server or serverless function, see here:
  https://speedybot.js.org/examples
  `
  );
};
