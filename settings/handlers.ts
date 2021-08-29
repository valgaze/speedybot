import { BotHandler } from './../util/framework'

/**
 * Add a "handler" below to control your bot's responses to a user-- just add to the list
 * 
 * At minimum a handler must have
 * activator: a word, RegEx, or a list of words and/or regex's to trigger the handler
 * handler: a function with access to the bot instance and "trigger" data 
 * helpText: Simple explanation for how to use (this gets displayed by default if the user tells your bot "help")
 * 
 * If you can make it fit in this list, you can make it do whatever you want
 * Special activator phrases:
 * 1) "<@submit>": will be triggered whenever the user subits data from a form
 * 2) "<@catchall>": will be triggered on every message received
 * 3) "<@help>": override the built-in help handler
 * 4) "<@fileupload>": Handle file-upload event
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
	{
		activator: '<@fileupload>',
		handler(bot, trigger) {
			const files = trigger.message.files || []

			bot.say(`(**Note:** These files are not publicly accessible)\n ${files.length > 1 ? 'These files were' : 'This file was'} uploaded successfully!`)

			files.forEach(async (file, idx) => {
				// Note the URL here will fail for user because they require an Authorization 

				await bot.say(`${idx + 1}: ${file}`)
			})

			if (files.length === 1) {
				bot.dm(trigger.person.id, `Sending a file back at ya!`)
				bot.dm(trigger.person.id, { file: 'https://camo.githubusercontent.com/b846bfa57dd26af4e1526abe1173e0b332b75af5d642564b2ab1d0c12a482290/68747470733a2f2f692e696d6775722e636f6d2f56516f5866486e2e676966' })
			}
			// ex. From here, you could download the content of the files (with an Authorization header)
			// Pass onto another service for analysis/etc
		},
		helpText: `**<@fileupload>** A special handler that fires anytime a user submits a file`
	},
]

export default handlers;