import { INgrokOptions } from 'ngrok';
import { nGrokTunnel } from './ngrok';
import { red, ascii_art } from './logger'
export async function activateTunnel(port: number = 80) {
	const config: INgrokOptions = {}
	if (port) {
		config.addr = port
	}
	const url = await nGrokTunnel(config);
	displayTunnelData(url, port);
}

export function displayTunnelData(url, port=80) {
const content = `
nGrok tunnnel active for port ${port}, save the value below as "tunnel" in settings/config.json
__________________________


${url}

__________________________

Tip: Inspect/replay traffic requests on http://localhost:4040

By default lasts for 2 hours, use CTRL-C to exit`
ascii_art('red')
red(content);
}