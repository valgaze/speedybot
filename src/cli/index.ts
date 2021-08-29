#!/usr/bin/env node

import { good, help, ascii_art, yesNo, bad} from './../../util/logger'
import { scaffoldGitclone } from './../../util'
const [,,rootArg,] = process.argv; // Todo: get a proper arg parser
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
		const proceed = await yesNo('Do you want to setup speedybot?');
		
		if (proceed) {
			try {
				await scaffoldGitclone()

				good(`SETUP COMPLETE!
		
	Enter the directory and run:
	
	npm run setup 
		
	See here for quickstart: https://github.com/valgaze/speedybot/blob/master/quickstart.md`)
			} catch(e) {
				bad(e)
			}
		}
	}
}