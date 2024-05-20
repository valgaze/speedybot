## Speedybot Starter

## 1) Clone repo & install dependencies

```
git clone https://github.com/valgaze/speedybot
cd examples/speedybot-starter
npm install
```

## 2) Set your bot access token

- Make a new bot and note its access token from here: **[https://developer.webex.com/my-apps/new/bot](https://developer.webex.com/my-apps/new/bot)**

You can set your `BOT_TOKEN` by running this script in the project directory:

`npm run bot:setup <your_token_here>`

<details><summary>Set token by hand</summary>
Copy the file **[.env.example](.env.example)** as `.env` in the root of your project and save your access token under the `BOT_TOKEN` field, ex

```
BOT_TOKEN=__REPLACE__ME__
```

</details>

## 3) Boot it up!

- Start up your agent

Note: By default your agent will communicate using websockets, so you won't need to worry about details like deployment or webhooks. Later down the line if you need to deploy your agent on a traditional server or ephemeral/serverless function infrastructure **[see the examples](https://speedybot.js.org/examples)**

```
npm run bot:dev
```

## NPM Run Scripts

All you'll probably need are `npm run bot:dev` + maybe `npm run bot:reset`

| Script                  | Description                                    |
| ----------------------- | ---------------------------------------------- |
| `npm run bot:on`        | Launches the SpeedyBot                         |
| `npm run serve`         | Alias for npm run bot:dev                      |
| `npm run dev`           | Alias for npm run bot:dev                      |
| `npm run bot:debug`     | Displays environment information for debugging |
| `npm run bot:dev`       | Launches the bot in development mode           |
| `npm run bot:reset`     | Resets the bot's configuration                 |
| `npm run bot:setup`     | Sets up the bot for the first time             |
| `npm run bot:token`     | Alias for npm run bot:setup                    |
| `npm run bot:help`      | Displays help information for the bot          |
| `npm run help`          | Alias for npm run bot:help                     |
| `npm run bot:addsecret` | Adds a secret to the bot's configuration       |

<details><summary>Getting errors?</summary>

If you see an error like `npm: command not found` you probably need to install node or compatible runtime (like **[bun](https://bun.sh)** or **[deno](https://deno.com)**) onto your system.

There are many ways to do this, but two easy ways:

Option 1. Download + install Node from the official site: **[https://nodejs.org/en/download](https://nodejs.org/en/download)**

Option 2. Download with **[Volta](https://docs.volta.sh/guide/)** in the terminal

```sh
curl https://get.volta.sh | bash

volta install node
```

However you set up your system, make sure to run `node -v` in your terminal to verify node is correctly installed and you can take advantage of its rich ecoysten

</details>

If you see an error that reads somnething like `Forbidden: User has excessive device registrations` you can run `npm run bot:reset`, wait a few minutes and try again
