## Patterns

A SpeedyBot Listener is essentially a set of sequential steps, so if you want to add functionality to your Bot, you can just "snap-in" a new step and be on your way.

Below are some comon copy/paste'able step "snippets" or patterns which should cover most common use cases-- just grab them and drop into your `bot.ts` and get going the speedy and easy way.

[[toc]]

## Installation + Setup

### Prerequisites ​

- NodeJS 18+ or equivalent runtime like Bun/Deno/Worker/friends w/ **[fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)** available/polyfill
- Text editor

```
npm install speedybot
```

**[https://www.npmjs.com/package/speedybot](https://www.npmjs.com/package/speedybot)**

See **[/new](./new.md)** for easy to follow instructions to go from zero to a bot you can extend and customize however you want. With SpeedyBot is all you need to focus on when building your bot is `bot.ts.` If you need to deploy it to a highly controlled server or a serverless function or any infra you want you just need to pop your `bot.ts` and you're good to go.

## The basics

SpeedyBot simplifies the process of creating interactive conversations and makes it easy to deploy and manage bots. Anytime your SpeedyBot receives an event from a user (a message, card, file upload, etc) it operates through a series of "steps."

Each step is just a function which **must** return either $.next to proceed to the next step or $.end to terminate the chain. Each step can be synchronous or asynchronous depending on what you need to do.

A step can do **whatever** you want (send the user a message or a **[SpeedyCard](./speedycard.md)** or send/fetch data from some external system, do nothing at all) Whatever you're up to in a step, however, try not to take too long to do it because you probably don't want to keep your user waiting.

```ts
import { SpeedyBot } from "speedybot";

Bot.addStep(async ($) => {
  await $.send("Step 1");
  if ($.text === "hi") {
    await $.reply(`Hi there ${$.author.name}!`);
  }
  return $.next;
});

Bot.addStep(($) => {
  $.ctx.scribbledData = "someData_" + Math.random();
  return $.next;
});

Bot.addStep(async ($) => {
  await $.send("Step 2");
  const card = $.card()
    .addTitle("My great card!")
    .addText(`The random scribbled data is ${$.ctx.scribbledData}`)
    .addTable([
      ["Label", "Data 1"],
      ["Label 2", "Data 2"],
      ["Label 3", "Data 3"],
    ]);
  await $.send(card); // send a card, not just text
  return $.next;
});

Bot.addStep(async ($) => {
  await $.send("Step 3");
  return $.end; // <--- Stops the train!
});

Bot.addStep(async ($) => {
  await $.send("Step 4 (we never reach this!");
  return $.end;
});
```

<img src="https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/various/demo_basics.gif?raw=true"     
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

- The $ parameter provides a bunch of useful features, allowing you to reply to messages, send and check card data (see **[below for details on that](#simple-card-handler)**), and access information about the message and its author.

- Important: Avoid excessive usage of steps. If you find yourself writing a lot of "handlers" or checks in your steps you might be making things harder than they need to be. For a natural language "conversation", for example, focus on capturing user utterances (`$.text`) in your steps and then all you need to do is transmit back and forth to an external service and keep your steps short and sweet and simple

- Execution Order: Generally speaking, steps will fire in the order they are added to your `bot.ts`-- for convenience there is a `Bot.insertStepToFront` step which will slip the supplied to the front of the chain and `Bot.addStepSequence` to add a list of steps

## Send a message from a script

While SpeedyBot can take care of all the details of running a bot, you can also opportunistically "pluck" out just bits you need. The pattern below is not a full interactive agent (there's no steps), but shows how you can use SpeedyBot in a script to send messages + cards:

```ts
import { SpeedyBot } from "speedybot";

async function main(token) {
  const Bot = new SpeedyBot(token);

  const msg = await Bot.sendTo("targetEmail@account.com", "Hi there");
  await Bot.reply(
    msg,
    "Also meant to remind you, you need to call back the ABC team!"
  );

  const card = Bot.card().setTitle("My Card");
  await Bot.sendTo("targetEmail@account.com", card);
}

main("__REPLACE__ME__");
```

Note: You could run this from a script, a CI/CD environment, an existing server sending a notification in response to an event or incoming webhook, etc

## Simple Card Handler

You can do a LOT of cool stuff with **[SpeedyCards](./speedycard.md)** but one of the most useful things you can do is capture user data in a structured manner. Below we'll send the user a **[SpeedyCard](./speedycard.md)** and then when they tap submit it will be displayed back to the user

```ts
Bot.addStep(async ($) => {
  // if card submission
  if ($.data) {
    const dataSnippet = $.buildDataSnippet($.data);
    await $.send(`This data was submitted:`);
    await $.send(dataSnippet);
    await $.send(`${JSON.stringify($.data)}`);
    /**
     {
        "addTextarea_result": "free response data here"
        "myCheckboxes": "b,c",
        "myPickerDropdown": "YY",
     }
    */
  } else {
    await $.send(
      $.card()
        .addTitle("Interactive Data Input")
        .addSubtitle("Provide information in various formats")
        .addText("Freeform Response")
        .addTextarea("Feel free to share any details")
        .addText("Multiple Selections")
        .addMultiSelect(
          ["Option A", "Option B", "Option C", "Option D"],
          "myCheckboxes"
        )
        .addText("Single Selection")
        .addPickerDropdown(
          ["Option WW", "Option XX", "Option YY", "Option ZZ"],
          "myPickerDropdown"
        )
    );
  }
  return $.end;
});
```

## Handle File Uploads

SpeedyBot takes care of much of the complexity around handling file uploads and exposes useful data for consumption by your application. Just upload a file and check for `$.file` and inspect the file's name, content-type, extension, and file-size (in bytes)

If you want to access the raw file contents (the raw file-bytes which you can pass to another system), try `$.file.getData()`

```ts
import { SpeedyBot } from "speedybot";

const Bot = new SpeedyBot();

Bot.addStep(async ($) => {
  if ($.file) {
    const { bytes, contentType, extension, name } = $.file;
    await $.send(
      `You uploaded "${name}", a *.${extension} file [${contentType}] with a size of ${bytes} bytes`
    );

    // Fetch raw bytes (which you can pass onto other systems, upload to database, etc)
    const TheData = await $.file.getData(); // do something w/ the contents/bytes
    console.log("Raw bytes", TheData);
  }
  return $.next;
});
```

**Important:** Files are automatically scanned for viruses. If you call the `getData` method before the scan finishes, you might encounter a **[423 File Locked status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/423)**. This can happen with large files (but generally not a common issue for smaller files). If necessary, you can implement a retry mechanism using a SpeedyCard w/ containing uploaded url-- see the **[Voiceflow KnowledgeBase Example](./examples/voiceflow-kb/README.md)** and its **[source code](https://github.com/valgaze/speedybot/blob/v2/examples/voiceflow-kb/settings/bot.ts)** for an sample implementation.

## Restrict Access Pattern

Below you can see how to restrict access to your agent to specific swaths of email domains. Once you've got the pattern in place, you could target specific individuals or call out to another system for additional authentication/authorization checks, etc

Tip: To make sure this triggers at the front front of your middleware stack, try the trick of replacing `Bot.addStep` with `Bot.insertStepToFront`

```ts
import { SpeedyBot } from "speedybot";

const Bot = new SpeedyBot();

// Will make sure
Bot.insertStepToFront(async ($) => {
  const allowedDomains = ["allaboutfrogs.org", "geocities.com"];
  if (!allowedDomains.includes($.author.domain) && !$.data) {
    await $.send("You are not allowed sorry :( ");
    await $.send(
      $.card()
        .addTitle("Request Access")
        .addTextarea("Reason for access", "access_request")
    );
    return $.end;
  } else {
    // email valid, proceeding
    return $.next;
  }
});

Bot.addStep(async ($) => {
  if ($.data && $.data.access_request) {
    await $.send(
      `Thank you, your request has been received. You will be contacted when you are granted access`
    );
    const payload = {
      requesterName: $.author.name,
      reason: $.data.access_request,
    };
    // dispatch payload to ingestion or ticketing system
    console.log(`Access Request: ${JSON.stringify(payload)}`);
    return $.end;
  }
  return $.next;
});

Bot.addStep(async ($) => {
  await $.send("You're in!");
  return $.next;
});
```

## Simple Text Match

In general, if you find yourself writing a lot (or even any) manual text-parsing code you might be heading down a bad path. If you want to process natural language or integrate w/ LLMs, see **[here](./examples/voiceflow/README.md)** or **[here](./examples/voiceflow-kb/README.md)** for examples.

But when you need pinpoint text matching or want to see if certain keywords are present, turn to the straightforward `Bot.exact`, `Bot.contains`, & `Bot.regex` special steps

```ts
import { SpeedyBot } from "speedybot";

const Bot = new SpeedyBot();

// quick exact match
Bot.exact("$clear", async ($) => {
  await $.clearScreen();
  return $.end;
});

// identify words from a list
Bot.contains(["bingo", "bongo"], async ($) => {
  await $.send(
    `You entered text that contained the word bingo/bongo somewhere`
  );
  return $.next;
});

// identify a single word
Bot.contains("onomatopoeia", async ($) => {
  $.ctx.literaryUser = true;
  return $.next;
});

// use a regex (can also supply the RegExp constructor, seehttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
Bot.regex(/🐧/, async ($) => {
  await $.send(`Penguin emoji spotted! 🎉🐧`);
  return $.next;
});
```

## "Context"

You can scribble data on $.ctx that will persist only during the "run" of all the triggered flows

```ts
import { SpeedyBot } from "speedybot";

const Bot = new SpeedyBot();

Bot.addStep(async ($) => {
  $.ctx.myValue = `${Bot.rando()}_${Bot.rando()}`;
  return $.next;
});

Bot.addStep(async ($) => {
  await $.send(`You said ${$.ctx.myValue}`);
  return $.next;
});
```

## Handle "chips"

"Chips" in SpeedyBot let users enter text by tapping buttons. Your SpeedyBot will respond as if the user typed the message dispatched in each tap of a chip. This is one of SpeedyBot's most useful but underrated features

```ts
import { SpeedyBot } from "speedybot";

const Bot = new SpeedyBot();

Bot.addStep(async ($) => {
  if ($.text) {
    const lower = $.text.toLowerCase();
    if (lower === "pong") {
      await $.send("ping");
    } else if (lower === "ping") {
      await $.send("pong");
    } else {
      const chipCard = $.card()
        .addText("Chip Card")
        .addChips(["ping", { title: "Select Pong", value: "pong" }]);
      await $.send(chipCard);
    }
  }
  return $.next;
});
```

<img src="https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/various/demo_chips.gif?raw=true" 
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

## Support Multiple Environments

You can use `$.ctx` to set flags to support different environments (ex dev/prod)

```ts
import { SpeedyBot } from "speedybot";

const Bot = new SpeedyBot();

Bot.addStep(($) => {
  $.ctx.isDev = true; // set to true on debug mode to trace incoming messages
  return $.next;
});

// read flags
Bot.addStep(async ($) => {
  if ($.ctx.isDev) {
    await $.send($.buildDataSnippet($.debug()));
  }

  const card = $.card()
    .addTitle("Your link")
    .addLink(
      $.ctx.isDev
        ? `https://localhost:5173/docs/patterns`
        : "https://speedybot.js.org/docs/patterns"
    );
  return $.next;
});
```

## Error handling

Note that `Bot.captureError` doesn't automatically connect to the message's original room (like the $ symbol does in `$.send` or `$.reply`). So you'll need to supply a target destination (room id or email address) if you want to provide a message to the user that something has gone wrong

```ts
import { SpeedyBot } from "speedybot";

const Bot = new SpeedyBot();

// some error
Bot.addStep(($) => {
  throw new Error("My error message here");
  return $.next;
});

Bot.addStep(async ($) => {
  await $.send(`helllllooo (${$.text})`);
  return $.next;
});

Bot.captureError(async (payload) => {
  const { roomId } = payload;
  if (roomId) {
    await Bot.sendTo(roomId, `Whoops, there was a problem: ${payload.message}`);
  }
});
```

## Debug and display snippets

SpeedyBot comes with a built-in `$.debug()` helper method which will return useful information about incoming messages if you ever need to peek under the hood at what's going on. `$.buildDataSnippet()` is a convenience helper which will take any input data and display it in attractive markdown formatting in the chat client

```ts
import { SpeedyBot } from "speedybot";

const Bot = new SpeedyBot();

Bot.addStep(($) => {
  $.ctx.debug = true; // set flag
  return $.next;
});

Bot.addStep(async ($) => {
  if ($.ctx.debug) {
    // read flag
    await $.send($.buildDataSnippet($.debug()));
  }
  return $.next;
});
```

## Mentioned people

Get a list of users @-mentioned in a post or message-- in a group room the 1st value will be removed

```ts
import { SpeedyBot } from "speedybot";

const Bot = new SpeedyBot();

Bot.addStep(async ($) => {
  $.msg.mentionedPeople.forEach(async (personId) => {
    const deets = await Bot.getPerson(personId);
    await await $.send(Bot.stashCard(JSON.stringify(deets)));
  });
  return $.next;
});
```

## Send a message, card (static file)

SpeedyBot can be as big or as small a part of your agent as you want it to be. If you just want to send a few cards and messages and don't need to deal with webhooks (or consume them by a way unique to your team or organization) you can just use SpeedyBot directly

```ts
import { SpeedyBot } from "speedybot";

async function main(token) {
  const Bot = new SpeedyBot(token);

  const msg = await Bot.sendTo("targetEmail@account.com", "Hi there");
  await Bot.reply(
    msg,
    "Also meant to remind you, you need to call back the ABC team!"
  );

  const card = Bot.card().setTitle("My Card");

  await Bot.sendTo(card);
}

main("__REPLACE__ME__");
```

<script setup>
import { useData } from 'vitepress'
import { useCustomStore } from "./.vitepress/util/store";
const { isDark } = useData()
const store = useCustomStore()
</script>
