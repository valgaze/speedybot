import { easyCard } from './../../../util'
export default function (handlerList) {
	return {
		keyword: ['help', 'helpme', '?'],
		handler(bot, trigger) {
			const text = handlerList.map(handler => {
				const { keyword } = handler;
				let label = keyword
				if (keyword instanceof Array) {
					label = keyword[0]
				}
				return `${label}: ${handler.helpText}`

			}).join('\n\n')
			const payload = {
				title: 'Available Handlers',
				text
			}
			return bot.sendCard(easyCard(payload), `${new Date()} everything is working fine. (But your client doesn't support rendering adpative cards)`);

		},
		helpText: `Get help info`
	}

}