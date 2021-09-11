#!/usr/bin/env node

/**
npx speedybot #launches quiz
npx speedybot <access_token> <dir_name> # sets access token and scaffolds + inits from dir_name
npx speedybot <access_token>  # sets access token and scaffolds + inits from "speedybot"
npx speedybot # show help
*/
import { help, ascii_art, log, good, askQuestion, loud, fillTemplate } from './../'
import { scaffoldGitclone, writeJSON, setupRepo, placeholder,  } from './../'
import { version } from './../../package.json';
import { resolve } from 'path';
import language from './en'
const [, , rootArg, token = null, directory = null] = process.argv; // Todo: get a proper arg parser
const command = rootArg;


main(command, language);


// CLI runner
export async function main(command, LANGUAGE) {
	const normalized = command ? command.toLowerCase() : 'help'

	if (normalized === '-v' || normalized === 'version') {
		return log(version)
	}

	if (normalized === 'help') {
		help()
	}

	if (normalized === 'setup') {
		ascii_art()
		const setupConfig = {
			token: token ? token : placeholder,
			directory: directory ? directory : 'speedybot-starter'
		}

		if (setupConfig.token === placeholder) {
			const askToken = await askQuestion(LANGUAGE.askToken)
			if (askToken) {
				setupConfig.token = askToken
			} else {
				loud(LANGUAGE.needsToken)
			}
			if (setupConfig.directory === 'speedybot-starter') {
				const askDir = await askQuestion(fillTemplate(LANGUAGE.askDirectory, { directory: setupConfig.directory }))
				if (askDir) {
					setupConfig.directory = askDir
				}
			}
		}

		// Clone repo
		try {
			loud(`Installing to '${setupConfig.directory}'...`)
			try {
				await scaffoldGitclone(setupConfig.directory)
			} catch (e) {
				loud(LANGUAGE.directoryAlreadyExists)
				log(e.message)
				return process.exit(1)
			}
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
			loud(e)
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

	good(`SETUP COMPLETE!
${setDependencies ? `- Enter the directory (${directory}) and run: npm run setup` : ''}
${setToken ? `- Make sure to set the 'token' field in ${directory}/settings/config.json` : ''}

- See here for quickstart: https://github.com/valgaze/speedybot/blob/master/quickstart.md`)
}