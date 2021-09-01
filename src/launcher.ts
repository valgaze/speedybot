import { startBot, BotHandler, FrameworkInst } from './../util/framework'
import { bad, loud, ascii_art } from './../util/logger'
import { placeholder } from './../util'
import { ingestHandlers, registerHandlers } from './handlers'
import handlers from './../settings/handlers'
import Config from './../settings/config.json'

// Special handlers
import healthcheck from './handlers/special/healthcheck'
import namegame from './handlers/special/namegame'
import sendcard from './handlers/special/sendcard'

export interface rootConfig {
	token: string;
	webhookUrl?: string;
}

export async function launch(config: rootConfig, handlers: BotHandler[]): Promise<FrameworkInst> {
	if (config.token === placeholder) {
		loud('Placeholder detected in config.json!\n\n\nSee here for instructions: https://github.com/valgaze/speedybot/blob/master/quickstart.md\n\nExiting...')
		process.exit(1)
	}
	try {
		ascii_art();
		const frameworkRef = await startBot(config);
		frameworkRef.messageFormat = 'markdown';

		registerHandlers(ingestHandlers(handlers, healthcheck, namegame, sendcard), frameworkRef)
		const phrase = config.webhookUrl ? `Webhook available here: ${config.webhookUrl}` : 'Connected using websockets'
		loud(`Bot started
${phrase}

Ask your bot "healthcheck" to verify connectionn
`)

		return frameworkRef;

	} catch (e) {
		bad(e);
		throw e;
	}
}

launch(Config, handlers)