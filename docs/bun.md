# <span class="boop">🐣</span> "I'm new here" (Bun-edition)

tl;dr: SpeedyBot helps you efficiently design, deploy, and secure rich conversation systems-- especially in enterprises and large teams with complex requirements

Follow the quick setup below to go from zero to a SpeedyBot running on your local machine (which you can later seamlessly **[deploy to any infrastructure you want](./examples.md)** if needed)

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

### Validate Token

Once you've got your token, pop it into the box below to validate it & review your bot's details

<TokenInput :showInfo="true" :skipRoomConfig="true" :autofocus="false"/>

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

## Step II: Send a Test Message with Your Access Token

- Let's test out your bot access token. You can do this by sending yourself a SpeedyCard in a direct message. Feel free to tap the 🎲 for some examples or craft your own code with the editor

<SpeedyCardEditor></SpeedyCardEditor>

- When you're ready, tap the **Send Message** tab and use the email you signed up with as the destination and hit Send-- in about a second you should receive a new message from your bot

## Step III: Setup your SpeedyBot Listener

<el-alert
    title="⛔️ Nobody is listening"
    type="error"
    description="You may have noticed that if you tried to submit any data back from a card-- nothing happens "
  />

<img
    src="https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/various/new/card_nosubmit.gif"
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

- In fact, any user interaction with {{ store.state.userData?.emails[0] ?? 'your bot'}} right now— be it a message, SpeedyCard submission, or file upload, results in icy radio silence

- That's because there's nobody "home" to answer the request-- SpeedyBot can "listen" for messages (or card data submissions or files) so anytime someone interacts with your bot it will respond back automatically per your instructions

## Step IV: Run your bot from your computer

### Getting Started with Bun on Your Computer

Bun is a tool that helps make working with JavaScript faster and easier. It's like a special tool that helps you run JavaScript code really quickly. You can find helpful guides and explanations about Bun [here](https://bun.sh/docs).

Setting up Bun is simple. It ships as a single executable that you can easily install on your computer. If you're not interested in using Bun, that's okay too. SpeedyBot works with many runtimes and infrastructure-- learn about other options [here](https://speedybot.js.org/new).

Enter the commands below in your terminal to get up and running with Bun

::: code-group

```sh-vue [Linux/Mac]
curl -fsSL https://bun.sh/install | bash
```

```sh-vue [Windows (powershell)]
powershell -c "irm bun.sh/install.ps1 | iex"
```

:::

Note for Windows: On PC you may have enter the `powershell` install command twice

::: details Concerns about Bun

**[Bun](https://bun.sh)** is an experimental high-performance JavaScript runtime and toolkit that combines a package manager, bundler, and task runner into one tool.

Note: Install scripts are available for inspection below

- For Mac: [install.sh](https://github.com/oven-sh/bun/blob/main/src/cli/install.sh)
- For Windows: [install.ps1](https://github.com/oven-sh/bun/blob/main/src/cli/install.ps1)

SpeedyBot can run on any Javascript/Typescript runtime or infrastructue-- Bun just happens to be the easiest way to get up and running-- see https://speedybot.js.org/new for full instructions

:::

### Boot it up!

Copy the command below into your terminal to turn on your bot

::: code-group

```sh-vue [🚀 Bun (FAST!!)]

bunx --bun create-speedybot@2.0.8 setup --bun --project default --boot --install {{ store.state.tokenValid ? `--token ${store.state.token}` : '' }}
```

```sh-vue [👹 Experienced/Node]
git clone --depth 1 https://github.com/valgaze/speedybot
cd speedybot
cd examples/speedybot-starter
npm i
npm run bot:setup {{ store.state.tokenValid ? store.state.token : '__ACCESS__TOKEN__HERE__' }}
npm run dev
```

:::

### Talk to Your Bot

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

You can turn off your bot by holding down **CTRL-C** on your keyboard or exiting the terminal. To turn your bot back "on", open your terminal to your project directory and enter `bun run dev`

Note: when you press **CTRL-C** the terminal will display the location of your bot

<img src="https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/various/bot_off.gif" />

## Step V Customize your Bot

🎉 Congrats! You have a bot running on your machine!

Now it's time to make it useful just for you. To customize your bot's behavior or responses, you'll need a code editor. One popular choice is Visual Studio Code.

For installation details, visit **[https://code.visualstudio.com/download](https://code.visualstudio.com/download)**

<img src="https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/various/vsc_editor.png" />

It works great with SpeedyBot and even provides helpful hints as you build ex.

<img src="https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/various/autocomplete.gif?raw=true" />

When adding functionality to your bot the only file you'll need to modify is the `bot.ts` file and SpeedyBot will take care of the rest. See **[here for the details](https://speedybot.js.org/patterns#the-basics)** but the tl;dr version is that anytime a user sends your bot a message, uploads a file, or clicks submit on a **[SpeedyCard](./send-a-card.md)** SpeedyBot will follow your instructions and take actions on the user's behalf.

With SpeedyBot you can really do it all-- start a conversation, communicate with a large language model, call out to 3rd-party APIs/services, add a document to an embedding/vector data, and generally handle user input in any way you choose.

### Live reload

You can now customize this bot however you want by editing the file **[settings/bot.ts](https://github.com/valgaze/speedybot/blob/v2/examples/speedybot-starter/settings/bot.ts)** in your code editor. Note that if your bot is running, when you make a change and click save your bot will auto-reload and instantly reflect your changes.

<img src="https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/various/live_reload.gif?raw=true" />

Whether you're just starting out on your conversation design journey or a seasoned pro, SpeedyBot has you covered for crafting bots that can do it all-- **[securely integrate w/ LLMs + content management systems](./examples/voiceflow/README)**, **[process file-uploads](./patterns.md#handle-file-uploads)**, **[segment content based on user data + behavior](./patterns.md#restrict-access-pattern)**, **[let users upload documents and then 'chat' with them using an LLM and a R.A.G. pattern](./examples/voiceflow-kb/README.md)**, create + manage **[SpeedyCards](./speedycard.md)**, **[ask for a user's location in a privacy-respecting way](./examples/location/README.md)**, and much more.

When you're ready to deploy it to a server, serverless function or virtually any infrastructure/device, **[check out the examples](./examples.md)**

<script setup>
import { ref, watch } from 'vue'
import { useData } from 'vitepress'
import { useCustomStore } from "./.vitepress/util/store";
import TokenInput from './.vitepress/components/token_handler.vue'
import Blur from './.vitepress/components/Blur.vue'
import SpeedyCardEditor from './.vitepress/components/SpeedyCardEditor.vue'
const { isDark } = useData()
const store = useCustomStore()

const type = ref(1)

</script>

<style>
  @keyframes floatEmoji {
  0%, 100% {
    transform: translateY(-2px);
  }
  50% {
    transform: translateY(2px);
  }
}

@keyframes floatEmoji {
  0%, 100% {
    transform: translateY(-2px) rotate(0deg);
  }
  50% {
    transform: translateY(2px) rotate(5deg);
  }
}

.boop {
  animation: floatEmoji 1.65s ease-in-out infinite;
  display: inline-block;
}

.boop:hover {
  animation-play-state: paused;
}

</style>
