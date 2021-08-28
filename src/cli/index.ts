#!/usr/bin/env node

import { good, red, help, ascii_art, yesNo} from './../../util/logger'
import { activateTunnel } from './../../util/tunnel'
import { scaffoldGitclone } from './../../util'
const [,,rootArg, portRef] = process.argv; // Todo: get a proper arg parser
const command = rootArg ? rootArg : 'tunnel'
let port = 8000

if (command === 'tunnel' && portRef) {
	port = parseInt(portRef)
}

main(command);


// CLI runner
export async function main(command) {
	const normalized = command ? command.toLowerCase() : 'help'

	if (normalized === 'help') {
		help()
	}


	if (normalized === 'tunnel') {
		return await activateTunnel(port);
	}

	if (normalized === 'tunnel:nocli') {
		// TODO: set this from config.json
		return await activateTunnel(port);
	}

	if (normalized === 'setup:git') {
		ascii_art()
		return await scaffoldGitclone()
	}

	if (normalized === 'setup') {
		ascii_art()
		const proceed = await yesNo('Do you want to setup speedybot?');
		
		if (proceed) {
			await scaffoldGitclone()

			good(`SETUP COMPLETE!
	
Enter the directory and run:

npm run setup 
	
See here for quickstart: https://github.com/valgaze/speedybot/blob/master/quickstart.md`)
		}
	}
}



/**
 * EXPERIMENTAL: I want to load configuration from the CLI
 * @param path 
 * 
 * 
 * Load a SinglePage Bot Configuration from CLI
 * It **MUST** export the following
 * config: {}, config object, at minimum bot token + tunnel
 * handlers: []BotHandler
 * 
 * Ex. Dreamstate would work for both typescript & javascript files
 * Dynamically import
 * $ botdemokit spb.ts
 * $ botdemokit spb.js
 */
export async function hotLoad(path:string) {
	/**
	 * 
	 * 
	import { resolve } from 'path';

	// Issue: a bundled cli couldn't load typescript
	// Fix: bot configs are single-file JS configs
	good(`A few things need to work out:
		Start a server
		Import handler roster by file (or even git url?)
		Start the framework
		Take the handlers & register em
	`)
	try {
		const resolvedPath = resolve(path);
		const SinglePage = await import(resolvedPath);
		console.log("SinglePage", SinglePage);

		
	}catch(e) {
		console.log("3", e)
	}
	 */
	red('Stay tuned...')

}

