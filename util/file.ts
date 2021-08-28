import fse from 'fs-extra'
import { execSync } from 'child_process'
import { resolve } from 'path'
import { bad, good, yesNo } from './logger';
export const rootDir = resolve(__dirname, '..', '..') // Tricky: from /dist in CLI
export const copyDir = fse.copy;

// This is a bit fragile, will defer to git for everything
export const scaffoldBot = async (targetDir: string): Promise<void | boolean> => {
	try {
		const proceed = await yesNo('Do you want to continue and scaffold a speedybot project?')
		if (proceed) {
			const copyTemplate = await copyDir(
				rootDir,
				targetDir
			)
			good(`Successful! Project scaffolded ${copyTemplate} ${targetDir}`)
			return true;
		} else {
			process.exit(0)
		}
	} catch(e) {
		bad(e);
	}
}

export const scaffoldGitclone = (targetDir?: string) => {
	let dirName = targetDir ? targetDir : 'speedybot'
	const command = `git clone https://github.com/valgaze/speedybot ${dirName}`
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
