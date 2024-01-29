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

To test **only** the incoming webhook, edit the **[/incoming_webhook](./src/index.ts)** route & run this command to send a test paylaod

```
curl -X POST -H "Content-Type: application/json" -d '{"id": 1234567890987654321}' http://localhost:8000/incoming_webhook
```

## 5) Register your webhooks

- Right now if you try to interact with your "deployed" agent through the WebEx client nothing happens, nobody is "home" to answer the knock at the door

- For this situation (where the whole agent is on a standard server) you'll need to find a way to securely expose that server in a way that is publically reachable

- Hop on over to the **[SpeedyBot Garage (https://speedybot.js.org/garage)](https://speedybot.js.org/garage)**, enter your access token, select the Webhooks tab, and then **Add New Webhook** and add the URL of your server and (optionally but hopefully) a webhook secret

<img src="https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/various/webhook_steps.gif" 
   :style="{ filter: isDark ? 'invert(1)' : 'none' }"
    style="
      margin: 1rem 0px;
      display: inline-block;
      max-width: 100%;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      padding: 10px;
    "/>

## 6) Supply your Webhook "secret" to your Worker

Even though it's "optional", it's a really, really good idea to set a Webhook Secret too so you can make sure incoming requests are the real deal. For more detail, see **[https://speedybot.js.org/webhooks#securing-webhooks](https://speedybot.js.org/webhooks#securing-webhooks)**

## 7) Take it for a spin

<img src="https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/various/first_spin.gif" 
   :style="{ filter: isDark ? 'invert(1)' : 'none' }"
    style="
      margin: 1rem 0px;
      display: inline-block;
      max-width: 100%;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      padding: 10px;
    "/>

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

<script setup>
import { useData } from 'vitepress'
import { useCustomStore } from "./../../.vitepress/util/store";
const { isDark } = useData()
const store = useCustomStore()
</script>
