#!/usr/bin/env node

/**
npx speedybot #launches quiz
npx speedybot <access_token> <dir_name> # sets access token and scaffolds + inits from dir_name
npx speedybot <access_token>  # sets access token and scaffolds + inits from "speedybot"
npx speedybot # show help
*/
import { help, ascii_art, good, bad, askQuestion, loud } from './../../util/logger'
import { scaffoldGitclone, writeJSON, setupRepo, placeholder } from './../../util'
import { resolve } from 'path';
const [, , rootArg, token = null, directory = null] = process.argv; // Todo: get a proper arg parser
const command = rootArg;

main(command);

// CLI runner
export async function main(command) {
	const normalized = command ? command.toLowerCase() : 'help'

	if (normalized === 'help') {
		help()
	}

	if (normalized === 'setup') {
		ascii_art()
		const setupConfig = {
			token: token ? token : placeholder,
			directory: directory ? directory : 'speedybot'
		}

		if (setupConfig.token === placeholder) {
			const askToken = await askQuestion('What is your bot token? (leave blank to set later)  ')
			if (askToken) {
				setupConfig.token = askToken
			} else {
				loud(`
Note: If you need a token, see below

> Create a new bot  (recommended): https://developer.webex.com/my-apps/new/bot

> Regenerate access token from existing bot: https://developer.webex.com/my-apps`)
			}
			if (setupConfig.directory === 'speedybot') {
				const askDir = await askQuestion(`What directory to install speedybot? (defaults to '${setupConfig.directory}')  `)
				if (askDir) {
					setupConfig.directory = askDir
				}
			}
		}

		// Clone repo
		try {
			await scaffoldGitclone(setupConfig.directory)
			const commandList = [
				`npm run setup`
			]
			// Setup deps, write token if present
			if (setupConfig.token !== placeholder) {
				commandList.push(`npm run write:json ${setupConfig.token}`)
				commandList.push('npm start')
			}
			await setupRepo(setupConfig.directory, commandList)

			finale(setupConfig.directory, setupConfig.token === placeholder)
		} catch (e) {
			bad(e)
		}
	}

	if (normalized === 'write:json' && token !== null) {
		let finalPath = directory
		if (!directory) {
			finalPath = resolve(process.cwd(), '..') // runs from dist in run-script
		}
		const configPath = resolve(finalPath as string, 'settings/config.json')
		const payload = {
			token
		}
		return writeJSON(payload, configPath)
	}
	if (!normalized) {
		help()
	}
}
export const finale = (directory: string, setToken?: boolean, setDependencies?: boolean) => {

	good(`SETUP COMPLETE!s
${setDependencies ? `- Enter the directory (${directory}) and run: npm run setup` : ''}
${setToken ? `- Make sure to set the 'token' field in ${directory}/settings/config.json` : ''}

- See here for quickstart: https://github.com/valgaze/speedybot/blob/master/quickstart.md`)
}