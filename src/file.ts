import { execSync } from 'child_process'
import { resolve } from 'path'
import { writeFileSync } from 'fs';
export const rootDir = resolve(__dirname, '..', '..') // Tricky: from /dist in CLI

export const scaffoldGitclone = (targetDir: string = 'speedybot-starter') => {
	const command = `git clone https://github.com/valgaze/speedybot-starter ${targetDir}`
	try {
		execSync(command, {
			stdio: [0, 1, 2],
			cwd: resolve(process.cwd()),
		});
	} catch (e) {
		throw e
	}
}

export const setupRepo = (targetDir: string, commandSequence: string[]) => {
	const command = `cd ${targetDir} && ${commandSequence.join(' && ')}`
	try {
		execSync(command, {
			stdio: [0, 1, 2],
			cwd: resolve(process.cwd()),
		});
	} catch (e) {
		throw e
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