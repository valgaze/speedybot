import { easyCard } from './../../../util'
export default function (handlerList) {
	return {
		activator: ['help', 'helpme', '?'],
		handler(bot, trigger) {
			const text = handlerList.map(handler => handler.helpText).join('\n\n')
			const payload = {
				title: 'Available Handlers',
				text
			}
			return bot.sendCard(easyCard(payload), `${new Date()} everything is working fine. (But your client doesn't support rendering adpative cards)`);

		},
		helpText: `**help: Get help info**`
	}

}