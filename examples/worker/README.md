# Add your bot on a Workers

Note: The steps below assume you have a working WebEx account + a Cloudflare account with permission to create Workers

## 1) Fetch repo & install deps

```
git clone https://github.com/valgaze/speedybot
cd speedybot/examples/worker
npm i
```

## 2) Get + Set your bot access token

- Create a bot from scratch here + cpo the token: **[https://developer.webex.com/my-apps/new/bot](https://developer.webex.com/my-apps/new/bot)**

- If you have an existing bot, get its token her (regenerate): **[https://developer.webex.com/my-apps](https://developer.webex.com/my-apps)**

## 3) Get your bot URL

- If you don't have one already, get a **[cloudflare account](https://dash.cloudflare.com/sign-up)**

- Authenticate your machine with `npx wrangler login`

- Create a new "worker" from the **[cloudflare dashboard](https://dash.cloudflare.com)** & note its URL (you can name it something like https://speedybot1234.username.workers.dev)

## 4) Add your bot token

From the same directory as the repo run the following command to add a secret called `BOT_TOKEN` and enter your info using **[secrets manager](https://blog.cloudflare.com/workers-secrets-environment/#supporting-secrets)**

```sh
npx wrangler secret put BOT_TOKEN
```

To secure your webhooks with a secret set a secret:

```sh
npx wrangler secret put WEBHOOK_SECRET
```

![image](https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/various/worker_secret.gif)

## 5) Deploy your agent

From the same directory as the repo run this command to deploy your agent (now bound with your `BOT_TOKEN` secret)

```
npm run deploy
```

## 6) Register your webhooks

- Make a note the URL of the deployed function (ie http://speedybot-mini.username.workers.dev)

Unlike the **[websockets example](https://speedybot.js.org/examples/speedybot-starter/README)**, you will need to deploy this serve or use a secure mechanism to expose it to the internet and then register the webhooks

Hop on over to the **[Webhooks Section](https://speedybot.js.org/webhooks)** to register your webhooks and secret

## 7) Take it for a spin

- After connecting webhooks, take it for a spin

<img src="https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/various/first_spin.gif" />

## Webhook secrets

- From the same directory as the repo run the following command to add a secret called `WEBHOOK_SECRET` and use the same secret value used when registering webhooks:

```sh
npx wrangler secret put WEBHOOK_SECRET
```
