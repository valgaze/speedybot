# How To


## Special Words

There are a few "special" keywords you can use to "listen" to special events:

- *<@submit>*: Handler that will run anytime data is submitted from an **[Adaptive Card](https://developer.webex.com/docs/api/guides/cards)**

- *<@nomatch>*: Handler that will run if there are no handlers which will match the input

- *<@catchall>*: Handler that will run on **every** message received (in a real agent you probably will not write hard-coded handlers and instead use this handler to dispatch user messages to natural language processing services like **[DialogFlow](https://cloud.google.com/dialogflow)** or **[Lex](https://aws.amazon.com/lex/)**)

- *<@fileupload>*: Handler that will fire on **every** file-upload or file-attachment sent to the bot

- *<@help>*: There is a built-in help handler by default (it will print out all of your custom handler's helpTexts from settings/handlers.ts), but use this keyword if you want to roll your own help

- *<@spawn>*: Gets called whenever a user adds your bot to a new space-- there are some caveats, however, to its behavior, so if you think you'll need this, see **[here](https://github.com/WebexSamples/webex-node-bot-framework/blob/master/README.md#spawn)**, **[here](https://developer.webex.com/blog/a-deeper-dive-into-the-webex-bot-framework-for-node-js)** or the **[resources page](https://github.com/valgaze/speedybot/blob/master/docs/resources.md)** for all the details

- *<@despawn>*: Opposite of spawn, see **[here](https://github.com/WebexSamples/webex-node-bot-framework/#despawn)** for details

- *<@webhook>*: Put your webhook handlers alongside your handlers, see the **["Handling Webhooks"](#handling-webhooks)** section below for an example or video instruction here: https://share.descript.com/view/bnyupJvNJcx


ex. Kitchen sink handler list

```ts
export default handlers = [
	{
		keyword: ['hello', 'hey', 'yo', 'watsup', 'hola'],
		handler(bot, trigger) {
			const reply = `Heya how's it going ${trigger.person.displayName}?`
			bot.say(reply)
		},
		helpText: `A simple handler that greets the user`
	},
	{
		keyword: '<@catchall>',
		handler(bot, trigger) {
			// This could be used to send to a 3rd-party service like DialogFlow, Lex or GPT3 to extract intent &  parameters
			// ex. "I want a large strawberry ice cream" >> { intent: 'order_icecream', flavor: 'strawberry', size: 'large', originalQuery: 'I want a large strawberry ice cream"'}
			console.log('This gets triggered on EVERY message received')
		},
		helpText: `A handler triggered on every message`
	},
	{
		keyword: '<@submit>',
		handler(bot, trigger) {
			bot.say(`Submission received! You sent us ${JSON.stringify(trigger.attachmentAction.inputs)}`)

			// ex. From here, data could be passed to a 3rd-party integration

		},
		helpText: `A special handler that fires anytime a user submits data (you can only trigger this handler by tapping Submit in a card)`
	},
	{
		keyword: '<@fileupload>',
		async handler(bot, trigger) {
			const [file] = trigger.message.files
			const fileData = await $(bot).getFile(file) // "getFile" $uperpower 
			const {extension, type, fileName, data, markdownSnippet} = fileData

			bot.say(`You uploaded '${fileName}'`)

			if (type === 'application/json') {
				bot.say({markdown: markdownSnippet})
			} else if (type === 'text/plain' || type === 'text/csv') {
				bot.say(data)
				console.log("#", data)
			} else {
				bot.say(`// todo: add *.${extension} support`)
			}
		},
		helpText: `A special handler that fires anytime a user submits data (you can only trigger this handler by tapping Submit in a card)`
	}
]
```

## Get a Bot Access Token

- (Recommended) Create new bot: https://developer.webex.com/my-apps/new/bot

- Get an existing bot's token (tap "regenerate"): https://developer.webex.com/my-apps


## Connect to your bot

- Start a 1-1 & ask your bot "healthcheck"-- if all works well you should see something like this:

![image](https://raw.githubusercontent.com/valgaze/speedybot-starter/master/docs/assets/healthcheck.gif)


You can also add a bot to a group space, but note that you or any other human members of the space will need to explicitly "@"-mention the bot to get functionality

## Suggestion Chips (easy way)

- Use a $uperpower called ```sendChips``` to create a list of tappable buttons. If you provide only a string, when tapped the handler system will react as if it was entered by the entered.

- If you provide a ```handler``` and a ```label``` field, when the chip is tapped the custom handler will fire

```ts
import { $ } from 'speedybot'
export const handlers = [{
	keyword: 'sendchips',
	handler(bot, trigger) {
		const $bot = $(bot)
		$bot.sendChips(['hello', 'ping', { 
			label: 'custom chip', 
			handler(bot, trigger) {
				bot.say(`The 'custom chip' was tapped ${JSON.stringify(trigger, null, 2)}`)
			}
		}])
	},
	helpText: 'A special handler for handling user input'
	}]

```

## Utilities and Helper Functions

## SpeedyCard

- Getting started with AdaptiveCards (https://developer.webex.com/docs/api/guides/cards) can be a bit cumbersome and error-prone

- SpeedyCard is a limited subset of AdaptiveCards with basic features with a focus on user interaction & simplicity (title, text, input box, menu-select, no "collapsable" sections, etc)

- Inspired a bit by SwiftUI: https://developer.apple.com/xcode/swiftui/

- Make sure you call ```.render()``` and use the ```.sendCard``` method

<details><summary>Before/After</summary>

## Before 

```ts
const cardJson = {
	"$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
	"type": "AdaptiveCard",
	"version": "1.0",
	"body": [{
		"type": "TextBlock",
		"text": "System is 👍",
		"weight": "Bolder",
		"size": "Large",
		"wrap": true
	}, {
		"type": "TextBlock",
		"text": "If you see this card, everything is working",
		"size": "Small",
		"isSubtle": true,
		"wrap": true,
		"weight": "Lighter"
	}, {
		"type": "Image",
		"url": "https://i.imgur.com/SW78JRd.jpg",
		"horizontalAlignment": "Center",
		"size": "Large"
	}, {
		"type": "Input.Text",
		"placeholder": "What's on your mind?",
		"id": "inputData"
	}],
	"actions": [{
		"type": "Action.Submit",
		"title": "Submit",
		"data": {
			"cardType": "inputForm"
		}
	}, {
		"type": "Action.OpenUrl",
		"title": "Take a moment to celebrate",
		"url": "https://www.youtube.com/watch?v=3GwjfUFyY6M"
	}]
}

bot.sendCard(cardJson, 'Your client does not currently support Adaptive Cards')
```

## After

```ts
const cardJson = new SpeedyCard().setTitle('System is 👍', {st})
                                .setSubtitle('If you see this card, everything is working')
                                .setImage('https://i.imgur.com/SW78JRd.jpg')
                                .setInput(`What's on your mind?`)
                                .setUrl('https://www.youtube.com/watch?v=3GwjfUFyY6M', 'Take a moment to celebrate')
								.setData({mySpecialData: {a:1, b:2}})

bot.sendCard(cardJson.render(), 'Your client does not currently support Adaptive Cards')
```

</details>


```ts
import { SpeedyCard } from 'speedybot' 
export const handlers = [{
    keyword: ['go!'],
    handler(bot, trigger) {
        // Adapative Card: https://developer.webex.com/docs/api/guides/cards
        const myCard = new SpeedyCard().setTitle('System is 👍', {st})
                                       .setSubtitle('If you see this card, everything is working')
                                       .setImage('https://i.imgur.com/SW78JRd.jpg')
                                       .setInput(`What's on your mind?`)
                                       .setUrl('https://www.youtube.com/watch?v=3GwjfUFyY6M', 'Take a moment to celebrate')
									   .setChoices(['Abraham Lincoln','Adlai Stevenson','Connie Rice', 'Monty'], {id:})
									   .setTable([[`Bot's Time`, new Date().toTimeString()], ['Bot running duration', process.uptime()]])
        bot.sendCard(myCard.render(), 'Your client does not currently support Adaptive Cards')

    }
    helpText: 'A demo handler invoked when the user types go!'
},
{
    keyword: '<@submit>',
    handler(bot, trigger) {
        bot.say(`Submission received! You sent us ${JSON.stringify(trigger.attachmentAction.inputs)}`)
    },
    helpText: 'Special handler that fires when data is submitted'
}

```

## fillTemplate & pickRandom

- Variation in responses is a low-investment, high-payoff way to make conversation agents more appealing and less robotic

- pickRandom does exactly what it sounds like-- randomly return an item from a list

- fillTemplate will randomly pick an item from a list and replace ```$[template_name]``` with a specified value

```ts
import { fillTemplate } from 'speedybot'

const handler = {
    keyword: ['go!'],
    async handler(bot, trigger) {
		const phrases = ["Hey $[name], how's it going? Here is one $[flavor] ice cream", "Hiya $[name], here's your $[flavor]", "Here's one $[flavor] for ya, $[name]"]
		const myTemplate = {
			name: trigger.person.displayName,
			flavor: 'mint'
		}

		bot.say(fillTemplate(phrases, myTemplate))

    }
    helpText: 'A demo handler invoked when the user types go!'
}
```

## Send a message

```ts
speedybot.webex.messages.create({
	toPersonEmail: 'joe@bingobongo.com',
	markdown:"This text will be **bold**",
})

```

## Mention someone by email

```ts
<@personEmail:joe@bongo.com>
```

```ts
{
	keyword: ['hello', 'hey', 'yo', 'watsup', 'hola'],
	handler(bot, trigger) {
		if (trigger.person.emails) {
			const [email] = trigger.person.emails;
			const mentionString = `Hey there, I'll **mention** you here, <@personEmail:${email}>`
			bot.say(mentionString)
		}
	},
	helpText: `A simple handler that greets the user`
}
```

## Send a message to a user

```ts
{
	keyword: ['sendmessage'],
	handler(bot, trigger) {
		// 1) Send message back to room/person who triggered handler
		bot.say(`Here's a reply message`)

		// 2) send a direct message
		bot.dm('joe@bongo.com', 'message goes here')

		// 2) Send message to a particular uer
		 bot.webex.messages.create({
			toPersonEmail: 'joe@bongo.com',
			text: `Here is a message sent right to you`
		})
	},
	helpText: `Example handler to send a message`
}
```

## Deploy

```sh
npm install body-parser express speedybot webex-node-bot-framework
```

Deploy the agent (it must be publicly-reachable for webhooks to work) and set the server's host under webhookUrl appended with the route ```/speedybotwebhook```

```ts
import { SpeedybotWebhook } from 'speedybot'
import { BotHandler, SpeedybotConfig } from 'speedybot'
import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = process.env.PORT || 8000
app.use(bodyParser.json());
app.post('/ping', (req, res) => res.send('pong!'))

// handler list
const handlers: BotHandler[] = [
    {
        keyword: ['hello', 'hey', 'yo', 'watsup', 'hola'],
        handler(bot, trigger) {
            const reply = `Heya how's it going ${trigger.person.displayName}?`
            bot.say(reply)
        },
        helpText: `A handler that greets the user`
    }
]

// webhook
const config: SpeedybotConfig = {
    token: '__REPLACE__ME__',
    webhookUrl: 'https://123-45-678-910-987.ngrok.io/speedybotwebhook'
}

app.post('/speedybotwebhook', SpeedybotWebhook(config, handlers, app))

app.listen(port, () => {
    console.log(`Listening + tunneled on port ${port}`)
})

```

## Tunneling

Speedybot can stand up a tunnel using nGrok tunneling software. This eliminates many implementation details, however, running tunneling software is not without risk. Read this on using nGrok and similiar services to "tunnel" before proceeding:  https://github.com/valgaze/speedyhelper/blob/master/docs/ngrok.md

### 1. Start tunnel

```sh
npx speedyhelper tunnel
```

If all went well it should look like this:

![image](https://raw.githubusercontent.com/valgaze/speedybot-starter/master/docs/assets/tunnel.png)

### 2. Set value in config

Set the value under ```webhookUrl``` in config and append ```/speedybotwebhook``` webhook route you need

```json
{
	"token":"aaa-bbb-ccc-ddd",
	"webhookUrl":"http://9044-47-144-173-232.ngrok.io/speedybotwebhook"
}
```


## Handling Webhooks

If you deploy your agent using a server (rather than websockets, ie webhookUrl is set blank in **[settings/config.json](./../settings/config.json)**), you can write your webhook handlers using the <@webhook> keyword. Note that the bot & trigger parameters are not available, however, 

Ex. Process incoming webhooks that post to your agent:

```ts
	{
		keyword: '<@webhook>',
		route: '/my_test_webhook',
		handler(req, res) {
			// Note this is a special handler unlike all the others
			// Webhook/alert handlers don't have 
			const { body } = req
			const msg = `Webhook alert for /my_test_route, data received: ${JSON.stringify(body)}`
			
			const cardJson = {
				"$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
				"type": "AdaptiveCard",
				"version": "1.0",
				"body": [
					{
						"type": "TextBlock",
						"size": "Medium",
						"weight": "Bolder",
						"text": "Data"
					},
					{
						"type": "RichTextBlock",
						"inlines": [
							{
								"type": "TextRun",
								"text": JSON.stringify(body, null, 2)
							}
						]
					}
				],
			}

			this.send({toPersonEmail: 'joe@joe.com', text: msg})
			this.sendCardToPerson('joe@joe.com', cardJson)

			res.send('Thanks') // optional, in case server needs acknowledgement
		}
	}
```


## ExpressJS Server

<details><summary>ExpressJS server, webhooks</summary>

Two notes:
- You'll need to inject the server's publically-available host into config
- The webhook routes need to match in config's webhookUrl

```sh
npm install body-parser express speedybot webex-node-bot-framework
```

```ts
import { SpeedybotWebhook } from 'speedybot'
import { BotHandler, SpeedybotConfig } from 'speedybot'
import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = process.env.PORT || 8000
app.use(bodyParser.json());
app.post('/ping', (req, res) => res.send('pong!'))

// handler list
const handlers: BotHandler[] = [
    {
        keyword: ['hello', 'hey', 'yo', 'watsup', 'hola'],
        handler(bot, trigger) {
            const reply = `Heya how's it going ${trigger.person.displayName}?`
            bot.say(reply)
        },
        helpText: `A handler that greets the user`
    }
]

// webhook
const config: SpeedybotConfig = {
    token: `__REPLACE__ME__`,
    webhookUrl: `https://123-45-678-910-987.ngrok.io/speedybotwebhook`
}

app.post('/speedybotwebhook', SpeedybotWebhook(config, handlers))

app.listen(port, () => {
    console.log(`Listening + tunneled on port ${port}`)
})

```

</details >
If you need a tunnel, you can use **[speedyhelper](https://github.com/valgaze/speedyhelper#readme)** See here for **[important information](https://github.com/valgaze/speedyhelper/blob/master/docs/ngrok.md)**

```sh
npx speedyhelper 8000
```

<details><summary>yarn/npm</summary>

## npm

```
npm i speedyhelper -g
speedyhelper tunnel 8000
```

## yarn 

```sh
yarn global all speedyhelper
speedyhelper tunnel 8000
```

</details>
