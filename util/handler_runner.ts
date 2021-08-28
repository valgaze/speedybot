import { AllowedActivators, BotHandler, FrameworkInst} from './framework'

export const MapActivator = (activator): string | RegExp => {
	const mapping = {
		'<@catchall>': /.*/gim,
	}
	return mapping[activator] ? mapping[activator] : activator;
}

// TODO: break out into library, better naming, rip out lame types
export const loadHandlers = (handlers:BotHandler[], frameworkRef: FrameworkInst) => {
	const registerHandler = (activator: AllowedActivators, handler, helpText, preference) => {
		// https://github.com/WebexSamples/webex-node-bot-framework/blob/master/lib/framework.js#L1663
		frameworkRef.hears(MapActivator(activator), handler, helpText, preference)
	}

	const registerFrameworkHandler = (eventName: any, handler) => {
		frameworkRef.on(eventName, handler);
	}

	handlers.forEach((item: BotHandler) => {
		const { activator, handler, helpText, preference } = item;
		if (activator instanceof Array) {
			activator.forEach((alias) => {
				registerHandler(alias, handler, helpText, preference)
			})
		} else {
			// Sanity-mapping for submit event
			if (activator === '<@submit>') {
				registerFrameworkHandler('attachmentAction', handler);
			}
			if (activator === '<@spawn>') {
				registerFrameworkHandler('spawn', handler);
			}
			if (activator === '<@despawn>') {
				registerFrameworkHandler('despawn', handler);
			}

			registerHandler(MapActivator(activator), handler, helpText, preference)
		}
	});
}