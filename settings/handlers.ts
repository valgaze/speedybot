import { BotHandler } from './../util/framework'

/**
 * Add a "handler" below to control your bot's responses to a user
 * At minimum a handler must have
 * activator: a word, RegEx, or a list of words and/or regex's to trigger
 * handler: a function with access to the bot instance and "trigger" data 
 * helpText: Simple explanation for how to use (this gets displayed if the user tells your bot "help")
 * 
 * If you can make it fit in this list, you can make it do whatever you want
 * Special activator phrases:
 * 1) "<@submit>": will be triggered whenever the user hits "submit on a card"
 * 2) "<@catchall>": will be triggered on every message sent
 * 3) "<@help>": will override the built-in help handler
 * 
 */
const handlers: BotHandler[] = [
	{
		activator: ['hello', 'hey', 'yo', 'watsup', 'hola'],
		handler(bot, trigger) {
			const reply = `Heya how's it going ${trigger.person.displayName}?`
			bot.say(reply)
		},
		helpText: `**hello** A handler that greets the user`
	},
	{
		activator: ['sendfile'],
		handler(bot, trigger) {
			const fileUrl = 'https://raw.githubusercontent.com/valgaze/df-cheat-docs/master/assets/df_cheatcodes.gif'
			// Send a DM w/ markdown
			bot.dm(trigger.person.id, 'markdown', 'Sending you a **file**');
			// Send a file by URL
			bot.dm(trigger.person.id, { file: fileUrl })
		},
		helpText: `**sendfile** A handler that attaches a file in a direct message`
	},
	{
		activator: ['ping', 'pong'],
		handler(bot, trigger) {
			const normalized = trigger.text.toLowerCase()
			if (normalized === 'ping') {
				bot.say('pong')
			} else {
				bot.say('ping')
			}
		},
		helpText: `**ping/pong**: A handler that says ping when the user says pong and vice versa`
	},
	{
		activator: '<@submit>',
		handler(bot, trigger) {
			bot.say(`Submission received! You sent us ${JSON.stringify(trigger.attachmentAction.inputs)}`)
			// ex. From here, data could be passed to a 3rd-party integration
		},
		helpText: `**<@submit>** A special handler that fires anytime a user submits data (you can only trigger this handler by tapping Submit in a card)`
	},
]

export default handlers;