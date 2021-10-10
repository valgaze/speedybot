import { Trigger } from './framework'
import { loud } from './logger'
/**
* @param list 
* Pick an item from the list
**/
export const pickRandom = (list) => list[Math.floor(Math.random() * list.length)]


/**
 * Make sure webhookUrl exists and has an ending path
 * @param webhookUrl 
 * 
 * 
 * @returns boolean | throws 
 */
export const ValidatewebhookUrl = (webhookUrl: string) => {
    // if no webhookUrl specified
    if (!webhookUrl) {
        throw new Error(`Error: Missing 'webhookUrl' in config`)
    }

    // check if ending route, throw if not present
    // ex. good: https://123-456-789.ngrok.io/webhookroute
    // ex. bad: https://123-456-789.ngrok.io/
    // ex. bad: https://123-456-789.ngrok.io
    const candidate = new URL(webhookUrl)
    if (candidate.pathname === '/') {
        loud(`
It looks like your config's webhookUrl does not end with a route

Ex. (expresjs) If your server's route handler look like this:

const config = {
    "webhookUrl": "${webhookUrl}",
    "token": "aaa-bbb-ccc"
}

app.post('my_webhook', SpeedybotWebhook(config, handlerList))

Change config.webhookUrl to ${webhookUrl}${webhookUrl.slice(-1) === '/' ? 'my_webhook' : '/my_webhook'}

See here for more details: https://github.com/valgaze/speedybot/blob/master/docs/how-to.md#deploy`)
        const errMsg = `Error: webhookUrl in should end with a path, ex ${webhookUrl}${webhookUrl.slice(-1) === '/' ? 'my_webhook' : '/my_webhook'}`
        throw new Error(errMsg)
    } else {
        return true
    }
}

/**
 *
 * Randomly selects a phrase & fill in template
 *
 * ```ts
 *
 * // ie from an external template file
 * const payload = {
 *  phrases: ['Hey there, how it going, $[name]?', 'Hi $[name], here's your $[mint]']
 *  template: {
 * 		name: 'Joe',
 *  	flavor: 'mint'
 *  }
 * }
 *
 * fillTemplate(payload.phrases, payload.template)
 *
 * ```
 *
 * @param phrases: array of phrases []string
 * ```ts
 *  ['Howdy, you are $[name] and you like $[flavor]', '$[name], here is $[flavor]']
 * ```
 * @param template: mappings to phrases object
 *
 * ```js
 * {
 *   name: 'Joe',
 *   flavor: 'mint'
 * }
 *```
 *
 *
 */

 export const fillTemplate = (utterances: string | string[], template:  { [key: string]: any }): string => {
	let payload: string;
	if (typeof utterances != "string") {
		payload = pickRandom(utterances) || "";
	} else {
		payload = utterances
	}
	const replacer = (
		utterance: string,
		target: string,
		replacement: string
	): string => {
		if (!utterance.includes(`$[${target}]`)) {
			return utterance
		} else {
			return replacer(
				utterance.replace(`$[${target}]`, replacement),
				target,
				replacement
			)
		}
	}

	for (let key in template) {
		const val = template[key]
		payload = replacer(payload, key, val)
	}
	return payload
}


export const jsonSnippet = (payload) => {
	const escaped = `
\`\`\`json
${JSON.stringify(payload, null, 2)}
\`\`\``
	return { markdown: escaped }
}

// Alias store/recall
export class Storage {
	static async get(bot, key:string) {
		let res = null
		try {
			res = await bot.recall(key)
		} catch(e) {

		}
		return res
	}
	
	static async save(bot, key:string, val: any) {
		return bot.store(key, val)
	}

	static async delete(bot, key) {
		return bot.forget(key)
	}
}


export class Locker<T> {
	constructor(public state: T = {} as T) {}

	save(trigger:Trigger, key: string, value: unknown) {
		const { personId } = trigger
		if (!this.state[personId]) {
			this.state[personId] = {}
		}
		this.state[personId][key] = value
	}

	get(trigger:Trigger, key: string) {
		const { personId } = trigger
		return this.state[personId] ? (this.state[personId][key] || null) : null
	}

	delete(trigger: Trigger, key: string) {
		const { personId } = trigger
		if (this.state[personId]) {
			delete this.state[personId][key]
		}
	}

	snapShot() {
		return JSON.parse(JSON.stringify(this.state))
	}
}