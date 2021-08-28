import { BotHandler, FrameworkInst } from './../../util/framework'
import { loadHandlers } from './../../util/handler_runner';

import healthcheck from './special/healthcheck';
import namegame from './special/name_game';

import help from './special/help';

export async function registerHandlers(handlers:BotHandler[], frameworkRef:FrameworkInst) {
	// Register specialHandlers
	const specialHelp = '<@help>'
	const specialCatchAll = '<@catchall>'
	const specialHandlers = [healthcheck, namegame];

	// handle overrides and "special" activators
	// TODO: tidy up
	if (!handlers.map(handler => handler.activator).includes(specialHelp)) {
		const helpHandler = help([...handlers, healthcheck, namegame])
		specialHandlers.push(helpHandler)
	} else {
		handlers.forEach(handlerRoster => {
			const { activator } = handlerRoster;
			if (activator === specialHelp) {
				handlerRoster.activator = ['help']
			}

			if (activator === specialCatchAll) {
				handlerRoster.activator =	/(.*?)/;
			}
		})
	}
	const handlerRoster = [...handlers, ...specialHandlers];
	loadHandlers(handlerRoster, frameworkRef);
}