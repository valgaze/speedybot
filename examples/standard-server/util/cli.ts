// #!/usr/bin/env node
import * as fs from "fs/promises";
import * as readline from "readline";
import { resolve } from "path";
import * as dotenv from "dotenv";
import "cross-fetch/polyfill"; // for non-tech environment for reset devices

import { botTokenKey, logoRoll } from "../../../src";

// Expects .env to get token on BOT_TOKEN
dotenv.config({ path: resolve(__dirname, "..", ".env") });

async function writeEnvFile(envObject, append = true) {
  try {
    const envContents = Object.entries(envObject)
      .map(([key, value]) => `${key}=${value}`)
      .join("\n");
    const flag = append ? "a" : "w"; // Use "a" for append, "w" for write (overwrite)
    await fs.writeFile(".env", append ? `\n${envContents}` : envContents, {
      flag,
    });
  } catch (error) {
    console.error("Error writing to .env:", error);
    process.exit(1);
  }
}

async function promptUser(msg) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(`${msg}: `, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function writeToken(token) {
  let finalToken = token;
  if (!token) {
    finalToken = await promptUser(
      `Enter your token, [Usage: npm run bot:setup <token>]`
    );
  }
  // destructively overwrites .env as BOT_TOKEN=xxxxxxxx
  const envObject = { [botTokenKey]: finalToken };
  await writeEnvFile(envObject, false);
  console.log(
    `[✅ SpeedyBot]  .env written to ${resolve(__dirname, "..", ".env")} `
  );
}

/**
 *
 * @param keyValue: keyName=TheValue
 */
async function writeSecret(keyValue: string) {
  // appends .env as key=value
  const [key, value] = keyValue.split("=");
  const envObject = { [key]: value };
  await writeEnvFile(envObject, true);
  console.log(
    `[✅ SpeedyBot]  .env written to ${resolve(__dirname, "..", ".env")} `
  );
}
async function run(command, ...args) {
  switch (command) {
    case "setup":
      await writeToken(args[0]);
      break;
    case "addsecret":
      await writeSecret(args[0]);
      break;
    case "help":
      console.log(await logoRoll());
      console.log("Project Path:", process.cwd());
      console.log(`
Usage:
  $ npm run bot:debug
  $ npm run bot:dev
  $ npm run bot:on
  $ npm run bot:reset <token>
  $ npm run bot:setup <token>
  $ npm run bot:addsecret MYKEY=THE_VALUE

Commands:
  1. Debug Command:
     $ npm run bot:debug
     Display debug information about your system

  2. Development Command:
     $ npm run bot:dev
     Start your bot locally (using websockets) with live-reload on code-changes

  3. Online Command:
     $ npm run bot:on
     "Turn on" your bot locally (over websockets) but without live-reload on code-changes, CTRL-C to exit

  4. Reset Command:
     $ npm run bot:reset <token>
     Reset any devices, useful for rate limit situations

  5. Setup Command:
     $ npm run bot:setup <token>
     Overwrite (delete all other values) in .env file with BOT_TOKEN=<token>

  6. Add Secret
    $ npm run bot:addsecret MYKEY=THE_VALUE
    Append an .env file with MYKEY=THE_VALUE
`);
      break;
    default:
      console.error(`Unknown command: ${command}`);
      break;
  }
}

const [, , command, ...args] = process.argv;
run(command, ...args);
