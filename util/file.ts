import { execSync } from 'child_process'
import { resolve } from 'path'
import { bad } from './logger';
export const rootDir = resolve(__dirname, '..', '..') // Tricky: from /dist in CLI

export const scaffoldGitclone = (targetDir: string='speedybot') => {
	const command = `git clone https://github.com/valgaze/speedybot ${targetDir}`
	try {
		execSync(command, {
			stdio: [0, 1, 2], // we need this so node will print the command output
			cwd: resolve(process.cwd()), // path to where you want to save the file
		});
	} catch(e) {
		bad(e)
		process.exit(1)
	}
}
