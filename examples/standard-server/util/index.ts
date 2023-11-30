import { logoRoll } from "../../../src";

export const announceReady = (
  port: number | string,
  email: string,
  name = "Your bot"
) => {
  const isColorSupported = process.stdout.isTTY;
  console.log(logoRoll());
  if (isColorSupported) {
    const ServerReady = `\x1b[1m\x1b[7m\x1b[32m 🌐 CONNECTED \x1b[0m\x1b[32m Server active on ${port}, listening...\x1b[0m`;
    process.stdout.write(ServerReady + "\n");
  } else {
    console.log("Websockets Registered. Listening...");
  }
  console.log(`You can reach ${name} here: ${email}`);
};
