export interface Base {
	[key: string]: any;
}

/**
* @param list 
* Pick an item from the list
**/
export const pickRandom = (list) => list[Math.floor(Math.random() * list.length)]

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
export const fillTemplate = (utterances: string | string[], template: Base): string => {
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

/**
 * Bare minimum config needed to "trigger"
 * another chat item
 * 
 */
export interface TriggerPayload {
	roomId?: string;
	personId?: string;
	text: string;
}

/**
 * Helper function to trigger text as if user tapped 
 * @param triggerPayload 
 * @param bot instance
 */
export const triggerChat = (triggerPayload: TriggerPayload, bot) => {
	bot.framework.onMessageCreated(triggerPayload)
}

/**
 * Helper function to take a submission with "chip_action",
 * then trigger the chat as if chip_action's value was emitted by the user
 * @param bot 
 * @param trigger 
 * @param suppressLog: boolean, hide echo statemet
 * 
 * ex.
 * ```ts
 * 
 * import {handleChip} from './../util
 * export const handlers = [
 *	{
 *		keyword: '<@submit>',
 *		handler(bot, trigger) {
 *			handleChip(bot, trigger)
 *		},
 *		helpText: 'Handler function that runs whenever a card button sends submit'
 * }]
 * ```
 * 
 */
export const handleChip = (bot, trigger, suppressLog = false) => {
	if (trigger.attachmentAction.inputs && trigger.attachmentAction.inputs.chip_action) {
		if (!suppressLog) {
			bot.say(`You picked '${trigger.attachmentAction.inputs.chip_action}'`)
		}
		const payload = {
			roomId: trigger.attachmentAction.roomId,
			personId: trigger.personId,
			text: trigger.attachmentAction.inputs.chip_action,
		}
		// "trigger" chip tap as if user entered
		bot.framework.onMessageCreated(payload)
	}
}