## Quickstart

Note: The steps below assume you have a working WebEx account & **[Nodejs](https://nodejs.org/en/download/)** 12+

## 0. Fetch repo & install dependencies

```
git clone https://github.com/valgaze/speedybot speedybot
cd speedybot
npm run setup
```

## 1. Set your bot access token

- If you have an existing bot, get its token here: https://developer.webex.com/my-apps

- If you don't have a bot, create one and save the token from here: https://developer.webex.com/my-apps/new/bot

Once you have the bot's token, save it to **settings/config.json** under the ```token``` field

## 2. Set your tunnel's url

Note this will use nGrok to make your local machine reachable from the public internet, read up on details & alternatives **[here](https://github.com/valgaze/speedybot/blob/master/docs/ngrok.md)**

In a new terminal window, enter the directory with your project and run:

```sh
npm run tunnel
```

Leave it running-- by default, the tunnel lasts for 2 hourss

Once you see the tunnel's URL, save it to **settings/config.json** under the ```tunnel``` field 

If all went well, it should look like this:

![image](https://github.com/valgaze/speedybot/blob/master/docs/assets/tunnel_success.png)


## 3. Boot the server

In a **another** new terminal enter the following to boot your server

```sh
npm start
```
If all went well, it should look something like this:

![image](https://raw.githubusercontent.com/valgaze/speedybot/master/docs/assets/server_success.png)


## 4. Run a "healthcheck" with the bot

To make sure all is well, add your bot from Step 1 in a 1-1 chat session and tell it "healthcheck"-- if everything is configured properly you should see something like this:

![image](https://raw.githubusercontent.com/valgaze/speedybot/master/docs/assets/healthcheck.gif)

## 5. Extend & integrate

- [ ] From here, you can edit **settings/handlers.ts** and make your own handlers (& integrate )

- [ ] Ask your bot "namegame"

- [ ] See the **[resources](https://github.com/valgaze/speedybot/blob/master/docs/resources.md)** for further reading & ideas