## Speedybot

```
tl:dr; The speedy & easy way to launch a bot
```

![j5](https://i.imgur.com/VQoXfHn.gif)

---

**Note:** To jump right in, go here: **[quickstart.md](https://github.com/valgaze/speedybot/blob/master/quickstart.md)**

---

## In a nutshell

Speedybot is a "toolkit" to take you from zero to a useful bot. Dive in immediately and focus on the stuff that matters-- features, workflows/integrations, content, & interactivity, etc

Speedybot instruments on top of the incredibly useful **[webex-node-bot-framework](https://github.com/WebexSamples/webex-node-bot-framework)** and steps through the fastest path to a working bot and provides some convenience features

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

- *<@catchall>*: Handler that will run on **every** message received (can be useful to dispatch messages natural language services like **[DialogFlow](https://cloud.google.com/dialogflow)** or **[Lex](https://aws.amazon.com/lex/)**)

- *<@fileupload>*: Handler that will fire on **every** file-upload or file-attachment sent to the bot

- *<@help>*: There is a built-in help handler by default (it will print out all of your custom handler's helpTexts from settings/handlers.ts), but use this if you want to make your own

- *<@spawn>*: Gets called whenever a user adds your bot to a new space-- there are some caveats, however, to its behavior, so if you think you'll need this, see **[here](https://github.com/WebexSamples/webex-node-bot-framework/blob/master/README.md#spawn)**, **[here](https://developer.webex.com/blog/a-deeper-dive-into-the-webex-bot-framework-for-node-js)** or the **[resources page](https://github.com/valgaze/speedybot/blob/master/docs/resources.md)** for all the details

- *<@despawn>*: Opposite of spawn, see **[here](https://github.com/WebexSamples/webex-node-bot-framework/#despawn)** for details

ex. Tell the bot "sendcard" to get a card, type into the card & tap submit, catch submission using *<@submit>* and echo back to user

```ts
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
            const cardPayload = {
                "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                "type": "AdaptiveCard",
                "version": "1.0",
                "body": [{
                    "type": "TextBlock",
                    "size": "Medium",
                    "weight": "Bolder",
                    "text": "System is 👍"
                }, {
                    "type": "RichTextBlock",
                    "inlines": [{
                        "type": "TextRun",
                        "text": "If you see this card, everything is working"
                    }]
                }, {
                    "type": "Image",
                    "url": "https://i.imgur.com/SW78JRd.jpg",
                    "horizontalAlignment": "Center",
                    "size": "large"
                }, {
                    "type": "Input.Text",
                    "id": "inputData",
                    "placeholder": "What's on your mind?"
                }],
                "actions": [{
                    "type": "Action.OpenUrl",
                    "title": "Take a moment to celebrate",
                    "url": "https://www.youtube.com/watch?v=3GwjfUFyY6M",
                    "style": "positive"
                }, {
                    "type": "Action.Submit",
                    "title": "Submit",
                    "data": {
                        "cardType": "inputForm"
                    }
                }]
            }

            bot.sendCard(cardPayload, 'Your client does not currently support Adaptive Cards')
        },
        helpText: 'Sends an Adaptive Card with an input field to the user'
    }
]
```

</details>

## Video instructions

```
// todo
```

## CLI Instructions

This repo itself is also a lightweight CLI with exactly two commands.

You can run the commands using npx or install globally (see below):

|         **Command**         |**Description**                                                                                     |
| :-------------------------: | :-------------------------------------------------------------------------------------------------- |
| `npx speedybot setup`  			| scaffold a starter speedybot project (currently requires git) |
| `npx speedybot help` 				| show basic CLI help info |


<details><summary>(Global install using npm/yarn)</summary>

Rather than using **[npx](https://docs.npmjs.com/cli/v7/commands/npx)**, you can perform a global install which install speedybot to your path

```sh
npm i -g speedybot

yarn global add speedybot
```

Make sure all works well by opening a new terminal and entering:

```sh
speedybot help
```

</details>
