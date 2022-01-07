If you want a full a starter repo, see here: **[https://github.com/valgaze/speedybot-starter](https://github.com/valgaze/speedybot-starter)**

## Zero-config launch

All you need to do provide a token & a list of handlers-- config looks like **[this](https://github.com/valgaze/speedybot/blob/master/settings/config.json)** & the handlers looks like **[this](https://github.com/valgaze/speedybot/blob/master/settings/handlers.ts)**

```sh
npm install speedybot webex-node-bot-framework
```

## Typescript

```ts
import { Launch, $, BotHandler } from 'speedybot'

// Token config
const config = {
    "token": "__REPLACE__ME__"
}

// Handlers
const handlers:BotHandler[] = [
    {
        keyword: '<@nomatch>',
        handler(bot, trigger) {
            const $bot = $(bot)
            const { text } = trigger.message
            $bot.sendRandom([`Sorry, I don't understand that command`, 
                             'Whoops, that input does not have an associated handler',
                             `Ruh roh, I don't know what to do with ${text}`])
        },
        helpText: 'A special handler which will fire if there is no handler registered for that input'
    },
    {
        keyword: ['hi', 'hey', 'yo', 'whatsup'],
        handler(bot, trigger) {
            const reply = `Heya how's it going ${trigger.person.displayName}?`
			bot.say(reply)

            // Suggestion "chips"
            // $ sign is a "$uperpower"
            $(bot).sendChips(['hey', 'ping', { label:`Trigger the phrase 'pong'`, keyword: 'pong' }], 'Tap an item below')

        },
        helpText: 'my handler'
    },
    {
        keyword: ['ping', 'pong'],
        handler(bot, trigger) {
            const normalized = trigger.text.toLowerCase()
			if (normalized === 'ping') {
				bot.say('pong')
			} else {
				bot.say('ping')
			}
        },
        helpText: 'my handler'
    },
    {
		keyword: '<@fileupload>',
		async handler(bot, trigger) {
            const $bot = $(bot)
			const supportedFiles = ['json', 'txt', 'csv']

            // take 1st file uploaded, note this is just a URL & not authenticated
            const [file] = trigger.message.files

            // Retrieve file data
			const fileData = await $bot.getFile(file)
			const { extension, type } = fileData

            if (supportedFiles.includes(extension)) {
                const {data} = fileData
                // bot.snippet will format json or text data into markdown format
                bot.say({markdown: $bot.snippet(data)})
            } else {
                bot.say(`Sorry, somebody needs to add support to handle *.${extension} (${type}) files`)
            }
		},
		helpText: 'A special handler that will fire whenever a file is uploaded'
	},
]

// Launch the agent
Launch(config, handlers)
```

## Javascript

```js
const { Launch, $, BotHandler } = require('speedybot')

// Token config
const config = {
    "token": "__REPLACE__ME__"
}

// Handlers
const handlers = [
    {
        keyword: '<@nomatch>',
        handler(bot, trigger) {
            const $bot = $(bot)
            const { text } = trigger.message
            $bot.sendRandom([`Sorry, I don't understand that command`, 
                             'Whoops, that input does not have an associated handler',
                             `Ruh roh, I don't know what to do with ${text}`])
        },
        helpText: 'A special handler which will fire if there is no handler registered for that input'
    },
    {
        keyword: ['hi', 'hey', 'yo', 'whatsup'],
        handler(bot, trigger) {
            const reply = `Heya how's it going ${trigger.person.displayName}?`
			bot.say(reply)

            // Suggestion "chips"
            // $ sign is a "$uperpower"
            $(bot).sendChips(['hey', 'ping', { label:`Trigger the phrase 'pong'`, keyword: 'pong' }], 'Tap an item below')

        },
        helpText: 'my handler'
    },
    {
        keyword: ['ping', 'pong'],
        handler(bot, trigger) {
            const normalized = trigger.text.toLowerCase()
			if (normalized === 'ping') {
				bot.say('pong')
			} else {
				bot.say('ping')
			}
        },
        helpText: 'my handler'
    },
    {
		keyword: '<@fileupload>',
		async handler(bot, trigger) {
            const $bot = $(bot)
			const supportedFiles = ['json', 'txt', 'csv']

            // take 1st file uploaded, note this is just a URL & not authenticated
            const [file] = trigger.message.files

            // Retrieve file data
			const fileData = await $bot.getFile(file)
			const { extension, type } = fileData

            if (supportedFiles.includes(extension)) {
                const {data} = fileData
                // bot.snippet will format json or text data into markdown format
                bot.say({markdown: $bot.snippet(data)})
            } else {
                bot.say(`Sorry, somebody needs to add support to handle *.${extension} (${type}) files`)
            }
		},
		helpText: 'A special handler that will fire whenever a file is uploaded'
	},
]

// Launch the agent
Launch(config, handlers)
```
