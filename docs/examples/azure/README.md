# <span class="boop">🔗</span> Integrate with Azure

This guide will show you how to set up SpeedyBot on your local machine and connect it to a large language model managed by Azure. SpeedyBot streamlines the process of designing, deploying, and securing sophisticated conversation systems, tailored for enterprises and large teams with complex needs.

## Step 0: Get your Azure details

To authenticate with Azure, you'll need to obtain some key data. Your organization might be able to provide this information.

```sh
BOT_TOKEN=__REPLACE__ME__
OAUTH_ENDPOINT=https://yourDomain.com/oauth2/default/v1/token
CLIENT_ID=aabbccddeeffgghhiijjkk
CLIENT_SECRET=abcd1234567890987654321

BASE_URL_LLM=https://{your-resource-name}.openai.azure.com/openai
MODEL=gpt-35-turbo
APP_KEY=app-name-here
API_VERSION=2023-12-01-preview
```

Further reading:

- Setup: https://learn.microsoft.com/en-us/azure/ai-services/openai/quickstart?tabs=command-line&pivots=rest-api

- https://learn.microsoft.com/en-us/azure/ai-services/openai/reference

- https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/content-filter?tabs=warning%2Cpython-new

- https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/chatgpt?tabs=python-new

## Step I: Grab Your Access Token

- **Sign Up**: You'll need a WebEx account to build bots— if you don't have one one, sign up for a new account here: **[https://signup.webex.com/sign-up](https://signup.webex.com/sign-up)**

- **Create a Bot**: Once you have an account, create a new bot and copy its access token from here: **[https://developer.webex.com/my-apps/new/bot](https://developer.webex.com/my-apps/new/bot)**

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

## Step II: Get your System Ready

To keep things simple at the start, you'll run the bot from your own machine (meaning when your computer is off, your bot is "off" too). Later, if needed, you can deploy your bot to virtually <a href="./examples/index" target="_blank">any standard server or scalable serverless cloud infrastructure you prefer</a>

<el-switch
v-model="runTimeChoice"
active-text="Use NodeJS (advanced)"
inactive-text="Use Bun (easy)"
:active-value="'node'"
:inactive-value="'bun'"
active-color="#81ecec"
inactive-color="#74b9ff">
</el-switch>

<div v-if="runTimeChoice === 'bun'">

### Getting Started with Bun on Your Computer

Bun is a tool that helps make working with JavaScript faster and easier. It's like a special tool that helps you run JavaScript code really quickly. You can find helpful guides and explanations about Bun [here](https://bun.sh/docs).

Setting up Bun is simple. It ships as a single executable that you can easily install on your computer. If you're not interested in using Bun, that's okay too. SpeedyBot works with many runtimes and infrastructure-- see the NodeJS instructions by tapping the toggle above

Enter the commands below in your terminal to get up and running with Bun:

::: code-group

```sh-vue [Linux/Mac]
curl -fsSL https://bun.sh/install | bash
```

```sh-vue [Windows (must use powershell)]
powershell -c "irm bun.sh/install.ps1 | iex"
```

Verify that Bun is installed correctly and available from your terminal-- if you can run `bun --version` in your terminal and you see a version number you're good to go!

:::

::: details 💡 Tips for Windows Users + Bun Questions

**[Bun](https://bun.sh)** is an experimental high-performance JavaScript runtime and toolkit that combines a package manager, bundler, and task runner into one tool.

Note: Install scripts are available for inspection below

- For Mac: [install.sh](https://github.com/oven-sh/bun/blob/main/src/cli/install.sh)
- For Windows: [install.ps1](https://github.com/oven-sh/bun/blob/main/src/cli/install.ps1)

SpeedyBot can run on any Javascript/Typescript runtime or infrastructue-- Bun just happens to be a speedy and easy way to get up and running

### Note for Mac Users

If you're running an older version of Mac OS and you encounter errors when installing Bun try **[upgrading your operating system](https://support.apple.com/en-us/108382)**

### Note for Windows Users

On PC if you're having trouble getting `Bun` working on Windows/Powershell try the following method instead:

Step 1: Download and run Git Bash https://git-scm.com/download/win

**Note:** Step-by-step instructions available here: https://www.git-tower.com/blog/git-bash/

Step 2: Run the following command inside Git Bash to setup Bun:

```
curl -fsSL https://bun.sh/install | bash
```

Step 3: Completely close out from Git Bash

Step 4: Re-open Git Bash again and try **[Step III](#step-3)**

:::

## Step III: Boot it up! {#step-3}

Copy the command below into your terminal to turn on your bot

::: code-group

```sh-vue [🚀 Bun (FAST!!)]
bunx --bun create-speedybot@2.0.9 setup -e OAUTH_ENDPOINT -e BASE_URL_LLM -e MODEL -e CLIENT_ID -e CLIENT_SECRET -e APP_KEY -e API_VERSION --project azure --boot --bun --install {{ store.state.tokenValid ? `--token ${store.state.token}` : '' }}
```

```sh-vue [👹 Experienced]
git clone --depth 1 https://github.com/valgaze/speedybot
cd speedybot
cd examples/azure
bun install
bun util/cli.ts setup {{ store.state.tokenValid ? store.state.token : '__ACCESS__TOKEN__HERE__' }}
cp .env.example .env # Fill out .env with real values
bun --watch util/launch.ts
```

:::

</div>

<div v-if="runTimeChoice === 'node'">

### Setup Node on Your Computer

Node is a popular tool for running Typescript/JavaScript on web servers. Today, you'll use it to activate your bot—it will handle all the details behind the scenes.

You'll need to install NodeJS on your machine to turn on your bot. There are many ways to do that, but two easy ways:

**Option 1** Download + install Node from the official site: **[https://nodejs.org/en/download](https://nodejs.org/en/download)**

or

**Option 2** Download with **[Volta](https://docs.volta.sh/guide/)** in the terminal

```sh
curl https://get.volta.sh | bash

volta install node
```

Note: If you're having trouble getting setup on Windows see the **[Windows Quickstart](./../../windows.md)**

Whatever option you choose, verify that Node.js is installed, enter `node -v` in your terminal-- if you see a version number you're good to go!

## Step III: Boot it up!

Once Node is on your machine, copy the command below into your terminal to turn on your bot

::: code-group

```sh-vue [🥺 npx (recommended)]
npx -y speedybot@2.0.9 setup -e OAUTH_ENDPOINT -e BASE_URL_LLM -e MODEL -e CLIENT_ID -e CLIENT_SECRET -e APP_KEY -e API_VERSION --project azure --boot --install {{ store.state.tokenValid ? `--token ${store.state.token}` : '' }}
```

```sh-vue [👹 Manual Steps (For experienced)]
git clone --depth 1 https://github.com/valgaze/speedybot
cd speedybot
cd examples/speedybot-starter
npm i
npm run bot:setup {{ store.state.tokenValid ? store.state.token : '__ACCESS__TOKEN__HERE__' }}
cp .env.example .env # Fill out .env with real values
npm run dev
```

:::

</div>

You can turn off your bot by holding down **CTRL-C** on your keyboard or exiting the terminal. To turn your bot back "on", open your terminal to your project directory and enter `bun run dev`

Note: when you press **CTRL-C** the terminal will display the location of your bot

<img src="https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/various/bot_off.gif" />

## Step IV: Customize your agent

Once your bot is loaded, you can customize the bot.ts file to choose which experience you want to deliver to your users. If you've never edited a bot before see **[here for the basics](https://speedybot.js.org/patterns#the-basics)**

Under the first step in `bot.ts` you need to pick one of three LLM strategies to configure your bot's behavior with Azure (ie simple, threaded conversation threads, or streaming) hit save and the bot will reload:

<img src="https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/various/pick_llm_strategy.gif?raw=true" />

Ex. If you selected "streamExample" response tokens will "stream" in to the chat client as they arrive (rather than forcing your users to wait for the full completion):

<img src="https://github.com/valgaze/speedybot-utils/blob/main/assets/various/llm_stream.gif?raw=true"   
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

## Things to try

- Additionally, you can take a look at the **[system prompts](https://github.com/valgaze/speedybot/blob/v2/examples/azure/settings/helpers/prompts.ts)** and tune this starter sample to suit your requirements

- Work with file uploads to see how to extract file data and get meta-data (file-name, file-type, size, etc), try uploading.

Upload a file and use the example code to extract file data like name, type, and size. Test with the **["andy.txt" file](https://github.com/valgaze/speedybot/blob/v2/examples/azure/settings/doc_sample/andy.txt)** to see how you can inject file content into a conversation context

Note: To customize your bot's behavior or its responses, you'll need an editor-- one popular choice is Visual Studio Code.

For installation details, visit **[https://code.visualstudio.com/download](https://code.visualstudio.com/download)**

<img src="https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/various/vsc_editor.png" />

It works great with SpeedyBot and even provides helpful hints as you build ex.

<img src="https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/various/autocomplete.gif?raw=true" />

When you're ready to deploy it to a server, serverless function or virtually any infrastructure/device, **[check out the examples](./../../examples.md)**

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useData } from 'vitepress'
import { useCustomStore } from './../../.vitepress/util/store';
import TokenInput from './../../.vitepress/components/token_handler.vue'
import Blur from './../../.vitepress/components/Blur.vue'
import SpeedyCardEditor from './../../.vitepress/components/SpeedyCardEditor.vue'
const { isDark } = useData()
const store = useCustomStore()

const type = ref(1)

const RUNTIMES = {
  BUN: 'bun',
  NODE: 'node',
  NODEJS: 'nodejs'
};

const DEFAULT_RUNTIME = RUNTIMES.BUN;
const runTimeChoice = ref(DEFAULT_RUNTIME);

const switchToNode = () => {
  runTimeChoice.value = RUNTIMES.NODE;
};

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const runtime = urlParams.get('runtime');

  if ([RUNTIMES.BUN, RUNTIMES.NODE, RUNTIMES.NODEJS].includes(runtime)) {
    runTimeChoice.value = runtime === RUNTIMES.NODEJS ? RUNTIMES.NODE : runtime;
  } else {
    runTimeChoice.value = DEFAULT_RUNTIME;
  }
});

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
