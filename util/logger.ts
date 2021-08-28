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

ex. You can edit a single file to handle all your bots logic, receive user data from forms, and easily extend/integrate with third-party services

Before you start, you'll need two things:

1. Set a WebEx bot token to settings/config.json

- If you have an existing bot, get its token here: https://developer.webex.com/my-apps

- If you don't have a bot, create one and save the token from here: https://developer.webex.com/my-apps/new/bot

2. Set a "tunnel" address to settings/config.json

- Your bot instance will need to be reachable from the public internet

- You can deploy it to a hosting provider like AWS, GCP, Heroku, etc

- Or you can use a tunneling service
You'll need to expose your bot configuration to the public interne

`)

}