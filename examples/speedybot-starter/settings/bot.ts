import { SpeedyBot, SpeedyCard, SurveyQuestion } from "speedybot";

const Bot = new SpeedyBot();

Bot.addStep(async ($) => {
  // handle text
  if ($.text) {
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

  // adaptive card/form submissions
  if ($.data && !$.data.showCard && !$.data.randomSpeedyBot) {
    const dataSnippet = $.buildDataSnippet($.data);
    await $.send(`This data was submitted:`);
    await $.send(dataSnippet);
  }

  return $.next;
});

Bot.addStep(async ($) => {
  if ($.data && $.data.randomSpeedyBot) {
    const randomImage = `https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/memes/logo${$.pickRandom(
      1,
      33
    )}.jpeg`;

    await $.send(
      $.card()
        .addHeader("\u{1F916} SpeedyBot")
        .addImage(randomImage, {
          targetURL: "https://speedybot.js.org",
          size: "ExtraLarge",
        })
        .addButton("🤖 Show another SpeedyBot", "randomSpeedyBot")
    );
    return $.end;
  }
  return $.next;
});

// ## File upload handler
Bot.addStep(async ($) => {
  if ($.file) {
    const { name, extension, contentType } = $.file;
    await $.send(
      `You uploaded "${name}", a *.${extension} file [${contentType}]`
    );
    // Fetch raw bytes (which you can send to database or send to external system)
    // const TheData = await $.file.getData(); // do something w/ the contents/bytes
  }
  return $.next;
});

// ## "ping/pong", run logic on inputs
Bot.addStep(async ($) => {
  if ($.text) {
    const lowered = $.text.toLowerCase();
    if (lowered === "ping") {
      await $.send("pong");
      return $.end;
    } else if (lowered === "pong") {
      await $.send("ping");
      return $.end;
    }
  }
  return $.next; // pass through to rest of steps
});

// ## "show-cards, show adaptive cards
Bot.addStep(async ($) => {
  if ($.text) {
    const lowered = $.text.toLowerCase();
    if (lowered === "show-cards") {
      await $.send(
        "SpeedyCards make it easy to send rich, interactive cards to the user"
      );
      const { value } = Bot.pickRandom(cardChoices);
      const card = cardHash[value].addSubcard(
        $.card()
          .addLink(
            "https://speedybot.js.org/docs/speedycard?card=${value}",
            "See the source for this card"
          )
          .addText("Pick a new card")
          .addPickerDropdown(cardChoices, "showCard"),
        "Learn more"
      );
      await $.send(card);
      return $.end;
    }
  }
  return $.next; // pass through to rest of steps
});

// ## "files", show file capabilities (not upload file-- different idea-- but sending data to the user as a file)
Bot.addStep(async ($) => {
  if ($.text && $.text.toLowerCase() === "files") {
    await $.send(
      `You can of course upload files but SpeedyBot also provides handy features to send data to the user as files`
    );

    // send a *.json file
    const fileData = $.debug();
    await $.sendFile(fileData, "json");

    // Send HTML w/ dynamic data
    await $.sendFile(
      makeHTML(`Here's your generated file, ${$.author.name}`, fileData),
      "html"
    );
    return $.end;
  } else {
    return $.next;
  }
});

// ## "kitchensink", show everything
Bot.addStep(async ($) => {
  $.author;
  if ($.text && ["kitchen", "kitchensink"].includes($.text)) {
    await $.clearScreen();
    await $.send(`## Kitchen Sink`);

    await $.thread([
      $.card({
        title: `This is a 'thread'`,
        subTitle: "You can have many entries after the 1st",
        chips: [
          {
            title: "Go Again 🔄",
            value: "kitchensink",
          },
        ],
      })
        .addText("Pick an entry from the list to preview a SpeedyCard")
        .addPickerDropdown(cardChoices, "showCard"),
      "thread item 1",
      "thread item 2",
      "thread item 3",
      "thread item 4",
      "thread item 5",
    ]);

    await $.send(`-----------`);
    await $.send($.buildDMLink("speedybot@webex.bot", "🤖 Talk to SpeedyBot"));
    await $.send(`-----------`);

    await $.send(`## Files`);

    // Send data as a *.json file
    await $.send(`Send data to user (here as *.json or *.html)`);
    const fileData = $.debug();
    await $.sendFile(fileData, "json");
    await $.sendFile(
      makeHTML(`Here's your generated file, ${$.author.name}`, fileData),
      "html"
    );
    return $.end;
  }
  return $.next;
});

// ## Main greeting
Bot.addStep(async ($) => {
  if ($.text && !$.file) {
    const utterances = [
      `Heya how's it going $[name]?`,
      `Hi there, $[name]!`,
      `Hiya $[name]!`,
      `What's new $[name]?`,
      `Helllooo $[name]!`,
    ];
    const template = {
      name: $.author.name,
    };
    await $.send($.fillTemplate(utterances, template));

    const randomImage = `https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/memes/logo${$.pickRandom(
      1,
      33
    )}.jpeg`;

    const introCard = $.card()
      .addHeader("🤖 SpeedyBot")
      .addImage(randomImage, {
        targetURL: "https://speedybot.js.org",
        size: "ExtraLarge",
      })
      .addChips([
        { title: "SpeedyCards 🌠", value: "show-cards" },
        { title: "ping 🏓", value: "ping" },
        { title: "🏓 pong", value: "pong" },
        { title: "🗂 files", value: "files" },
        { title: "🗂 Everything (warning: fast)", value: "kitchensink" },
      ])
      .addButton("🤖 random", "randomSpeedyBot")
      .addSubcard(
        $.card()
          .addTitle("SpeedyCards")
          .addText(
            "**SpeedyCards** make it easy to build cards that deliver information in a visually attractive way or craft or cards with interactive forms that will let you capture structured data submitted from users"
          )
          .addText("Pick a new card template")
          .addPickerDropdown(cardChoices, "showCard"),
        "See More "
      );
    await $.send(introCard);
    return $.next;
  }
  return $.next;
});

// ## Card utilities
// SpeedyCard form submissions, check for $.data, can add generics for type assurance

// handle card picks from dropdown, attach preview, this can happen from multiple cards + locations
Bot.addStep<Partial<{ showCard: string }>>(async ($) => {
  type CardKey = keyof typeof cardHash;
  const isCardKey = (key: CardKey | undefined): key is CardKey => {
    return key !== undefined && key in cardHash;
  };

  if ($.data && isCardKey($.data.showCard)) {
    const card = cardHash[$.data.showCard].addSubcard(
      $.card()
        .addLink(
          `https://speedybot.js.org/speedycard?card=${$.data.showCard}`,
          "See the source for this card"
        )
        .addText("Pick a new card")
        .addPickerDropdown(cardChoices, "showCard"),
      "Learn more"
    );
    await $.send(card);
  }

  return $.next;
});

// ## ex. pass data/flags between steps during runs
Bot.addStep(($) => {
  $.ctx.isDev = true; // set to true on debug mode to trace incoming messages
  return $.next;
});

// ## read flags
Bot.addStep(async ($) => {
  // if ($.ctx.isDev) {
  //   await $.send($.buildDataSnippet($.debug()));
  // }
  return $.next;
});

// short-hand for exact match
Bot.exact("$clear", async ($) => {
  await $.clearScreen();
  return $.end;
});

// ## Don't leave users hanging
Bot.captureError(async (payload) => {
  const { roomId } = payload;
  if (roomId)
    await Bot.sendTo(roomId, `Whoops, there was a problem: ${payload.message}`);
});
// export the Bot
export default Bot;

// Bunch of cards
export const cardChoices = [
  { title: "Text Formatting 📄", value: "format-card" },
  { title: "Tabular Data 🐸", value: "table-card" },
  { title: "Survey 📝", value: "survey" },
  { title: "Acai 🍇", value: "acai" },
  { title: "Appcard 💳", value: "appcard" },
  { title: "Appcard RTL ⬅️", value: "appcard-rtl" },
  { title: "Red Danger 🔴", value: "red-danger" },
  { title: "Green Success ✅", value: "green-success" },
  { title: "Yellow Warning ⚠️", value: "yellow-warning" },
  { title: "Banner Yellow 🟡", value: "banner-yellow" },
  { title: "Confirm ✔️", value: "confirm" },
  { title: "Image 🖼️", value: "image" },
  { title: "Old Survey", value: "old-survey" },
];

export const cardHash: { [key: string]: SpeedyCard } = {
  survey: Bot.card().survey([
    {
      type: "text",
      question: "What is the name of your company?",
      id: "company_name",
    },
    {
      type: "text",
      question: "Describe the service performed by the vendor.",
      id: "service_type",
    },
    {
      type: "picker-date",
      question: "When was the service provided?",
      id: "service_date",
    },
    {
      type: "single-select",
      question: "How would you rate the quality of service?",
      choices: ["Excellent", "Good", "Average", "Poor", "Very poor"],
      id: "service_quality",
    },
    {
      type: "multi-select",
      question: "What were the highlights of the service?",
      choices: [
        "Communication",
        "Punctuality",
        "Time to Resolution",
        "Friendliness",
        "Cost",
      ],
      id: "service_highlights",
    },
    {
      type: "single-select",
      question: "Would you consider using our services again in the future?",
      choices: [
        "Definitely",
        "Probably",
        "Not sure",
        "Probably not",
        "Definitely not",
      ],
      id: "future_use",
    },
    {
      type: "textarea",
      question:
        "Please provide any other comments or suggestions for improvement.",
      id: "other_comments",
    },
    {
      type: "picker-time",
      question: "What time of day is preferable for future contact?",
      id: "preferred_contact_time",
    },
    {
      type: "picker-dropdown",
      question: "Preferred method of communication for future updates?",
      choices: ["Email", "Phone", "Text"],
      id: "communication_method",
    },
  ]),
  "format-card": Bot.card()
    .addHeader("🌟 Formatted Card 🌟")
    .addTitle("SpeedyCards can fit a lot of text + visual formatting")
    .addText("You do lots of fun things with text", { size: "Large" })
    .addText("You can change colors", { size: "Large", color: "green" })
    .addText("...also mess with alignment + sizes", {
      size: "Stretch",
      color: "red",
      align: "Right",
    })
    .addText("Change background colors", {
      size: "Medium",
      color: "red",
      backgroundColor: "blue",
    })
    .addText("Change background + foreground", {
      size: "Medium",
      align: "Right",
      color: "green",
      backgroundColor: "yellow",
    })
    .addText("Align in the middle", {
      size: "Medium",
      align: "Center",
      backgroundColor: "red",
    })
    .addText("More fun like other colors + images", {
      size: "Large",
      color: "red",
      backgroundColor: "yellow",
    })
    .addText(
      "By the way, text blocks support simple markdown like **bolding**, *italics*, and even **[links](https://speedybot.js.org/new)**"
    )
    .addImage(
      "https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/memes/logo4.jpeg",
      { align: "Center" }
    ),
  appcard: Bot.appCard(
    "Design News",
    "https://raw.githubusercontent.com/valgaze/speedybot-mini/deploy/docs/assets/figma_logo.png"
  )
    .addText(
      "Tap the button to learn about new plugins + integration options",
      { color: "red", backgroundColor: "blue" }
    )
    .addLinkButton("https://www.figma.com/community/plugins", "🚀 Let's go"),
  "appcard-rtl": Bot.appCard(
    "ڈیزائن پر اپ ڈیٹ",
    "https://raw.githubusercontent.com/valgaze/speedybot-mini/deploy/docs/assets/figma_logo.png",
    { rtl: true }
  )
    .addText(
      "نئے پلگ ان + انضمام کے اختیارات کے بارے میں جاننے کے لیے بٹن کو تھپتھپائیں۔",
      { color: "red", backgroundColor: "blue", align: "Right" }
    )
    .addLinkButton("https://www.figma.com/community/plugins", "اورجانیے 🚀"),
  acai: Bot.card()
    .addTitle("AcaiTruck 🍇🚚 - The Bowl-istic Adventure Catering")
    .addSubtitle("Customize Your Acai Bowl Experience!")
    .addText(
      "Welcome to our Acai Bowl Food Truck catering service. Let's make your event delicious!"
    )
    .addPickerDropdown(["Select Bowl Size", "Mini", "Midi", "Grande"])
    .addPickerDropdown(["Number of People", "1-10", "11-25", "26-50", "50+"])
    .addTextInput("Anything else we should know?")
    .addText("Choose toppings for the bar:")
    .addMultiSelect([
      "Granola",
      "Peanut Butter",
      "Coconut",
      "Goji Berries",
      "Chia Seeds",
      "Almonds",
      "Cashews",
      "Honey",
      "Cacao Nibs",
      "Strawberries",
      "Blueberries",
      "Almond Butter",
    ])
    .addText("Additional Catering Essentials:")
    .addMultiSelect([
      "Utensils",
      "Napkins",
      "To-Go Covers",
      "Fruit Juice",
      "Smoothie Bar",
      "Event Staff",
      "Custom Branding",
    ])
    .addText("Any special requests or dietary preferences?")
    .addTextarea("Special Requests or Dietary Preferences")
    .setSubmitButtonTitle("Book AcaiTruck 🚀"),
  "red-danger": Bot.card()
    .addTitle("🚨 DANGER 🚨")
    .addText("Attention, this is a very severe and important warning")
    .setBackgroundImage(
      "data:image/png;base64,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"
    ),
  "green-success": Bot.card()
    .addTitle("🏆 You did it! 🏆")
    .addText("Whatever you did, good at job at doing it")
    .setBackgroundImage(
      "data:image/png;base64,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"
    ),
  "yellow-warning": Bot.card()
    .addTitle("⚠️ You're about to do it! ⚠️")
    .addText("Whatever you're about to do, give it a think")
    .setBackgroundImage(
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAmCAYAAACsyDmTAAAMbWlDQ1BJQ0MgUHJvZmlsZQAASImVVwdYU8kWnluSkJDQAghICb0jUgNICaEFkF4EGyEJJJQYE4KKvSwquHYRxYquiii2lWYBsSuLYu+LBRVlXdTFhsqbkICu+8r3zvfNvX/OnPlPuTO59wCg+YErkeShWgDkiwukCeHBjDFp6QzSU4AAIiADZ+DF5ckkrLi4aABl8P53eXcDWkO56qzg+uf8fxUdvkDGAwAZB3EmX8bLh7gZAHwDTyItAICo0FtOKZAo8ByIdaUwQIhXK3C2Eu9S4EwlPjpgk5TAhvgyAGpULleaDYDGPahnFPKyIY/GZ4hdxXyRGABNJ4gDeEIuH2JF7E75+ZMUuBxiO2gvgRjGA5iZ33Fm/40/c4ify80ewsq8BkQtRCST5HGn/Z+l+d+Snycf9GEDB1UojUhQ5A9reCt3UpQCUyHuFmfGxCpqDfEHEV9ZdwBQilAekay0R415MjasH9CH2JXPDYmC2BjiMHFeTLRKn5klCuNADHcLOlVUwEmC2ADiRQJZaKLKZot0UoLKF1qbJWWzVPpzXOmAX4WvB/LcZJaK/41QwFHxYxpFwqRUiCkQWxWKUmIg1oDYRZabGKWyGVUkZMcM2kjlCYr4rSBOEIjDg5X8WGGWNCxBZV+SLxvMF9siFHFiVPhggTApQlkf7BSPOxA/zAW7LBCzkgd5BLIx0YO58AUhocrcsecCcXKiiueDpCA4QbkWp0jy4lT2uIUgL1yht4DYQ1aYqFqLpxTAzankx7MkBXFJyjjxohxuZJwyHnw5iAZsEAIYQA5HJpgEcoCorbuuG/5SzoQBLpCCbCCAJ1SpGVyROjAjhtdEUAT+gEgAZEPrggdmBaAQ6r8MaZVXZ5A1MFs4sCIXPIU4H0SBPPhbPrBKPOQtBTyBGtE/vHPh4MF48+BQzP97/aD2m4YFNdEqjXzQI0Nz0JIYSgwhRhDDiPa4ER6A++HR8BoEhxvOxH0G8/hmT3hKaCc8IlwndBBuTxTNk/4Q5WjQAfnDVLXI/L4WuA3k9MSDcX/IDplxfdwIOOMe0A8LD4SePaGWrYpbURXGD9x/y+C7p6GyI7uSUfIwchDZ7seVGg4ankMsilp/Xx9lrJlD9WYPzfzon/1d9fnwHvWjJbYIO4SdxU5g57GjWB1gYE1YPdaKHVPgod31ZGB3DXpLGIgnF/KI/uGPq/KpqKTMtdq1y/Wzcq5AMLVAcfDYkyTTpKJsYQGDBd8OAgZHzHNxYri5urkBoHjXKP++3sYPvEMQ/dZvuvm/A+Df1N/ff+SbLrIJgAPe8Pg3fNPZMQHQVgfgXANPLi1U6nDFhQD/JTThSTMEpsAS2MF83IAX8ANBIBREgliQBNLABFhlIdznUjAFzABzQTEoBcvBGrAebAbbwC6wFxwEdeAoOAHOgIvgMrgO7sLd0wlegh7wDvQhCEJCaAgdMUTMEGvEEXFDmEgAEopEIwlIGpKBZCNiRI7MQOYjpchKZD2yFalCDiANyAnkPNKO3EYeIl3IG+QTiqFUVBc1QW3QESgTZaFRaBI6Hs1GJ6NF6AJ0KVqOVqJ70Fr0BHoRvY52oC/RXgxg6pg+Zo45Y0yMjcVi6VgWJsVmYSVYGVaJ1WCN8DlfxTqwbuwjTsTpOAN3hjs4Ak/GefhkfBa+BF+P78Jr8VP4Vfwh3oN/JdAIxgRHgi+BQxhDyCZMIRQTygg7CIcJp+FZ6iS8IxKJ+kRbojc8i2nEHOJ04hLiRuI+YjOxnfiY2EsikQxJjiR/UiyJSyogFZPWkfaQmkhXSJ2kD2rqamZqbmphaulqYrV5amVqu9WOq11Re6bWR9YiW5N9ybFkPnkaeRl5O7mRfIncSe6jaFNsKf6UJEoOZS6lnFJDOU25R3mrrq5uoe6jHq8uUp+jXq6+X/2c+kP1j1QdqgOVTR1HlVOXUndSm6m3qW9pNJoNLYiWTiugLaVV0U7SHtA+aNA1XDQ4GnyN2RoVGrUaVzReaZI1rTVZmhM0izTLNA9pXtLs1iJr2Wixtbhas7QqtBq0bmr1atO1R2rHaudrL9HerX1e+7kOScdGJ1SHr7NAZ5vOSZ3HdIxuSWfTefT59O300/ROXaKurS5HN0e3VHevbptuj56Onodeit5UvQq9Y3od+pi+jT5HP09/mf5B/Rv6n4aZDGMNEwxbPKxm2JVh7w2GGwQZCAxKDPYZXDf4ZMgwDDXMNVxhWGd43wg3cjCKN5pitMnotFH3cN3hfsN5w0uGHxx+xxg1djBOMJ5uvM241bjXxNQk3ERiss7kpEm3qb5pkGmO6WrT46ZdZnSzADOR2WqzJrMXDD0Gi5HHKGecYvSYG5tHmMvNt5q3mfdZ2FokW8yz2Gdx35JiybTMslxt2WLZY2VmNdpqhlW11R1rsjXTWmi91vqs9XsbW5tUm4U2dTbPbQ1sObZFttW29+xodoF2k+0q7a7ZE+2Z9rn2G+0vO6AOng5ChwqHS46oo5ejyHGjY7sTwcnHSexU6XTTmerMci50rnZ+6KLvEu0yz6XO5dUIqxHpI1aMODviq6una57rdte7I3VGRo6cN7Jx5Bs3BzeeW4XbNXeae5j7bPd699cejh4Cj00etzzpnqM9F3q2eH7x8vaSetV4dXlbeWd4b/C+ydRlxjGXMM/5EHyCfWb7HPX56OvlW+B70PdPP2e/XL/dfs9H2Y4SjNo+6rG/hT/Xf6t/RwAjICNgS0BHoHkgN7Ay8FGQZRA/aEfQM5Y9K4e1h/Uq2DVYGnw4+D3blz2T3RyChYSHlIS0heqEJoeuD30QZhGWHVYd1hPuGT49vDmCEBEVsSLiJseEw+NUcXoivSNnRp6KokYlRq2PehTtEC2NbhyNjo4cvWr0vRjrGHFMXSyI5cSuir0fZxs3Oe5IPDE+Lr4i/mnCyIQZCWcT6YkTE3cnvksKTlqWdDfZLlme3JKimTIupSrlfWpI6srUjjEjxswcczHNKE2UVp9OSk9J35HeOzZ07JqxneM8xxWPuzHedvzU8ecnGE3Im3BsouZE7sRDGYSM1IzdGZ+5sdxKbm8mJ3NDZg+PzVvLe8kP4q/mdwn8BSsFz7L8s1ZmPc/2z16V3SUMFJYJu0Vs0XrR65yInM0573Njc3fm9uel5u3LV8vPyG8Q64hzxacmmU6aOqld4igplnRM9p28ZnKPNEq6Q4bIxsvqC3ThR32r3E7+k/xhYUBhReGHKSlTDk3Vniqe2jrNYdriac+Kwop+mY5P501vmWE+Y+6MhzNZM7fOQmZlzmqZbTl7wezOOeFzds2lzM2d+9s813kr5/01P3V+4wKTBXMWPP4p/KfqYo1iafHNhX4LNy/CF4kWtS12X7xu8dcSfsmFUtfSstLPS3hLLvw88ufyn/uXZi1tW+a1bNNy4nLx8hsrAlfsWqm9smjl41WjV9WuZqwuWf3Xmolrzpd5lG1eS1krX9tRHl1ev85q3fJ1n9cL11+vCK7Yt8F4w+IN7zfyN17ZFLSpZrPJ5tLNn7aIttzaGr61ttKmsmwbcVvhtqfbU7af/YX5S9UOox2lO77sFO/s2JWw61SVd1XVbuPdy6rRanl1155xey7vDdlbX+Ncs3Wf/r7S/WC/fP+LAxkHbhyMOthyiHmo5lfrXzccph8uqUVqp9X21AnrOurT6tsbIhtaGv0aDx9xObLzqPnRimN6x5YdpxxfcLy/qaipt1nS3H0i+8Tjloktd0+OOXntVPypttNRp8+dCTtz8izrbNM5/3NHz/ueb7jAvFB30etibatn6+HfPH873ObVVnvJ+1L9ZZ/Lje2j2o9fCbxy4mrI1TPXONcuXo+53n4j+catm+Nudtzi33p+O+/26zuFd/ruzrlHuFdyX+t+2QPjB5W/2/++r8Or49jDkIetjxIf3X3Me/zyiezJ584FT2lPy56ZPat67vb8aFdY1+UXY190vpS87Osu/kP7jw2v7F79+mfQn609Y3o6X0tf979Z8tbw7c6/PP5q6Y3rffAu/13f+5IPhh92fWR+PPsp9dOzvimfSZ/Lv9h/afwa9fVef35/v4Qr5Q58CmBwoFlZALzZCQAtDQA67NsoY5W94IAgyv51AIH/hJX94oB4AVADv9/ju+HXzU0A9m+H7Rfk14S9ahwNgCQfgLq7Dw2VyLLc3ZRcVNinEB7097+FPRtpFQBflvf391X293/ZBoOFvWOzWNmDKoQIe4YtnC+Z+Zng34iyP/0uxx/vQBGBB/jx/i/zoZDc6xYYDgAAAIplWElmTU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAACQAAAAAQAAAJAAAAABAAOShgAHAAAAEgAAAHigAgAEAAAAAQAAACSgAwAEAAAAAQAAACYAAAAAQVNDSUkAAABTY3JlZW5zaG90JS99ZAAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAdRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+Mzg8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MzY8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpVc2VyQ29tbWVudD5TY3JlZW5zaG90PC9leGlmOlVzZXJDb21tZW50PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KFcjjjAAAABxpRE9UAAAAAgAAAAAAAAATAAAAKAAAABMAAAATAAAAcerJp6AAAAA9SURBVFgJ7NKxFQAABANR9raicdSMcK3itGm8n+R0bTy69CFoQyEACoUUIgHK3ZBCJEC5G1KIBCh3QyR0AAAA//++LyCxAAAAOklEQVTt0rEVAAAEA1H2tqJx1IxwreK0abyf5HRtPLr0IWhDIQAKhRQiAcrdkEIkQLkbUogEKHdDJHT6I3s1kBzd4gAAAABJRU5ErkJggg=="
    ),
  "banner-yellow": Bot.card()
    .addTitle("🏝️ SpeedyBot")
    .setBackgroundImage(
      "data:image/png;base64,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"
    ),
  confirm: Bot.card()
    .addTitle("Do you want to proceed")
    .addButton("❌ Cancel", "shouldProceed", { data: false })
    .addButton("✅ OK", "shouldProceed", { data: true }),
  "table-card": Bot.card()
    .addTitle(
      "Ribbit! Check out the hop-tastic details below from FrogBot industries"
    )
    .addTable([
      ["Frog Species", "Population"],
      ["Green Tree Frog", "2,500"],
      ["Red-eyed Tree Frog", "1,800"],
      ["Poison Dart Frog", "700"],
      ["Fire-bellied Toad", "1,200"],
    ])
    .addLinkButton(
      "http://allaboutfrogs.org/froglnd.shtml",
      "🐸 Explore Frogs"
    ),
  image: Bot.card()
    .addTitle("Images")
    .addSubtitle("Cards can have images too")
    .addText("Small")
    .addImage(
      "https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/memes/logo4.jpeg",
      { size: "Small" }
    )
    .addText("Medium")
    .addImage(
      "https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/memes/logo4.jpeg",
      { size: "Medium" }
    )
    .addText("Large")
    .addImage(
      "https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/memes/logo4.jpeg",
      { size: "Large" }
    )
    .addText("ExtraLarge")
    .addImage(
      "https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/memes/logo4.jpeg",
      { size: "ExtraLarge" }
    )
    .addText("Stretch")
    .addImage(
      "https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/memes/logo4.jpeg",
      { size: "Stretch" }
    )
    .addText("TIP: Images can be links too", { color: "Attention" })
    .addImage(
      "https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/memes/logo4.jpeg",
      {
        targetURL: "https://speedybot.js.org",
        size: "ExtraLarge",
      }
    ),
  "old-survey": Bot.card()
    .addTitle("Business Improvement Survey 📈")
    .addSubtitle("Help Us Enhance Our Business Operations!")
    .addText(
      "Your insights are crucial for our continuous improvement. Please take a moment to complete this survey."
    )
    .addText("1. Company Name:")
    .addTextInput("Enter Your Company's Name")
    .addText("2. Your Position/Role:")
    .addTextInput("Enter Your Position/Role")
    .addText("3. Please select your department:")
    .addPickerDropdown(
      ["Select Department"].concat([
        "Sales",
        "Marketing",
        "Customer Support",
        "Finance",
        "Product Development",
      ])
    )
    .addText(
      "4. On a scale of 1-5, how satisfied are you with our products/services? (1 being very dissatisfied, 5 being very satisfied)"
    )
    .addSingleSelect([
      "1 (Very Dissatisfied)",
      "2",
      "3",
      "4",
      "5 (Very Satisfied)",
    ])
    .addText(
      "5. What aspects of our products/services do you appreciate the most?"
    )
    .addTextarea(
      "Please share what you appreciate the most about our offerings."
    )
    .addText(
      "6. Are there any specific areas where you believe we can improve?"
    )
    .addTextarea(
      "Please provide details on areas where we can enhance our products/services."
    )
    .addText(
      "7. How likely are you to recommend our company to others? (1 being highly unlikely, 5 being highly likely)"
    )
    .addSingleSelect([
      "1 (Highly Unlikely)",
      "2",
      "3",
      "4",
      "5 (Highly Likely)",
    ])
    .addText("8. Any additional comments or suggestions?")
    .addTextarea(
      "Feel free to share any additional comments or suggestions you may have."
    )
    .setSubmitButtonTitle("Submit Survey"),
};

export const makeHTML = (prefix: string, trigger: any) => {
  return `
          <html>
          <head>
          <title>${prefix}</title>
          </head>
          <body>
          <fieldset>
          <label> 
          <h1>${prefix}</h1>
          </label>
          </fieldset>
          <hr>
          <pre>
${JSON.stringify(trigger, null, 2)}
          </pre>
          </body>
          </html>`;
};

Bot.exact("$survey", async ($) => {
  const companyNameQuestion: SurveyQuestion = {
    type: "text",
    question: "What is the name of your company?",
    id: "company_name",
  };

  const serviceTypeQuestion: SurveyQuestion = {
    type: "text",
    question: "Describe the service performed by the vendor.",
    id: "service_type",
  };

  const serviceDateQuestion: SurveyQuestion = {
    type: "picker-date",
    question: "When was the service provided?",
    id: "service_date",
  };

  const serviceQualityQuestion: SurveyQuestion = {
    type: "single-select",
    question: "How would you rate the quality of service?",
    choices: ["Excellent", "Good", "Average", "Poor", "Very poor"],
    id: "service_quality",
  };

  const highlightsQuestion: SurveyQuestion = {
    type: "multi-select",
    question: "What were the highlights of the service?",
    choices: [
      "Communication",
      "Punctuality",
      "Time to Resolution",
      "Friendliness",
      "Cost",
    ],
    id: "service_highlights",
  };

  const futureUseQuestion: SurveyQuestion = {
    type: "single-select",
    question: "Would you consider using our services again in the future?",
    choices: [
      "Definitely",
      "Probably",
      "Not sure",
      "Probably not",
      "Definitely not",
    ],
    id: "future_use",
  };

  const otherCommentsQuestion: SurveyQuestion = {
    type: "textarea",
    question:
      "Please provide any other comments or suggestions for improvement.",
    id: "other_comments",
  };

  const preferredContactTimeQuestion: SurveyQuestion = {
    type: "picker-time",
    question: "What time of day is preferable for future contact?",
    id: "preferred_contact_time",
  };

  const communicationMethodQuestion: SurveyQuestion = {
    type: "picker-dropdown",
    question: "Preferred method of communication for future updates?",
    choices: ["Email", "Phone", "Text"],
    id: "communication_method",
  };

  const surveyCard = $.card().survey([
    companyNameQuestion,
    serviceTypeQuestion,
    serviceDateQuestion,
    serviceQualityQuestion,
    highlightsQuestion,
    futureUseQuestion,
    otherCommentsQuestion,
    preferredContactTimeQuestion,
    communicationMethodQuestion,
  ]);

  await $.send(surveyCard);
  return $.end;
});

// "ping"/"pong"
Bot.addStep(async ($) => {
  if ($.text) {
    const lower = $.text.toLowerCase();
    if (lower === "pong") {
      await $.send("ping");
    } else if (lower === "ping") {
      await $.send("pong");
    }
  }
  return $.next;
});
