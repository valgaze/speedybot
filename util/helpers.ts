export interface Base {
  [key: string]: any;
}

/**
* @param list 
* Pick an item from the list
**/
export const pickRandom = (list) =>  list[Math.floor(Math.random()*list.length)]



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
export const fillTemplate = (utterances: string | string[], template: Base): string  => {
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
		if (!utterance.includes(target)) {
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