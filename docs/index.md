<img src="https://github.com/valgaze/speedybot-mini/raw/deploy/docs/assets/logo.png?raw=true" />

## Speedybot-mini

Speedybot is a tool to take you from zero to a user-valuable bot as quickly as possible w/ a buttery-smooth developer experience. In short, Speedybot lets you focus on the stuff that actually matters-- content and powerful integrations.

If you're in a hurry, see the **[quickstarts](#quickstarts)** to get up and running fast on a variety of infrastructure (websockets, server, serverless, container-less, etc).

- 🌟 Zero External Dependencies 🌟
- Adds support **[tappable suggestion "chips"](#chips)**
- Includes **[SpeedyCard card builder](#speedycard)** (create rich **[Adaptive Cards](https://developer.webex.com/docs/api/guides/cards)** without wrangling JSON)
- Lots of handy utilities for things like **[alerts, cards, files, and more](https://github.com/valgaze/speedybot-mini/blob/deploy/api-docs/classes/BotInst.md#methods)**
- Locale & i18n support
- Runs on virtually any infrastructure-- servers, V8 isolates, containers, container-less, edge, etc

The era of manually writing "handlers" or matching text with RegEx's is coming to an end (though Speedybot has several trick to make writing those easier). In the future, there will be far fewer "keyword" handlers and instead deeper integration with 3rd-party conversation services like **[Voiceflow](https://www.voiceflow.com/)**, **[Amazon Lex](https://aws.amazon.com/lex/)**, **[DialogFlow](https://cloud.google.com/dialogflow/docs)** and Speedybot can help make that transition as smooth as possible

## Quickstarts

You can get up and running FAST with Speedybot. Speedybot can run on a variety of architectures and environments

- **[speedybot garage 🔧🤖, manage webhooks/secrets/admin](https://codepen.io/valgaze/pen/MWVjEZV)**

- 📚 **[API Docs](https://github.com/valgaze/speedybot-mini/blob/deploy/api-docs/modules.md#classes)**

| Platform                                                                                                                          | Needs server? | Needs webhooks? |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------- | --------------- |
| **[🔌 Deploy with websockets](https://github.com/valgaze/speedybot-mini/tree/deploy/examples/websockets)**                        | ❌            | ❌              |
| **[💻 Deploy to Simple Express Server](https://github.com/valgaze/speedybot-mini/tree/deploy/examples/express-incoming-webhook)** | ✅            | ✅              |
| **[λ Deploy to AWS Lamda](https://github.com/valgaze/speedybot-mini/tree/deploy/examples/aws-lambda)**                            | ❌            | ✅              |
| **[🔥 Deploy to Worker](https://github.com/valgaze/speedybot-mini/tree/deploy/examples/worker)**                                  | ❌            | ✅              |
| **[🦖 Deploy to Deno](https://github.com/valgaze/speedybot-mini/tree/deploy/examples/deno)**                                      | ❌            | ✅              |

## Syntax

```sh
npm install speedybot-mini
```

**[See starter bot](https://github.com/valgaze/speedybot-mini/blob/deploy/settings/config.ts)**

## How to make a bot

## Keywords

Speedybot is made up of "handlers" that trigger based on special conditions-- depending on your needs you'll probably need only one or two in your project

| Keyword                                                                                                       | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[.contains](https://github.com/valgaze/speedybot-mini/blob/deploy/api-docs/classes/Speedybot.md#contains)** | This will match if a trigger phrase is the 1st or only word in a message sent from a user                                                               |
| **[.fuzzy](https://github.com/valgaze/speedybot-mini/blob/deploy/api-docs/classes/Speedybot.md#fuzzy)**       | This will match if a trigger phrase exists _anywhere_ inside a message sent from the user                                                               |
| **[.exact](https://github.com/valgaze/speedybot-mini/blob/deploy/api-docs/classes/Speedybot.md#exact)**       | This will match if a trigger phrase is exactly (case-sensitve) a message sent from a user                                                               |
| **[.fuzzy](https://github.com/valgaze/speedybot-mini/blob/deploy/api-docs/classes/Speedybot.md#regex)**       | This will match if a message sent from a user passes the regex                                                                                          |
| **[.every](https://github.com/valgaze/speedybot-mini/blob/deploy/api-docs/classes/Speedybot.md#every)**       | This will match on every message from a user                                                                                                            |
| **[.nlu](https://github.com/valgaze/speedybot-mini/blob/deploy/api-docs/classes/Speedybot.md#nlu)**           | This will match on every message from a user except if the trigger phrase is used by hard-coded handler, designed for use with natural language systems |
| **[.onSubmit](https://github.com/valgaze/speedybot-mini/blob/deploy/api-docs/classes/Speedybot.md#onSubmit)** | This will trigger when data is sent from an **[](https://developer.webex.com/docs/api/guides/cards)**                                                   |
| **[.onFile](https://github.com/valgaze/speedybot-mini/blob/deploy/api-docs/classes/Speedybot.md#onFile)**     | This will trigger every time a file is sent to the agent and will provide file meta data                                                                |
| **[.onCamera](https://github.com/valgaze/speedybot-mini/blob/deploy/api-docs/classes/Speedybot.md#onCamera)** | This will trigger every time an image file sent to the agent                                                                                            |
| **[.noMatch](https://github.com/valgaze/speedybot-mini/blob/deploy/api-docs/classes/Speedybot.md#noMatch)**   | This will trigger if there are no registered handlers for the user's text                                                                               |

<details>
<summary>Note on Precedence</summary>

Rule: the 1st registered handler will match in the event of a conflict

Ex. Below since it was set first, fuzzy will take precedence over `contains`

```ts
import { Speedybot, Config } from "speedybot-mini";

const botConfig: Config = {
  token: "__REPLACE__ME__",
};

// 1) Initialize your bot w/ config
const CultureBot = new Speedybot(botConfig);

CultureBot.fuzzy("hi", ($bot, msg) => {
  $bot.send("Fuzzy launched");
});

CultureBot.contains("hi", ($bot, msg) => {
  $bot.send("Contains launched");
});
```

</details>

See the main **[sample for all you can do](./settings/config.ts)**, but here's how you could make a simple agent

```ts
import { Speedybot } from "speedybot-mini";

// In a production environment use a secrets manager to pass in token
// Get a token: https://developer.webex.com/my-apps/new/bot
const botConfig = { token: "__REPLACE__ME__" };

// 1) Initialize your bot w/ config
const CultureBot = new Speedybot(botConfig);

// 2) Export your bot
export default CultureBot;

// 3) Do whatever you want!

// Match handlers based on user input
CultureBot.contains(["hi", "yo", "hola"], async ($bot, msg) => {
  $bot.send(`You said '${msg.text}', ${msg.author.displayName}!`);
  $bot.send(
    $bot
      .card({
        title: `Hi ${msg.author.displayName}!`,
        subTitle: `Glad to have you here, you said ${msg.text}`,
        chips: ["ping", "pong"],
      })
      .setInput(`What's on your mind?`)
  );
});

// Can also do Regex's
CultureBot.regex(new RegExp("x"), ($bot, msg) => {
  $bot.send(`Regex matched on this text:  ${msg.text}`);
});

// Special keywords: .onSubmit, .onFile, .onCamera, .every, .noMatch, etc

// Handle AdpativeCard submissions
CultureBot.onSubmit(($bot, msg) => {
  $bot.send(`You submitted ${JSON.stringify(msg.data.inputs)}`);
});

// Runs on file upload, can pass bytes to 3rd-party service
CultureBot.onFile(async ($bot, msg, fileData) => {
  $bot.send(`You uploaded '${fileData.fileName}'`);
  $bot.send(`snip: ${fileData.markdownSnippet}`);
  $bot.send(fileData.data);
}).config({ matchText: true });

// Runs on EVERY input, kinda like middleware
// This is where you would interact with an NLU service like DialogFlow, Amazon Lex, Voiceflow, etc
CultureBot.every(async ($bot, msg) => {
  const { text } = msg;
  $bot.log(`.every handler ran with this text: '${text}'`);
}).config({
  skipList: ["$clear"],
});

// If no matched handlers
CultureBot.noMatch(($bot, msg) => {
  $bot.say(`Bummer, there was no matching handler for '${msg.text}'`);
});
```

There's much more, see this **[sample for all you can do](./settings/config.ts)**

## SpeedyCard

ex. Tell the bot "sendcard" to get a card, type into the card & tap submit, catch submission using _<@submit>_ and echo back to user.

- Getting started with AdaptiveCards (https://developer.webex.com/docs/api/guides/cards) can be a bit cumbersome and error-prone

- SpeedyCard is a limited subset of AdaptiveCards with basic features with a focus on user interaction & simplicity (title, text, input box, menu-select, no "collapsable" sections, etc)

- Inspired a bit by SwiftUI: https://developer.apple.com/xcode/swiftui/

![sb](https://github.com/valgaze/speedybot-mini/raw/deploy/docs/assets/demo_sendcard.gif)

<details>
<summary>(Tap to see code)</summary>

```ts
import { Speedybot } from "speedybot-mini";

// In a production environment use a secrets manager to pass in token
// Get a token: https://developer.webex.com/my-apps/new/bot
const botConfig = { token: "__REPLACE__ME__" };

// 1) Initialize your bot w/ config
const CultureBot = new Speedybot(botConfig);

// 2) Export your bot
export default CultureBot;

// 3) Do whatever you want!
// Match handlers based on user input like
CultureBot.contains("hi", async ($bot, msg) => {
  $bot.send(`You said '${msg.text}', ${msg.author.displayName}!`);
});

// Handle/capture AdpativeCard submissions
CultureBot.onSubmit(($bot, msg) => {
  $bot.send(`You submitted ${JSON.stringify(msg.data.inputs)}`);
});

// send a card

CultureBot.contains("sendcard", async ($bot, msg) => {
  const cardPayload = $bot
    .card()
    .setTitle("System is 👍")
    .setSubtitle("If you see this card, everything is working")
    .setImage("https://i.imgur.com/SW78JRd.jpg")
    .setInput(`What's on your mind?`)
    .setTable([[`Bot's Time`, new Date().toTimeString()]])
    .setData({ mySpecialData: { a: 1, b: 2 } })
    .setUrl(
      "https://www.youtube.com/watch?v=3GwjfUFyY6M",
      "Take a moment to celebrate"
    );
});
```

</details>

## Chips

ex. Tell the bot "chips" to get a card with tappable "chips"

![sb](https://github.com/valgaze/speedybot-mini/raw/deploy/docs/assets/demo_chips.gif)

<details>
<summary>(Tap to see code)</summary>

```ts
import { Speedybot } from "speedybot-mini";

// In a production environment use a secrets manager to pass in token
// Get a token: https://developer.webex.com/my-apps/new/bot
const botConfig = { token: "__REPLACE__ME__" };

// 1) Initialize your bot w/ config
const CultureBot = new Speedybot(botConfig);

// 2) Export your bot
export default CultureBot;

// 3) Do whatever you want!
// Match handlers based on user input like
CultureBot.contains("hi", async ($bot, msg) => {
  $bot.send(`You said '${msg.text}', ${msg.author.displayName}!`);
});

// Handle/capture AdpativeCard submissions (non-chip submission)
CultureBot.onSubmit(($bot, msg) => {
  $bot.send(`You submitted ${JSON.stringify(msg.data.inputs)}`);
});

CultureBot.contains(["ping", "pong"], ($bot, msg) => {
  const { text } = msg;
  if (text === "ping") {
    $bot.send("pong");
  } else if (text === "pong") {
    $bot.send("ping");
  }
});

// send a card with tappable chips

CultureBot.contains("chips", async ($bot, msg) => {
  $bot.send(
    $bot
      .card()
      .setChips([
        "hey",
        "ping",
        { label: "say the phrase pong", keyword: "pong" },
      ])
  );
});
```

</details>

## Credits/Attribution

- Cookie image courtesy of Daniel Lopez: https://unsplash.com/photos/aT7CE57EZL8 & https://unsplash.com/@soydanielwolf
