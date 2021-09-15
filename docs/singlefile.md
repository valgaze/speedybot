If you need a starter repo, see here: **[https://github.com/valgaze/speedybot-starter](https://github.com/valgaze/speedybot-starter)**

## Zero-config launch

Just provide a token & a list of handlers-- config looks like **[this](https://github.com/valgaze/speedybot/blob/master/settings/config.json)** & the handlers looks like **[this](https://github.com/valgaze/speedybot/blob/master/settings/handlers.ts)**

```sh
npm install speedybot webex-node-bot-framework
```

```ts
import { Launch } from 'speedybot'
import handlers from './settings/handlers'
import config from './settings/config.json'
// helper types
import { BotHandler, SpeedybotConfig } from 'speedybot'

async function boot(config: SpeedybotConfig, handlers: BotHandler[]) {
    try {
        const speedybotInst = await Launch(config, handlers)
        const phrase = config.webhookUrl ? `Webhook available here: ${config.webhookUrl}` : 'Connected using websockets'
        console.log(`Success! ${phrase}`)
        return speedybotInst
    } catch (e) {
        throw e;
    }    
}

boot(config, handlers)
```

## ExpressJS server, webhooks

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

<details><summary>plain javascript</summary>

## Simple

```
npm install speedybot webex-node-bot-framework
```

```js
const { Launch } = require('speedybot')

async function boot(config, handlers) {
    try {
        const speedybotInst = await Launch(config, handlers)
        const phrase = config.webhookUrl ? `Webhook available here: ${config.webhookUrl}` : 'Connected using websockets'
        console.log(`Success! ${phrase}`)
        return speedybotInst
    } catch (e) {
        throw e;
    }    
}

const handlers = [
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
		helpText: `A handler that says ping when the user says pong and vice versa`
	}
]
const config = {
    token: '__REPLACE__ME__',
}
boot(config, handlers)
```

```sh
npm install body-parser express speedybot webex-node-bot-framework
```

```js
/**
 * $ npm install body-parser express speedybot webex-node-bot-framework
 * 
 */
const { SpeedybotWebhook } = require('speedybot')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 8000
app.use(bodyParser.json());
app.post('/ping', (req, res) => res.send('pong!'))


const handlers = [
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
const config = {
    token: `__REPLACE__ME__`,
    webhookUrl: `https://123-45-678-910-987.ngrok.io/speedybotwebhook`
}

app.post('/speedybotwebhook', SpeedybotWebhook(config, handlers))

app.listen(port, () => {
    console.log(`Listening + tunneled on port ${port}`)
})
```


</details>