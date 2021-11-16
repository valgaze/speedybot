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

Speedybot is a "toolkit" to take you from zero to a non-trivial bot as quickly as possible w/ a buttery-smooth developer experience (live-reload, intelli-sense, etc). Dive in immediately and focus on the stuff that matters-- content, workflows/integrations, processing files, etc

Speedybot instruments on top of the incredibly useful **[webex-node-bot-framework](https://github.com/WebexSamples/webex-node-bot-framework)** and steps through the fastest path to a working bot and provides some convenience features

Speedybot also makes it easy to get up and running fast without worrying about tunneling, webhooks, etc.

Speedybot can also give your bot $uperpowers-- **[see here for details on $uperpowers](https://github.com/valgaze/speedybot/blob/master/docs/superpowers.md)**


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
        const utterances = ['Hey how are you $[name]?', `$[name]! How's it going?`, `$[name], it's been too long!`]
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
        // These are like conversation shortcuts-- if you provide a handler function that will be invoked
        // rather than passing on the text as if the user uttered it
        
        $bot.sendChips(['hey','ping','pong', { label: 'my custom chip', handler(bot, trigger) { 
                bot.say(`Hello from 'my custom chip' handler: ${JSON.stringify(trigger, null, 2)}`)
            }
        }])
        
        // ## 4) Save data between conversation "runs"

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

        // ## 4) Integrate with 3rd-parties: $bot.get, $bot.post, etc

        // ex. get external data
        // Opts are axios request config (for bearer tokens, proxies, unique config, etc)
        const res = await $bot.get('https://randomuser.me/api/')
        bot.say({markdown: $bot.snippet(res.data)})

        // ## 4) Files & attachments

        // Send a local file
        // Provide a path/filename, will be attached to message
        // $bot.sendFile(__dirname, 'assets', 'speedybot.pdf') // settings/assets/speedybot.pdf will be sent to user

        // Send a publically accessible URL file
        // Supported filetypes: ['doc', 'docx' , 'xls', 'xlsx', 'ppt', 'pptx', 'pdf', 'jpg', 'jpeg', 'bmp', 'gif', 'png']
        $bot.sendDataFromUrl('https://speedybot.valgaze.com')


        // For an example involving fileuploads + spreadsheets (.xlsx), see here: https://github.com/valgaze/speedybot-superpowers

    },
    helpText: 'A demo of $uperpowers'
}
```
</details>

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
                                     .setImage('https://i.imgur.com/SW78JRd.jpg')
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
