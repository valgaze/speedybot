## Speedybot

```
tl:dr; The speedy & easy way to launch a bot
```

[![sb](https://i.imgur.com/VQoXfHn.gif)](https://share.descript.com/view/ds3UA1kUb9z)

---

**Note:** To jump right in, go here: **[quickstart.md](https://github.com/valgaze/speedybot/blob/master/quickstart.md)**

## What's Speedybot?

Speedybot is a tool to take you from zero to a user-valuable bot as quickly as possible w/ a **buttery-smooth developer experience.** Think of it as a *"helper"* library that extends the marvelous **[Node WebEx Bot Framework](https://github.com/WebexSamples/webex-node-bot-framework)** and makes it **fast and easy** for you to create sophisticated conversation agents. In short, Speedybot lets you focus on the stuff that actually matters-- content and powerful integrations.

## Features

🌟 Collect + validate user input-- and reprompt if validation fails (more info **[here](#prompt)**)

🌟 "SpeedyCard" to easily create rich interactive **["Adaptive Cards"](https://developer.webex.com/docs/api/guides/cards)** (more info **[here](#speedycard)**)

🌟 Access encrypted file uploads + attachments (more info **[here](https://github.com/valgaze/speedybot-superpowers/blob/master/settings/handlers.ts)**)

🌟 Integrate with 3rd-party services

🌟 Response variation + templating

🌟 Automatic "help" generation

🌟 Persist data between conversation runs ("globally" and scoped to an individual user)

🌟 Zero configuration to get up and running (defaults to websockets for webhooks-- no nGrok or tunneling)

🌟 Lots of quality-of-life and convenience features

## How to use

The best way to see speedybot in action is to jump right in, see here for batteries-included starter: https://github.com/valgaze/speedybot-starter

## Video instructions

- 101: https://share.descript.com/view/ds3UA1kUb9z

- Webhooks/3rd-party integrations: https://share.descript.com/view/bnyupJvNJcx

You can also use the **[CLI Tool "speedyhelper"](#cli)**

```sh
npx speedyhelper setup
```

## Special keywords

There are a few "special" keywords you can use to "listen" to special events:

- *<@submit>*: Handler that will run anytime data is submitted from an **[Adaptive Card](https://developer.webex.com/docs/api/guides/cards)**

- *<@nomatch>*: Handler that will run if there are no handlers which will match the input

- *<@catchall>*: Handler that will run on **every** message received (in a real agent you probably will not write hard-coded handlers and instead use this handler to dispatch user messages to natural language processing services like **[DialogFlow](https://cloud.google.com/dialogflow)** or **[Lex](https://aws.amazon.com/lex/)**)

- *<@fileupload>*: Handler that will fire on **every** file-upload or file-attachment sent to the bot

- *<@help>*: There is a built-in help handler by default (it will print out all of your custom handler's helpTexts from settings/handlers.ts), but use this keyword if you want to roll your own help

- *<@spawn>*: Gets called whenever a user adds your bot to a new space-- there are some caveats, however, to its behavior, so if you think you'll need this, see **[here](https://github.com/WebexSamples/webex-node-bot-framework/blob/master/README.md#spawn)**, **[here](https://developer.webex.com/blog/a-deeper-dive-into-the-webex-bot-framework-for-node-js)** or the **[resources page](https://github.com/valgaze/speedybot/blob/master/docs/resources.md)** for all the details

- *<@despawn>*: Opposite of spawn, see **[here](https://github.com/WebexSamples/webex-node-bot-framework/#despawn)** for details


## CLI

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

# Some Demos

## Prompt

ex. When the user says 'prompt', the agent will continue asking the user for a number whose digits sum to 10 (can quit by saying ```$exit```)

![sb](https://raw.githubusercontent.com/valgaze/speedybot/master/docs/assets/prompt_demo.gif)

```ts
import { $ } from 'speedybot'

// $(bot).prompt has 3 components
// - (1) retry (list of message to provide feedback or encourage the user to modify their)
// - (2) success (handler when validation passes, the final parameter is the value)
// - (3) validate (function that accepts the user-provided value as a parameter)

export default [
    {
		keyword: 'prompt',
		async handler(bot) {

			const $bot = $(bot)
			await bot.say('Sending you a prompt...')
			$bot.prompt('Enter a number whose digits that add up to 6 (ex 51, 60, 33, 501, etc)', {
				retry: [`Sorry, doesn't add up to 6`, 
                        `Whoops that value doesn't work try again`, 
                        `That value doesn't work`, 
                        `Whoops, that input is not valid. You can type '$exit' to abandon this`
                        ],
				async success(bot, trigger, answer) {
					bot.say('You did it!!! Good job! <3 <3')
					bot.say(answer)

					// Ex. Submit data to a 3rd-party service/integration
					const res = await $bot.post('https://jsonplaceholder.typicode.com/posts', { data: { title: 'my special value that adds to 6', userValue: answer } })
					$(bot).sendSnippet(res.data, 'Posted response to https://jsonplaceholder.typicode.com/posts')
				},
				validate(val=0) {
					// Make sure digits add to 6
					const sum = String(val).split('')
											.map(Number)
											.reduce(function (prev, next) {
												return prev + next;
											}, 0)
					if (sum === 6) {
						return true
					} else {
						return false
					}
				}
			})
		},
		helpText: 'A handler which will ask the user for a number whose digits sum to 6'
	}
]
```

## SpeedyCard

ex. Tell the bot "sendcard" to get a card, type into the card & tap submit, catch submission using *<@submit>* and echo back to user

![sb](https://raw.githubusercontent.com/valgaze/speedybot/master/docs/assets/send_card.gif)

```ts
import { SpeedyCard } from 'speedybot'
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
                                     .setImage('https://raw.githubusercontent.com/valgaze/speedybot/master/docs/assets/chocolate_chip_cookies.png')
                                     .setInput(`What's on your mind?`)
                                     .setUrl('https://www.youtube.com/watch?v=3GwjfUFyY6M', 'Take a moment to celebrate')
                                     .setTable([[`Bot's Date`, new Date().toDateString()], ["Bot's Uptime", `${String(process.uptime())}s`]])
                                     .setData({mySpecialData: {a:1, b:2}})
            bot.sendCard(myCard.render(), 'Your client does not currently support Adaptive Cards')
        },
        helpText: 'Sends an Adaptive Card with an input field to the user'
    }
]
```

## Suggestion Chips

![sb](https://raw.githubusercontent.com/valgaze/speedybot/master/docs/assets/chip_tap_persist.gif)

Suggestion "chips" are a shortcut to trigger other handlers as if the user uttered it themselves-- useful for quizzing or providing suggestions of what to say next

ex. When the user enters the text 'chips' or 'chip', they can select an item and trigger another handler

```ts
import { $, BotInst, Trigger} from 'speedybot'

// $(bot).prompt has 3 components
// - (1) retry (list of message to provide feedback or encourage the user to modify their)
// - (2) success (handler when validation passes, the final parameter is the value)
// - (3) validate (function that accepts the user-provided value as a parameter)

export default [
    {
		keyword: ['chips', 'chip'],
		async handler(bot) {
			const $bot = $(bot)
			await bot.say('Here are some chips...')

            const specialChip = {
                label: 'my special chip', 
                handler(bot: BotInst) {
                    bot.say('You tapped the special chip!')
                }
            }
            $bot.sendChips(['hey', specialChip, 'ping', { label:`Say the phrase 'pong'`, keyword: 'pong' }], 'Tap an item below')
		},
		helpText: 'Show suggestion chips'
	},
        {
        keyword: ['hi', 'hey', 'yo', 'whatsup'],
        handler(bot, trigger) {
            const reply = `Heya how's it going ${trigger.person.displayName}?`
			bot.say(reply)
        },
        helpText: 'Basic greeting handler'
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
        helpText: 'The ping/pong handler'
    }
]
```

## Adding a new chat handler

With Speedybot, all you need to worry about is the **[settings directory](https://github.com/valgaze/speedybot-starter/tree/master/settings)** directory with two files:

**1. config.json:** This is where you'll put your bot access token and the "tunnel" (or webhost) where your bot is reachable from webhooks

**2. handlers.ts:** A list of "handlers" that respond to keywords

Example handler:

A handler has 3 components:

- Keyword: a string, regex, or list of strings or regex's that will match against the user's input (or a **[Special Keyword](#special-keywords)**)

- Handler: A function that takes a ```bot``` and ```trigger```

- helpText: A decription of what the handler does (used by the default <@help> handler to tell users what your bot can do)

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

## $uperpowers

Speedybot can also give your bot $uperpowers-- **[see here for details on $uperpowers](https://github.com/valgaze/speedybot/blob/master/docs/superpowers.md)**

<details><summary>$uperpowers sample</summary>

```ts 
import { $ } from 'speedybot'

export default 	{
    keyword: ['$', '$uperpowers', '$uperpower', '$superpower'],
    async handler(bot, trigger) {
        // ## 0) Wrap the bot object in $ to give it $uperpowers, ex $(bot)
        const $bot = $(bot)

        // Provide some space
        await $bot.clearScreen()

        // ## 1) Contexts: set, remove, and list
        // Contexts persist between "turns" of chat
        // Note: contexts can optionally store data
        // If you just need to stash information attached to a user, see "$(bot).saveData" below
        await $bot.saveContext('mycontext1')
        await $bot.saveContext('mycontext2', { data: new Date().toISOString()})

        const mycontext2 = await $bot.getContext('mycontext2')
        $bot.log('# mycontext2', mycontext2) // { data: '2021-11-05T05:03:58.755Z'}

        // Contexts: list active contexts
        const allContexts = await $bot.getAllContexts() // ['mycontext1', 'mycontext2']
        bot.say(`Contexts: ${JSON.stringify(allContexts)}`)

        // Contexts: check if context is active
        const isActive = await $bot.contextActive('mycontext1')
        $bot.log(`mycontext1 is active, ${isActive}`) // 'mycontext1 is active, true'

        // Contexts: remove context
        await $bot.deleteContext('mycontext1')

        const isStillActive = await $bot.contextActive('mycontext1')
        $bot.log(`mycontext1 is active, ${isStillActive}`) // 'mycontext1 is active, false'

        // ## 2) Helpers to add variation and rich content

        // sendRandom: Sends a random string from a list
        $bot.sendRandom(['Hey!','Hello!!','Hiya!'])

        // sendTemplate: like sendRandom but replace $[variable_name] with a value
        const utterances = ['Hey how are you $[name]?', `$[name]! How's it going?`, '$[name]']
        const template = { name: 'Joey'}
        $bot.sendTemplate(utterances, template)

        // sendURL: Sends a URL in a clickable card
        $bot.sendURL('https://www.youtube.com/watch?v=3GwjfUFyY6M', 'Go Celebrate')

        // snippet: Generate a snippet that will render data in markdown-friendly format
        const JSONData = {a: 1, b:2, c:3, d:4}

        $bot.sendSnippet(JSONData, `**Here's some JSON, you'll love it**`) // send to room

        // Snippet to a specifc room or specific email
        // const snippet = $bot.snippet(JSONData)
        // $bot.send({markdown: snippet, roomId:trigger.message.roomId, text: 'Your client does not render markdown :('}) // send to a specific room
        // $bot.send({markdown: snippet, toPersonEmail:'joe@joe.com', text: 'Your client does not render markdown :('}) // send to a specific person

        // ## 3) Conversation "chips"

        // Set all chips to disappear after tap (defaults to false)
        $bot.setChipsConfig({disappearOnTap: true})

        // Send chip with custom handler
        const customChip = { 
            label: 'custom chip', 
            handler(bot:BotInst, trigger: Trigger) {
                $bot.sendSnippet(trigger, `**The 'custom chip' was tapped**	`)
                $bot.$trigger('chips', trigger) // re-render chips
            }
        }

        // Add optional title to chips
        $bot.sendChips(['hey', 'ping', 'pong', '$', {label:`Trigger the 'hey' handler`, keyword: 'hey'}, customChip], 'These chips will disappear on tap')


        // ## 4) Save data between conversation "runs" (scoped to user, async)

        interface SpecialUserData {
            specialValue: string;
            userId: String;
        }
        const specialData:SpecialUserData = {
            specialValue: Math.random().toString(36).slice(2),
            userId: trigger.personId,
        }
        
        // Save the data
        await $bot.saveData<SpecialUserData>('userData', specialData)
        
        // Retrieve the data (returns null if does not exist)
        const dataRes = await $bot.getData<SpecialUserData>('userData')

        if (dataRes) {
            // These are now "typed"
            const theValue = dataRes.specialValue
            const id = dataRes.userId
            $bot.log(`Your specal value was ${theValue} and your id is ${id}`)

            // destroy data
            $bot.deleteData('userData')
        }

        // ## 4a) Stash "global" values between runs (don't use a lot, short snippets like counters or other data)
        // Note: not persistent storage if using default storage provider
        const globalVal = $bot.globalGet('myKey')

        if (!globalVal) {
            $bot.globalSave('myKey', { dateAdded: new Date().toISOString() })
        }


        // ## 5) Integrate with 3rd-parties: $bot.get, $bot.post, etc

        // ex. get external data
        // Opts are axios request config (for bearer tokens, proxies, unique config, etc)
        const res = await $bot.get('https://randomuser.me/api/')
        bot.say({markdown: $bot.snippet(res.data)})

        // ## 6) Files & attachments

        // Send a local file
        // Provide a path/filename, will be attached to message
        // $bot.sendFile(__dirname, 'assets', 'speedybot.pdf')

        // Send a publically accessible URL file
        // Supported filetypes: ['doc', 'docx' , 'xls', 'xlsx', 'ppt', 'pptx', 'pdf', 'jpg', 'jpeg', 'bmp', 'gif', 'png']
        $bot.sendDataFromUrl('https://drive.google.com/uc?export=download&id=1VI4I4pYVVdMnB6YOQuSejVcrSwN0cotd')

        // // experimental (fileystem write): send arbitrary JSON back as a file
        // $bot.sendDataAsFile(JSON.stringify({a:1,b:2}), '.json')

        // For an example involving parse'able spreadsheets (.xlsx), see here: https://github.com/valgaze/speedybot-superpowers
    },
    helpText: 'A demo of $uperpowers'
}
```
</details>

## Credits/Attribution

- Cookie image courtesy of Daniel Lopez: https://unsplash.com/photos/aT7CE57EZL8 & https://unsplash.com/@soydanielwolf

- Robot icon (not included in this repo) created by Freepik - Flaticon, https://www.flaticon.com/free-icons/robot
