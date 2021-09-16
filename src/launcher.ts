import { SpeedybotConfig, Launch} from './index'
import { BotHandler, FrameworkInst } from './'
import { bad, loud } from './'
import handlers from './../settings/handlers'
import Config from './../settings/config.json'

export async function boot(config: SpeedybotConfig, handlers: BotHandler[]): Promise<FrameworkInst> {
	try {
		const inst = await Launch(config, handlers)
		const phrase = config.webhookUrl ? `Webhook available here: ${config.webhookUrl}` : 'Connected using websockets'
		loud(`Bot started
${phrase}
Ask your bot "healthcheck" to verify connectionn
`)
		return inst
	} catch (e) {
		bad(e);
		throw e;
	}
}

boot(Config, handlers)