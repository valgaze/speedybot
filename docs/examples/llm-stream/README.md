## LLM-Stream

This was the major inspiration for SpeedyBot 2.0-- how to efficiently allocate the edits to "stream in" responses from an LLM eendpoint.

- You can make up to 10 edits on a WebEx message which can approximate the "stream-in" effect on some LLM applications (otherwise the latency involved with forcing a "just wait-it-out" for a generation is an awful experience)

- With unknown chunk-length & an unknown number of chunks, we need a reasonable way to "smoothly" stream in edits so the user isn't left hanging but also not use up our precious 10 edits

- Streaming is implemented using: https://github.com/axflow/axflow (from https://axflow.dev), although **[vercel](https://sdk.vercel.ai/docs/concepts/streaming)** and others have libraries that could work

- This is a bare-bones example which can be easily extended-- To see a reference (which depends a storage/state mechanism) which will manage conversational context + swap personas, handle file-uploads (.doc, xlsx files, and other) and inject into prompt, see here: https://github.com/valgaze/speedybot-gpt4

Example Stream:

<img src="https://github.com/valgaze/speedybot-utils/blob/main/assets/various/llm_stream.gif?raw=true" />

## Setup

## 1) Clone repo & install dependencies

```
git clone https://github.com/valgaze/speedybot
cd examples/llm-steam
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

## 3) Set your OpenAI api Key

- Grab an OpenAI API key from here: https://platform.openai.com/api-keys

Add it to your .env file manually or by running the following command:

```
npm run bot:addsecret OPEN_AI_KEY=sk-abcdefhg73624429defghijkl5
```

Your .env file should look like this:

```
OPEN_AI_KEY=__REPLACE__ME__
BOT_TOKEN=__REPLACE__ME__
```

## Boot it up

Greet your agent and attempt a generation

Note: this example happens to use OpenAI, but you can swap-in HuggingFace, **[Anthropic](https://docs.axflow.dev/documentation/models/anthropic-completion.html)** or **[roll your own](https://docs.axflow.dev/guides/models/bring-your-own-models.html)**
