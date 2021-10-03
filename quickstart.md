## Quickstart

Note: The steps below assume you have a function WebEx account & **[Nodejs](https://nodejs.org/en/download/)** 12+ available on your system

Steps below can be automated using the cli 


```sh
npx speedyhelper setup
```

Video instructions available here: https://share.descript.com/view/ds3UA1kUb9z

-----

## 1. Fetch repo & install dependencies

```
git clone https://github.com/valgaze/speedybot-starter
cd speedybot-starter
npm run setup
```

## 2. Set your bot access token

- If you have an existing bot, get its token here: **[https://developer.webex.com/my-apps](https://developer.webex.com/my-apps)**

- If you don't have a bot, create one and save the token from here: **[https://developer.webex.com/my-apps/new/bot](https://developer.webex.com/my-apps/new/bot)**

Once you have the bot's token, save it to **[settings/config.json](./settings/config.json)** under the ```token``` field

## 3. Boot your Bot

```sh
npm start
```

If all went well, it should look something like this:
![image](https://raw.githubusercontent.com/valgaze/speedybot-starter/master/docs/assets/framework_success.png)

## 4. Run a "healthcheck" with the bot

To make sure all is well, add your bot from Step 1 in a 1-1 chat session and tell it "healthcheck"-- if everything is configured properly you should see something like this:

![image](https://raw.githubusercontent.com/valgaze/speedybot-starter/master/docs/assets/healthcheck.gif)

## 5. Extend

- [ ] From here, you can edit **settings/handlers.ts** and make your own handlers (& integrate with other services)

- [ ] Use the How-To doc to see how to use **["special words"](https://github.com/valgaze/speedybot/blob/master/docs/how-to.md#special-words)** to intercept file-uploads/attachments, submit data from a card, etc

- [ ] Look into Adaptive Cards and other rich chat components: https://developer.webex.com/docs/api/guides/cards

- [ ] See the **[resources](https://github.com/valgaze/speedybot/blob/master/docs/resources.md)** for further reading & inspiration