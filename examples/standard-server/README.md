## Standard Server

## 1) Clone repo & install dependencies

```
git clone https://github.com/valgaze/speedybot
cd examples/standard-server
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

- Start up your agent w/ `npm run bot:dev`

```
npm run bot:dev
```

## 4) Run a test

To test just the incoming webhook, edit the **[/incoming_webhook](./src/index.ts)** route & run this command to send a test paylaod

```
curl -X POST -H "Content-Type: application/json" -d '{"id": 1234567890987654321}' http://localhost:8000/incoming_webhook
```

Unlike the **[websockets example](https://speedybot.js.org/examples/speedybot-starter/README)**, you will need to deploy this serve or use a secure mechanism to expose it to the internet and then register the webhooks

You can register webhooks with:

```sh
npm init speedybot webhook create
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
