## Setup for Windows

SpeedyBot can run virtually anywhere on any system or architecture. If you're using a windows machine and want to run SpeedyBot locally you'll need to set up a few pieces

## 1) Install Git-bash

Download git-bash here: https://git-scm.com/download/win

**Note:** You'll have the choice to download 32-bit or 64-bit person, check this page to see which version matches your computer: https://support.microsoft.com/en-us/windows/which-version-of-windows-operating-system-am-i-running-628bec99-476a-2c13-5296-9dd081cdd808

If you're not sure and you have non-ancient machine you probably have 64 bit

If you need step-by-step instructions, see **[this guide](https://www.git-tower.com/blog/git-bash/)**

## 2) Install Node

There are many ways to install **[Node](https://nodejs.org)**, but below is one straightforward method

Download + install Node from the official site-- select the LTS (Long Term Support): **[https://nodejs.org/en/download](https://nodejs.org/en/download)**

You know you're in a good shape if after installation you can run the following command in `Git Bash` and not see an error:

```
node -v
```

If you need step-by-step instructions, see **[this guide](https://blog.teamtreehouse.com/installing-node-js-and-npm-on-windows)**

## 3) Install a Text Editor

There's a lot of text editors in the world these days, a real popular + free one (that works great with SpeedyBot) is called Visual Studio Code, see here for details: **[https://code.visualstudio.com](https://code.visualstudio.com)**

Once you have everything setup, you can follow along with the **[quickstart instructions](./new.md)** or follow the instructions below:

## Set up your bot

## Step I: Grab Your Access Token

- You'll need a WebEx account to build bots— if you don't have one one, sign up for a new account here: **[https://signup.webex.com/sign-up](https://signup.webex.com/sign-up)**

- Once you have an account, create a new bot and copy its access token from here: **[https://developer.webex.com/my-apps/new/bot](https://developer.webex.com/my-apps/new/bot)**

The flow to get a token will look roughly like this:

<img
    src="https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/various/new/build_a_bot.gif"
    :style="{ filter: isDark ? 'invert(1)' : 'none' }"
    style="
      margin: 1rem 0px;
      display: inline-block;
      max-width: 100%;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      padding: 10px;
    "
  />

## Step II: Validate Your Access Token

Once you've got your token, pop it into the box below to validate it & review your bot's details

<TokenInput :showInfo="true" :autofocus="false"/>

::: details Is this safe??

Your bot token is a **highly** sensitive credential and should be protected with encryption and proper secrets management.

SpeedyBot does **NOT** log/persist or do anything (except what you tell it to do) with your bot token.

**REMEMBER:** If your agent's access token is ever compromised/exposed, you can always invalidate it + get a new one by tapping "Regenerate Access Token" under your agent's <a href="https://developer.webex.com/my-apps" style="color:#646cff;text-decoration: bold;">settings page</a>

<img
    src="https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/various/new/regen_token.gif"
    :style="{ filter: isDark ? 'invert(1)' : 'none' }"
    style="
      margin: 1rem 0px;
      display: inline-block;
      max-width: 100%;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      padding: 10px;
    "
  />

:::

## Step III: Setup your bot

Open Git Bash which you installed above and copy/paste the following commands into Git Bash:

::: code-group

```sh-vue [👹 Experienced]
git clone --depth 1 https://github.com/valgaze/speedybot
cd speedybot
cd examples/speedybot-starter
npm i
npm run bot:setup {{ store.state.tokenValid ? store.state.token : '__ACCESS__TOKEN__HERE__' }}
npm run dev
```

:::

## Step IV: Turn it on!

Now send a message to your bot and you'll see a welcome screen with buttons and cards:

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

You can now customize this bot however you want by editing the file **[settings/bot.ts](https://github.com/valgaze/speedybot/blob/v2/examples/speedybot-starter/settings/bot.ts)**

<img src="https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/various/autocomplete.gif?raw=true" />

You can turn off your bot by holding down **CTRL-C** on your keyboard or exiting the terminal. To turn your bot back "on", open your terminal to your project directory and enter `npm run dev`

Whether you're just starting out on your conversation design journey or a seasoned pro, SpeedyBot has you covered for crafting bots that can do it all-- **[securely integrate w/ LLMs + content management systems](./examples/voiceflow/README)**, **[process file-uploads](./patterns.md#handle-file-uploads)**, **[segment content based on user data + behavior](./patterns.md#restrict-access-pattern)**, **[let users upload documents and then 'chat' with them using an LLM and a R.A.G. pattern](./examples/voiceflow-kb/README.md)**, create + manage **[SpeedyCards](./speedycard.md)**, **[ask for a user's location in a privacy-respecting way](./examples/location/README.md)**, and much more.

When you're ready to deploy it to a server, serverless function or virtually any infrastructure/device, **[check out the examples](./examples.md)**

<script setup>
import { ref, watch } from 'vue'
import { useData } from 'vitepress'
import { useCustomStore } from "./.vitepress/util/store";
import TokenInput from './.vitepress/components/token_handler.vue'
const { isDark } = useData()
const store = useCustomStore()

const type = ref(1)

</script>
