import { BotHandler, FrameworkInst } from './../../util/framework'
import help from './special/help'
// Special keywords to listen
export const Magickeywords = {
	'<@help>': ['help'],
	'<@catchall>': /(.*?)/,
}

// Special keywords/shortcuts for framework-wid functionality
export const MagicFrameworkkeywords = {
	'<@submit>': 'attachmentAction',
	'<@spawn>': 'spawn',
	'<@despawn>': 'despawn',
	'<@fileupload>': 'files',
}

export type keywords = string | RegExp | (string | RegExp)[]

/**
 * Register a single handler, accounts for special keywords
 * 
 * 
 * @param botHandler: well-formed bot handler
 * 
 * 
 * @param frameworkRef: instance of framework (with connection type configured, tokens, etc)
 * @returns 
 */
export function RegisterOneHandler(botHandler: BotHandler, frameworkRef: FrameworkInst) {
	const registerHandler = (keyword: string | RegExp, handler, helpText, preference = 0) => {
		// https://github.com/WebexSamples/webex-node-bot-framework/blob/master/lib/framework.js#L1663
		frameworkRef.hears(keyword, handler, helpText, preference)
	}
	const registerFrameworkHandler = (eventName: string, handler) => {
		frameworkRef.on(eventName, handler);
	}

	const { keyword, handler } = botHandler
	let trigger = keyword
	if (trigger instanceof Array) {
		trigger.forEach((alias) => {
			const newHandler = {
				...botHandler,
				keyword: alias
			}
			RegisterOneHandler(newHandler, frameworkRef)
		})
	} else {
		if (typeof keyword === 'string') {
			const specialFramework = MagicFrameworkkeywords[keyword]
			if (specialFramework) {
				return registerFrameworkHandler(specialFramework, handler)
			}
			trigger = Magickeywords[keyword] || keyword
		}
		const { helpText, preference } = botHandler
		return registerHandler(trigger as string | RegExp, handler, helpText, preference)
	}
}

export function ingestHandlers(...handlers: any[]): BotHandler[] {
	return Array.prototype.concat.call([], ...handlers)
}

export function registerHandlers(handlers: BotHandler[], frameworkRef: FrameworkInst) {
	let addHelp = true;
	handlers.forEach((botHandler) => {
		const { keyword } = botHandler
		RegisterOneHandler(botHandler, frameworkRef)
		if (keyword === '<@help>') {
			addHelp = false;
		}
	})

	if (addHelp) {
		const helpHandler = help(handlers)
		// help
		RegisterOneHandler(helpHandler, frameworkRef)
	}
}