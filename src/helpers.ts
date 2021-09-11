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
    webhookUrl: '${webhookUrl}',
    'token': 'aaa-bbb-ccc
}

app.post('my_webhook', SpeedybotWebhook(config, handlerList))

Change config.webhookUrl to ${webhookUrl}${webhookUrl.slice(-1) === '/' ? 'path_goes_here' : '/path_goes_here'}

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

export const placeholder = '__REPLACE__ME__'

