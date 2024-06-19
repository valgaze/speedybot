import { logoRoll } from "speedybot";

export const announceReady = (
  port: number | string,
  email: string,
  name = "Your bot"
) => {
  const isColorSupported = process.stdout.isTTY;
  console.log(logoRoll());
  const msg = `Server active on port ${port}
You must expose this port & register for incoming webhooks. Listening...`;
  if (isColorSupported) {
    const ServerReady = `\x1b[1m\x1b[7m\x1b[32m 🌐 CONNECTED \x1b[0m\x1b[32m ${msg}\x1b[0m`;
    process.stdout.write(ServerReady + "\n");
  } else {
    console.log(`🌐 CONNECTED ${msg}`);
  }
  console.log(`You can reach ${name} here: ${email}`);
};
