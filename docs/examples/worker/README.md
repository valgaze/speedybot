# [QUICKSTART] 🔥 Deploy your bot to a Worker/V8 Isolate

Note: The steps below assume you have a working WebEx account + a Cloudflare account with permission to create Workers

## 1) Fetch repo & install deps

```
git clone https://github.com/valgaze/speedybot
cd speedybot/examples/worker
npm i
```

## 2) Get + Set your bot access token

- Create a bot from scratch here + copy the token: **[https://developer.webex.com/my-apps/new/bot](https://developer.webex.com/my-apps/new/bot)**

- If you have an existing bot, get its token here (regenerate a new token): **[https://developer.webex.com/my-apps](https://developer.webex.com/my-apps)**

## 3) Get your bot's URL

- If you don't have one already, get a **[cloudflare account](https://dash.cloudflare.com/sign-up)**

- Authenticate your machine with `npx wrangler login`

- Run the command to deploy the code in this repo to your Worker and get your bot URL

```
npm run deploy
```

You'll be prompted to open your browser and you'll see an authorization screen like the following asking to enable **[wrangler (Worker's CLI tool)](https://developers.cloudflare.com/workers/wrangler/)** to take actions with your account, click **ALLOW**

<img src="https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/various/worker_authorize_wrangler.png" />

The URL will look something like https://speedybot-worker-infra.your_username.workers.dev (you'll need it in a minute when we register webhooks)

## 4) Add your bot token

From the same directory as the repo run the following command to add a secret called `BOT_TOKEN` and enter your info using **[secrets manager](https://developers.cloudflare.com/workers/configuration/secrets/#secrets-on-deployed-workers)**

```sh
npx wrangler secret put BOT_TOKEN
```

<img src="https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/various/worker_secret.gif" />

## 5) Deploy your agent

From the same directory as the repo run this command to deploy your agent (now bound with your `BOT_TOKEN` secret)

```
npm run deploy
```

<img src="https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/various/worker_deploy.gif" />

## 6) Register your webhooks

- Right now if you try to interact with your "deployed" agent nothing happens, nobody is "home" to answer the knock at the door

- Make a note of the URL of the deployed function (ie https://speedybot-worker-infra.your_username.workers.dev)

- Hop on over to the **[SpeedyBot Garage (https://speedybot.js.org/garage)](https://speedybot.js.org/garage)**, enter your access token, select the Webhooks tab, and then **Add New Webhook** and add your Worker's URL and (optionally) a webhook secret

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

## 6a) Supply your Webhook "secret" to your Worker

Even though it's "optional", it's a really, really good idea to set a Webhook Secret too so you can make sure incoming requests are the real deal. For more detail, see **[https://speedybot.js.org/webhooks#securing-webhooks](https://speedybot.js.org/webhooks#securing-webhooks)**

To supply your Worker with a webhook secret, set a secret called WEBHOOK_SECRET which you'll need to supply to your Worker like you did with your `BOT_TOKEN` value

```sh
npx wrangler secret put WEBHOOK_SECRET
```

## 7) Take it for a spin

- After connecting webhooks, take it for a spin

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

<script setup>
import { useData } from 'vitepress'
import { useCustomStore } from "./../../.vitepress/util/store";
const { isDark } = useData()
const store = useCustomStore()
</script>
