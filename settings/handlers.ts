import { BotHandler } from './../src' // import { BotHandler } from 'speedybot'
import Namegamehandler from './namegame'

/**
 * Add a "handler" below to control your bot's responses to a user-- just add to the list
 * 
 * At minimum a handler must have
 * keyword: a word, RegEx, or a list of words and/or regex's to trigger the handler
 * handler: a function with access to the bot instance and "trigger" data 
 * helpText: Simple explanation for how to use (this gets displayed by default if the user tells your bot "help")
 * 
 * If you can make it fit in this list, you can make it do whatever you want
 * Special keyword phrases:
 * 1) "<@submit>": will be triggered whenever the user subits data from a form
 * 2) "<@catchall>": will be triggered on every message received
 * 3) "<@help>": override the built-in help handler
 * 4) "<@fileupload>": Handle file-upload event
 * 
 */
const handlers: BotHandler[] = [
	{
		keyword: ['hello', 'hey', 'yo', 'watsup', 'hola'],
		handler(bot, trigger) {
			const reply = `Heya how's it going ${trigger.person.displayName}?`
			bot.say(reply)
		},
		helpText: `A handler that greets the user`
	},
	{
		keyword: ['sendfile'],
		handler(bot, trigger) {
			const fileUrl = 'https://camo.githubusercontent.com/b846bfa57dd26af4e1526abe1173e0b332b75af5d642564b2ab1d0c12a482290/68747470733a2f2f692e696d6775722e636f6d2f56516f5866486e2e676966'
			// Send a DM w/ markdown
			bot.dm(trigger.person.id, 'markdown', 'Sending you a **file**');
			// Send a file by URL
			bot.dm(trigger.person.id, { file: fileUrl })
		},
		helpText: `A handler that attaches a file in a direct message`
	},
	{
		keyword: ['ping', 'pong', 'x'],
		handler(bot, trigger) {
			const normalized = trigger.text.toLowerCase()
			if (normalized === 'ping') {
				bot.say('pong')
			} else {
				bot.say('ping')
			}
		},
		helpText: `A handler that says ping when the user says pong and vice versa`
	},
	{
		keyword: '<@submit>',
		handler(bot, trigger) {
			// Ex. From here data could be transmitted to another service or a 3rd-party integrationn
			bot.say(`Submission received! You sent us ${JSON.stringify(trigger.attachmentAction.inputs)}`)

		},
		helpText: `A special handler that fires anytime a user submits data (you can only trigger this handler by tapping Submit in a card)`
	},
	Namegamehandler, // You can also include single-file handlers in your list
]

export default handlers;