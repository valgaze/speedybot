import { execSync } from 'child_process'
import { resolve } from 'path'
import { bad } from './logger';
import { writeFileSync } from 'fs';
export const rootDir = resolve(__dirname, '..', '..') // Tricky: from /dist in CLI

export const scaffoldGitclone = (targetDir: string = 'speedybot') => {
	const command = `git clone https://github.com/valgaze/speedybot ${targetDir}`
	try {
		execSync(command, {
			stdio: [0, 1, 2],
			cwd: resolve(process.cwd()),
		});
	} catch (e) {
		bad(e)
		process.exit(1)
	}
}

export const setupRepo = (targetDir, commandSequence: string[]) => {
	const command = `cd ${targetDir} && ${commandSequence.join(' && ')}`
	try {
		execSync(command, {
			stdio: [0, 1, 2],
			cwd: resolve(process.cwd()),
		});
	} catch (e) {
		bad(e)
		process.exit(1)
	}
}

export interface RootConfig {
	token: string;
}

export const writeJSON = (content: { token: string }, path: string) => {
	const pretty = `${JSON.stringify(content, null, 2)}\n`;
	const writePath = resolve(path);
	return writeFileSync(writePath, pretty, 'utf8');
}