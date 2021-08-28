import nGrok, { INgrokOptions } from 'ngrok';

export async function nGrokTunnel(config?:INgrokOptions) {
  if (config && !config.addr) {
    throw new Error("No Port specified");
  }
  try {
		const url = await nGrok.connect(config);
		return url;
	} catch(e) {
		console.log("<nGrok> Catastrophic error", e);
		throw e;
	}
}