import { pickRandom, easyCard, EasyCardPayload } from './../../../util'
export default {
	keyword: ['healthcheck'],
	handler(bot, trigger) {
		// Pick a random response for healthcheck
		const choices = [`At the tone, the time will be ${new Date}`, `${new Date}, healthcheck is GOOD`, `Health Status: Good (${new Date()})`]
		bot.say(pickRandom(choices))

		// Attempt to display a rich adaptive card
		const payload: EasyCardPayload = {
			title: 'System is 👍',
			text: 'If you see this card, everything is working',
			image: 'https://i.imgur.com/SW78JRd.jpg',
			buttonLabel: `Take a moment to celebrate`,
			url: pickRandom([`https://www.youtube.com/watch?v=3GwjfUFyY6M`, `https://www.youtube.com/watch?v=d-diB65scQU`]),
			input: {
				placeholder: `What's on your mind?`
			}
		}
		return bot.sendCard(easyCard(payload), `${new Date()} everything is working fine. (But your client doesn't support rendering adpative cards)`);
	},
	helpText: 'Test the health of your bot. Otherwise there may be an issue with your tunnel, server, or network)'
}