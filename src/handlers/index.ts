import { BotHandler, FrameworkInst } from './../../util/framework'
import help from './special/help'
// Special keywords to listen
export const MagicActivators = {
	'<@help>': ['help'],
	'<@catchall>': /(.*?)/,
}

// Special keywords/shortcuts for framework-wid functionality
export const MagicFrameworkActivators = {
	'<@submit>': 'attachmentAction',
	'<@spawn>': 'spawn',
	'<@despawn>': 'despawn',
	'<@fileupload>': 'files',
}

export type Activators = string | RegExp | (string | RegExp)[]

/**
 * Register a single handler, accounts for special keywords
 * 
 * 
 * @param botHandler: well-formed bot handler
 * 
 * 
 * @param frameworkRef: 
 * @returns 
 */
export function RegisterOneHandler(botHandler: BotHandler, frameworkRef: FrameworkInst) {
	const registerHandler = (activator: string | RegExp, handler, helpText, preference = 0) => {
		// https://github.com/WebexSamples/webex-node-bot-framework/blob/master/lib/framework.js#L1663
		frameworkRef.hears(activator, handler, helpText, preference)
	}
	const registerFrameworkHandler = (eventName: string, handler) => {
		frameworkRef.on(eventName, handler);
	}

	const { activator, handler } = botHandler
	let trigger = activator
	if (trigger instanceof Array) {
		trigger.forEach((alias) => {
			const newHandler = {
				...botHandler,
				activator: alias
			}
			RegisterOneHandler(newHandler, frameworkRef)
		})
	} else {
		if (typeof activator === 'string') {
			const specialFramework = MagicFrameworkActivators[activator]
			if (specialFramework) {
				return registerFrameworkHandler(specialFramework, handler)
			}
			trigger = MagicActivators[activator] || activator
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
		const { activator } = botHandler
		RegisterOneHandler(botHandler, frameworkRef)
		if (activator === '<@help>') {
			addHelp = false;
		}
	})

	if (addHelp) {
		const helpHandler = help(handlers)
		// help
		RegisterOneHandler(helpHandler, frameworkRef)
	}
}