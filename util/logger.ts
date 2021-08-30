import chalk from 'chalk';
import { createInterface } from 'readline';

export function log (...payload) { console.log.apply(console, payload as [any?, ...any[]]); }

export function warning(...payload) {
    log(chalk.yellow(...payload))
}

export function bad(...payload) {
		color('red', `\n\n# ----------------PROBLEM!------------------- #\n\n`)
    log(chalk.red(...payload))
		color('red', `\n\n# ------------------------------------------- #\n\n`)

}

export function good(...payload) {
    log(chalk.green(...payload))
}

export function color (color = "red", ...payload) {
		try {
			log(chalk[color](...payload))
		} catch { 
			log(chalk['red'](...payload))
		}
}

export function red(...payload) { return color('red', ...payload)}

export function loud (...payload) {
    color('red', `\n\n# ---------------------------------------- #\n\n`)
    log(chalk.yellow(...payload))
    color('red', `\n\n# ---------------------------------------- #\n\n`)
}

export function askQuestion(question: string): Promise<string> {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve, reject) => {
    rl.question(question, function (res) {
      resolve(res);
      rl.close();
    });
  });
}

export async function yesNo(question): Promise<boolean> {
	const yay = ['yes', 'y', 'yah', '1', 1, 'true', true];
	const res = await askQuestion(`(y/n) ${question}`);
	return yay.includes(res.toLowerCase());
}

export const ascii_art = (colorSelect='green')  => {
color(colorSelect, `
███████╗██████╗ ███████╗███████╗██████╗ ██╗   ██╗██████╗  ██████╗ ████████╗
██╔════╝██╔══██╗██╔════╝██╔════╝██╔══██╗╚██╗ ██╔╝██╔══██╗██╔═══██╗╚══██╔══╝
███████╗██████╔╝█████╗  █████╗  ██║  ██║ ╚████╔╝ ██████╔╝██║   ██║   ██║   
╚════██║██╔═══╝ ██╔══╝  ██╔══╝  ██║  ██║  ╚██╔╝  ██╔══██╗██║   ██║   ██║   
███████║██║     ███████╗███████╗██████╔╝   ██║   ██████╔╝╚██████╔╝   ██║   
╚══════╝╚═╝     ╚══════╝╚══════╝╚═════╝    ╚═╝   ╚═════╝  ╚═════╝    ╚═╝   
`)
	
}
export const help = () => {

ascii_art()
log(`
See here for a step-by-step guide: https://github.com/valgaze/speedybot/blob/master/quickstart.md
_________________________________

Speedybot makes it easy to QUICKLY stand up a bot without having to worry about infrastructe details

ex. You can edit a single file to handle all your bots logic, receive user data from forms, catch file-upload events and easily extend/integrate with third-party services

Before you start, you'll need a WebEx bot token

- Create one and save the token from here: https://developer.webex.com/my-apps/new/bot

- Run the following to scaffold up a project:

$ npx speedybot setup
cd speedybot
npm run setup

- Save the token to speedybot/settings/config.json under the "token" field:

- Boot the bot with:

$ npm start

- Start a 1-1 session with the bot & ask it "healthcheck" to verify all's well
`)

}