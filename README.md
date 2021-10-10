## Speedybot

```
tl:dr; The speedy & easy way to launch a bot
```

[![sb](https://i.imgur.com/VQoXfHn.gif)](https://share.descript.com/view/ds3UA1kUb9z)


---

**Note:** To jump right in, go here: **[quickstart.md](https://github.com/valgaze/speedybot/blob/master/quickstart.md)**

OR

```sh
npx speedyhelper setup
```
---

## Video instructions

- 101: https://share.descript.com/view/ds3UA1kUb9z

- Webhooks/3rd-party integrations: https://share.descript.com/view/bnyupJvNJcx

## In a nutshell

Speedybot is a "toolkit" to take you from zero to a non-trivial bot as quickly as possible. Dive in immediately and focus on the stuff that matters-- features, workflows/integrations, content, & interactivity, etc

Speedybot instruments on top of the incredibly useful **[webex-node-bot-framework](https://github.com/WebexSamples/webex-node-bot-framework)** and steps through the fastest path to a working bot and provides some convenience features

Even if you don't use all of speedybot's features, if nothing else there are several helper utillties that are useful for crafting a rich conversation agent-- more details **[here](https://github.com/valgaze/speedybot/blob/master/docs/util.md)** Speedybot has one required dependency

## Adding a new chat handler

With Speedybot, all you need to worry about is the **[settings directory](https://github.com/valgaze/speedybot/tree/master/settings)** directory with two files:

**1. config.json:** This is where you'll put your bot access token and the "tunnel" (or webhost) where your bot is reachable from webhooks

**2. handlers.ts:** A list of "handlers" that respond to keywords

Example handler:

```js
{
	keyword: ['hello', 'hey', 'yo', 'watsup', 'hola'],
	handler(bot, trigger) {
		// bot: https://github.com/WebexSamples/webex-node-bot-framework#bot
		// trigger: https://github.com/WebexSamples/webex-node-bot-framework#trigger
		const reply = `Heya how's it going ${trigger.person.displayName}?`
		bot.say(reply)
	},
	helpText: `**hello** A handler that greets the user`
}
```

## Special keywords

There are a few "special" keywords you can use to "listen" to special events:

- *<@submit>*: Handler that will run anytime data is submitted from an **[Adaptive Card](https://developer.webex.com/docs/api/guides/cards)**

- *<@catchall>*: Handler that will run on **every** message received (can be useful to dispatch messages to natural language services like **[DialogFlow](https://cloud.google.com/dialogflow)** or **[Lex](https://aws.amazon.com/lex/)**)

- *<@fileupload>*: Handler that will fire on **every** file-upload or file-attachment sent to the bot

- *<@help>*: There is a built-in help handler by default (it will print out all of your custom handler's helpTexts from settings/handlers.ts), but use this if you want to make your own

- *<@spawn>*: Gets called whenever a user adds your bot to a new space-- there are some caveats, however, to its behavior, so if you think you'll need this, see **[here](https://github.com/WebexSamples/webex-node-bot-framework/blob/master/README.md#spawn)**, **[here](https://developer.webex.com/blog/a-deeper-dive-into-the-webex-bot-framework-for-node-js)** or the **[resources page](https://github.com/valgaze/speedybot/blob/master/docs/resources.md)** for all the details

- *<@despawn>*: Opposite of spawn, see **[here](https://github.com/WebexSamples/webex-node-bot-framework/#despawn)** for details

ex. Tell the bot "sendcard" to get a card, type into the card & tap submit, catch submission using *<@submit>* and echo back to user

```ts
import { Card } from 'speedybot'
export default [{
        keyword: '<@submit>',
        handler(bot, trigger) {
            bot.say(`Submission received! You sent us ${JSON.stringify(trigger.attachmentAction.inputs)}`)
        },
        helpText: 'Special handler that fires when data is submitted'
    },
    {
        keyword: 'sendcard',
        handler(bot, trigger) {
            bot.say('One card on the way...')
            // Adapative Card: https://developer.webex.com/docs/api/guides/cards
            const myCard = new SpeedyCard().setTitle('System is 👍')
                                     .setSubtitle('If you see this card, everything is working')
                                     .setImage('https://i.imgur.com/SW78JRd.jpg')
                                     .setInput(`What's on your mind?`)
                                     .setUrl('https://www.youtube.com/watch?v=3GwjfUFyY6M', 'Take a moment to celebrate')
                                     .setTable([[`Bot's Date`, new Date().toDateString()], ["Bot's Uptime", `${String(process.uptime())}s`]])
            bot.sendCard(myCard.render(), 'Your client does not currently support Adaptive Cards')
        },
        helpText: 'Sends an Adaptive Card with an input field to the user'
    }
]
```

</details>


## CLI Instructions

|         **Command**         |**Description**                                                                                     |
| :-------------------------: | :-------------------------------------------------------------------------------------------------- |
| `npx speedyhelper setup`  			    | scaffold a starter speedybot project (requires git) |
| `npx speedyhelper setup -t aaa-bbb-ccc-ddd` 				| scaffold a speedybot project using the value after setup as the token|
| `npx speedyhelper help` 				   | show basic CLI help info |
| `npx speedyhelper web -q`                | Kick off a web-based chat interface (use -q flag to interactively add token + roomId)  |
| `npx speedyhelper sendmsg`               | Send a message to a room using bot access token  |
| `npx speedyhelper tunnel -p 8000`        | Start an nGrok tunnel, defaults to port 8000|




<details><summary>(Global install using npm/yarn)</summary>

Rather than using **[npx](https://docs.npmjs.com/cli/v7/commands/npx)**, you can perform a global install which install speedyhelper to your path

```sh
npm i -g speedyhelper

yarn global add speedyhelper
```

Make sure all worked well by opening a new terminal and entering:

```sh
speedyhelper help
```

</details>
