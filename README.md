## Speedybot

```
tl:dr; Speedy & easy way to rapidly iterate with conversation "bots"
```

![j5](https://i.imgur.com/VQoXfHn.gif)

---

**Note:** For the very impatient, go here: **[quickstart.md](https://github.com/valgaze/speedybot/blob/master/quickstart.md)**

---

## In a nutshell

Speedybot is a virtually-zero configuration kit designed to take you from zero to a useful bot. It instruments on top of the handy **[webex-node-bot-framework](https://github.com/WebexSamples/webex-node-bot-framework)** but handles most configuration details for. With a bot token and a tunnel address, you'll be up & running in less than a couple minutes.

With Speedybot, all you need to worry about is the **[settings](https://github.com/valgaze/speedybot/tree/master/settings)** directory where you'll find two files:

**1. config.json:** This is where you'll put your bot access token and the "tunnel" (or webhost) where your bot is reachable from webhooks

**2. handlers.ts:** A single file where you place all your handler code

Example handler:

```js
{
	activator: ['hello', 'hey', 'yo', 'watsup', 'hola'],
	handler(bot, trigger) {
		const reply = `Heya how's it going ${trigger.person.displayName}?`
		bot.say(reply)
	},
	helpText: `**hello** A handler that greets the user`
}
```

Innside the handler function above, it's easy to integrate with 3rd-party services or create a pleasant user experience. (Note: See **[here](https://github.com/WebexSamples/webex-node-bot-framework/#trigger--object)** for the type of data available on trigger)

There are a few "special" activator words you can use which have a special meaning in a Speedybot project:

- *<@submit>*: Handler that will run anytime data is submitted from an **[Adaptive Card](https://developer.webex.com/docs/api/guides/cards)**

- *<@catchall>*: Handler that will run on **every** message received from the backend

- *<@help>*: There is a built-in help handler by default (it will print out all of your custom handler's helpTexts from settings/handlers.ts), but use this if you want to make your own

- *<@spawn>*: Gets called whenever a user adds your bot to a new space-- there are some caveats, however, to its behavior, so if you think you'll need this, see **[here](https://github.com/WebexSamples/webex-node-bot-framework/blob/master/README.md#spawn)**, **[here](https://developer.webex.com/blog/a-deeper-dive-into-the-webex-bot-framework-for-node-js)** or the **[resources page](https://github.com/valgaze/speedybot/blob/master/docs/resources.md)** for all the details

- *<@despawn>*: Opposite of spawn, see **[here](https://github.com/WebexSamples/webex-node-bot-framework/#despawn)** for details

## Video instructions

```
// todo
```

## CLI Instructions

This repo itself is also a lightweight CLI with exactly three commands.

You can run the commands using npx or install globally (see below):

|         **Command**         |**Description**                                                                                     |
| :-------------------------: | :-------------------------------------------------------------------------------------------------- |
| `npx speedybot setup`  			| scaffold a starter speedybot project (current requires git) |
| `npx speedybot tunnel`   		| start an nGrok tunnel (you can optionally add a port, defaults to 8000) |
| `npx speedybot help` 				| show basic CLI help info |


<details><summary>(Global install using npm/yarn)</summary>

Rather than using **[npx](https://docs.npmjs.com/cli/v7/commands/npx)**, you can perform a global install which install speedybot to your path

```sh
npm i -g speedybot

yarn add global speedyspot
```

Make sure all works well by opening a new terminal and entering:

```sh
speedybot help
speedybot tunnel 8000
```

</details>

## Easy Webhook Tunnnels

Speedybot can stand up a tunnel using nGrok tunneling software. This eliminates many implementation details, however, running tunneling software is not without risk. Make sure to familiarize yourself with **[nGrok](./docs/ngrok/md)** and security best practices

