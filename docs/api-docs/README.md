speedybot / [Exports](modules.md)

# SpeedyBot 2.0

<p align="center">
  <a href="https://www.npmjs.org/package/element-plus">
    <img src="https://img.shields.io/npm/v/speedybot.svg" />
  </a>
  <a href="https://github.com/element-plus/element-plus">
    <img src="https://img.shields.io/badge/node-%20%3E%3D%2016-47c219" />
  </a>
  <a href="https://npmcharts.com/compare/element-plus?minimal=true">
    <img src="https://img.shields.io/npm/dm/speedybot.svg" />
  </a>
</p>

<img src="https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/memes/logo4.jpeg?raw=true" />

tl;dr: SpeedyBot helps you efficiently design, deploy, and secure rich conversation systems

## Setup

```
npm install speedybot
```

## Speedy & Easy

- SpeedyBot offers a buttery-smooth developer experience to keep you building your bots rather than scouring the docs. It's written in typescript + built-in type hints with autocomplete, has zero external dependencies, supports ESM + CommonJS, provides lots of other DX goodness that makes building bots a breeze like local development with live-reload (see **[here for details](https://github.com/valgaze/speedybot/tree/deploy/examples/speedybot-local-server)**).

- SpeedyBot shrinks away all the complexity and makes it a breeze to handle user input regardless of the source/modality-- text, file uploads, form submission from SpeedyCards, etc

- SpeedyBot seamlessly operates across diverse severless/container-less platforms (Lambda/Deno/Workers/etc) as well as conventional fixed servers and even within CI/CD scripts. As long you've got internet connectivity, SpeedyBot functions seamlessly

## SpeedyBot basics

You can see fleshed-out examples at **[https://speedybot.js.org/examples/](https://speedybot.js.org/examples/)** and see how SpeedyBot has you covered for crafting bots that can do it all-- securely integrate w/ LLMs + content management systems, **[process file-uploads](https://speedybot.js.org/patterns.md#handle-file-uploads)**, **[segment content based on user data + behavior](https://speedybot.js.org/patterns.md#restrict-emails)**, create + manage **[SpeedyCards](https://speedybot.js.org/speedycard)**, ask for a user's location in a privacy-respecting way and lots more.

### Auto-binding

As a convenience, SpeedyBot's "magic" $ parameter will auto-bind to the incoming message and give you access to all kinds of useful features

```js
const Bot = new SpeedyBot();

// You get an incoming messsage
Bot.addStep(async ($) => {
  await $.send("Hello the originating person/room");
  await $.reply("Reply to the originating person/room");

  // The same as the following
  await Bot.sendTo($.author.email, "my message");

  const parentMessageID = $.id;
  await Bot.replyTo(parentMessageID, $.author.email, "my great reply message");

  return $.next;
});
```

There's also a lot more you can do

<img src="https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/various/autocomplete.gif?raw=true" />

## SpeedyCards

SpeedyCards make it (yep) speedy and easy to build **[Adaptive Cards](https://adaptivecards.io)** where you can easily collect structured data from users and add colors, "chips", formatting and other visual embellishments.

<img src="https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/various/speedycard.gif?raw=true" />

<img src="https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/various/demo_chips.gif?raw=true" />

## LLM Token Streaming

SpeedyBot makes it speedy & easy to build serverless bots for the LLM era. See the **[LLM steam example](https://speedybot.js.org/examples/llm-stream)**

<img src="https://github.com/valgaze/speedybot-utils/blob/main/assets/various/llm_stream.gif?raw=true" />

## SpeedyBot "listener"

You can use SpeedyBot to only send messages + cards and nothing more. But if you have data on those cards you want to capture or if you want to provide an automated conversation experience SpeedyBot takes of all the hassle.

Ex. Here is a minimal handler that will echo back information if a user transmits data via text, file, and adaptive card. Write "show card" to display a card. You can chain multiple addSteps if you need to, but in this era you probably don't need/want to be doing much logic in code.

See full example applications here: **[https://speedybot.js.org/examples](https://speedybot.js.org/examples)**

```ts
import { SpeedyBot } from "speedybot";

const Bot = new SpeedyBot();
Bot.addStep(async ($) => {
  // handle text
  if ($.text) {
    await $.send(`You said "${$.text}`);

    if ($.text.toLowerCase() === "showcard") {
      const card = $.card()
        .addTitle("Capture data")
        .addTextarea("Submit data")
        .addPickerDropdown(["option 1", "option 2", "option 3", "option 4"]);
      await $.send(card);
    }
  }

  // file handler
  if ($.file) {
    const { name, extension, contentType } = $.file;
    await $.send(
      `You uploaded "${name}", a *.${extension} file [${contentType}]`
    );
    // Fetch raw bytes (which you can pass onto other systems)
    // const TheData = await $.file.getData(); // do something w/ the contents/bytes
  }

  // form/card submissions
  if ($.data) {
    const dataSnippet = $.buildDataSnippet($.data);
    await $.send(`This data was submitted:`);
    await $.send(dataSnippet);
  }

  return $.next;
});

export default Bot;
```

## 🐍 Speedybot-Python

If you want to build bots with Python rather than Typescript, you can check out [🐍Speedybot-Python🐍](https://pypi.org/project/speedybot)
