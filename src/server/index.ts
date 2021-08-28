import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import Webhook from 'webex-node-bot-framework/webhook'
import { registerHandlers } from './../webhook'
import Config from './../../settings/config.json'
import handlers from './../../settings/handlers'
import { startBot } from './../../util/framework'
import { bad, loud, ascii_art } from './../../util/logger'
const port = (Config.port || Number(8000)) as number // Maybe expose on config.json

const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Frontend
app.get(['/','/ui'], (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, "../ui", "index.html"))
});


export interface RootConfig {
	token: string;
	tunnel: string;
}

const catch_placeholder = (config:RootConfig) => {
	const placeholder = '__REPLACE_ME__'
	const invalid = Object.values(config).includes(placeholder)
	if (invalid) {
		const configPath = path.resolve(__dirname, '..', '..', 'settings/config.json')
		bad(`Placeholder detected in config file:
${configPath}

Make sure to update both 'token' & 'tunnel' with valid values

Exiting...`);
		process.exit(1)
	}
}
export async function boot(port=8000) {
	catch_placeholder(Config)
	try {
		const inst = await startBot(Config)

		// Register handlers (user-specified + specials)
		registerHandlers(handlers, inst)

		// Configure webhook
		app.post(`${Config.tunnel}/speedybot`, Webhook(inst))
	} catch(e) {
		bad(e)
	}
	return app.listen(port, () => {
		ascii_art('green')
		loud(`Listening on port ${port}`)
	});
}
boot(port);
