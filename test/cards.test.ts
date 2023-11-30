import { describe, expect, it } from "vitest";
import { SpeedyBot } from "./../src/speedybot";
import { token } from "./common";
describe("Card Buider", () => {
  it("Kitchen Sink", async () => {
    const Bot = new SpeedyBot(token);
    const card = Bot.card()
      .addTitle("huh")
      .addSubtitle("Subtitle")
      .addText("New one")
      .addText("new one!")
      .addPickerDropdown(["a", "b", "c", "d"])
      .addMultiSelect(["yay", "nay", "way", "zay"])
      .addPickerTime("My time pick")
      .addPickerDate("My date picker", "mySpecialDateKeyhere")
      .addMultiSelect(["a", "b", "c", "d"])
      .addTextInput("Hello enter text")
      .addTable([
        ["Allen", "Dulles"],
        ["William", "Donovan"],
      ])
      .setSubmitButtonTitle("yo");
    const cardRender = {
      $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
      type: "AdaptiveCard",
      version: "1.0",
      body: [
        {
          type: "TextBlock",
          text: "huh",
          size: "ExtraLarge",
          isSubtle: true,
          wrap: true,
          weight: "Bolder",
        },
        {
          type: "TextBlock",
          text: "Subtitle",
          size: "Medium",
          isSubtle: true,
          wrap: true,
          weight: "Lighter",
        },
        {
          type: "TextBlock",
          text: "New one",
          wrap: true,
          size: "Medium",
          horizontalAlignment: "Left",
        },
        {
          type: "TextBlock",
          text: "new one!",
          wrap: true,
          size: "Medium",
          horizontalAlignment: "Left",
        },
        {
          type: "Input.ChoiceSet",
          id: "addPickerDropdown_result",
          value: "0",
          isMultiSelect: false,
          isVisible: true,
          choices: [
            { title: "a", value: "a" },
            { title: "b", value: "b" },
            { title: "c", value: "c" },
            { title: "d", value: "d" },
          ],
        },
        {
          type: "Input.ChoiceSet",
          id: "addMultiSelect_result",
          value: "0",
          isMultiSelect: true,
          isVisible: true,
          choices: [
            { title: "yay", value: "yay" },
            { title: "nay", value: "nay" },
            { title: "way", value: "way" },
            { title: "zay", value: "zay" },
          ],
          style: "expanded",
        },
        {
          type: "TextBlock",
          text: "My time pick",
          size: "Medium",
          isSubtle: true,
          wrap: true,
          weight: "Lighter",
        },
        { type: "Input.Time", id: "addPickerTime_result" },
        {
          type: "TextBlock",
          text: "My date picker",
          size: "Medium",
          isSubtle: true,
          wrap: true,
          weight: "Lighter",
        },
        { type: "Input.Date", id: "mySpecialDateKeyhere" },
        {
          type: "Input.ChoiceSet",
          id: "addMultiSelect_result_2",
          value: "0",
          isMultiSelect: true,
          isVisible: true,
          choices: [
            { title: "a", value: "a" },
            { title: "b", value: "b" },
            { title: "c", value: "c" },
            { title: "d", value: "d" },
          ],
          style: "expanded",
        },
        {
          id: "addTextInput_result",
          placeholder: "Hello enter text",
          type: "Input.Text",
        },
        {
          type: "FactSet",
          separator: false,
          facts: [
            { title: "Allen", value: "Dulles" },
            { title: "William", value: "Donovan" },
          ],
        },
      ],
      actions: [{ type: "Action.Submit", title: "yo" }],
    };
    expect(card.build()).toEqual(cardRender);
  });

  it("Attaches single chip", async () => {
    const Bot = new SpeedyBot(token);
    const card = Bot.card().addTitle("Chip below").addChip("my_chip");

    const cardRender = {
      $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
      type: "AdaptiveCard",
      version: "1.0",
      body: [
        {
          type: "TextBlock",
          text: "Chip below",
          size: "ExtraLarge",
          isSubtle: true,
          wrap: true,
          weight: "Bolder",
        },
      ],
      actions: [
        {
          type: "Action.Submit",
          title: "my_chip",
          data: { speedybot_CHIP_CLICK: "my_chip" },
        },
      ],
    };
    expect(card.build()).toEqual(cardRender);
  });

  it("Attaches single chip with custom label", async () => {
    const Bot = new SpeedyBot(token);
    const card = Bot.card()
      .addTitle("Chip below")
      .addChip({ title: "my label", value: "actual_text" });

    const cardRender = {
      $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
      type: "AdaptiveCard",
      version: "1.0",
      body: [
        {
          type: "TextBlock",
          text: "Chip below",
          size: "ExtraLarge",
          isSubtle: true,
          wrap: true,
          weight: "Bolder",
        },
      ],
      actions: [
        {
          type: "Action.Submit",
          title: "my label",
          data: { speedybot_CHIP_CLICK: "actual_text" },
        },
      ],
    };
    expect(card.build()).toEqual(cardRender);
  });

  it("Attaches multiple chips", async () => {
    const Bot = new SpeedyBot(token);
    const card = Bot.card()
      .addTitle("Chip below")
      .addChips(["my chip", "mychip2", "mychip3"]);

    const cardRender = {
      $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
      type: "AdaptiveCard",
      version: "1.0",
      body: [
        {
          type: "TextBlock",
          text: "Chip below",
          size: "ExtraLarge",
          isSubtle: true,
          wrap: true,
          weight: "Bolder",
        },
      ],
      actions: [
        {
          type: "Action.Submit",
          title: "my chip",
          data: { speedybot_CHIP_CLICK: "my chip" },
        },
        {
          type: "Action.Submit",
          title: "mychip2",
          data: { speedybot_CHIP_CLICK: "mychip2" },
        },
        {
          type: "Action.Submit",
          title: "mychip3",
          data: { speedybot_CHIP_CLICK: "mychip3" },
        },
      ],
    };
    expect(card.build()).toEqual(cardRender);
  });

  it("Attaches multiple chips w/ custom labels", async () => {
    const Bot = new SpeedyBot(token);
    const card = Bot.card()
      .addTitle("Chip below")
      .addChips([
        { value: "my_target", title: "label1" },
        { value: "my_target2", title: "label2" },
      ]);

    const cardRender = {
      $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
      type: "AdaptiveCard",
      version: "1.0",
      body: [
        {
          type: "TextBlock",
          text: "Chip below",
          size: "ExtraLarge",
          isSubtle: true,
          wrap: true,
          weight: "Bolder",
        },
      ],
      actions: [
        {
          type: "Action.Submit",
          title: "label1",
          data: { speedybot_CHIP_CLICK: "my_target" },
        },
        {
          type: "Action.Submit",
          title: "label2",
          data: { speedybot_CHIP_CLICK: "my_target2" },
        },
      ],
    };
    expect(card.build()).toEqual(cardRender);
  });

  it("Attaches multiple chips w/ custom labels + one without", async () => {
    const Bot = new SpeedyBot(token);
    const card = Bot.card()
      .addTitle("Chip below")
      .addChips([
        { value: "my_target", title: "label1" },
        { value: "my_target2", title: "label2" },
        "label 3",
      ]);

    const cardRender = {
      $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
      type: "AdaptiveCard",
      version: "1.0",
      body: [
        {
          type: "TextBlock",
          text: "Chip below",
          size: "ExtraLarge",
          isSubtle: true,
          wrap: true,
          weight: "Bolder",
        },
      ],
      actions: [
        {
          type: "Action.Submit",
          title: "label1",
          data: { speedybot_CHIP_CLICK: "my_target" },
        },
        {
          type: "Action.Submit",
          title: "label2",
          data: { speedybot_CHIP_CLICK: "my_target2" },
        },
        {
          type: "Action.Submit",
          title: "label 3",
          data: { speedybot_CHIP_CLICK: "label 3" },
        },
      ],
    };
    expect(card.build()).toEqual(cardRender);
  });

  it("Attaches multiple chips w/ custom labels, one without keyword", async () => {
    const Bot = new SpeedyBot(token);
    const card = Bot.card()
      .addTitle("Chip below")
      .addChips([
        { value: "my_target", title: "label1" },
        { title: "label2" },
        "label 3",
      ]);

    const cardRender = {
      $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
      type: "AdaptiveCard",
      version: "1.0",
      body: [
        {
          type: "TextBlock",
          text: "Chip below",
          size: "ExtraLarge",
          isSubtle: true,
          wrap: true,
          weight: "Bolder",
        },
      ],
      actions: [
        {
          type: "Action.Submit",
          title: "label1",
          data: { speedybot_CHIP_CLICK: "my_target" },
        },
        {
          type: "Action.Submit",
          title: "label2",
          data: { speedybot_CHIP_CLICK: "label2" },
        },
        {
          type: "Action.Submit",
          title: "label 3",
          data: { speedybot_CHIP_CLICK: "label 3" },
        },
      ],
    };
    expect(card.build()).toEqual(cardRender);
  });

  it("Attaches multiple chips w/ subcard", async () => {
    const Bot = new SpeedyBot(token);
    const card = Bot.card()
      .addTitle("Chip below")
      .addSubcard(Bot.card().addTitle("Sub-card here"))
      .addChips([
        { value: "my_target", title: "label1" },
        { title: "label2" },
        "label 3",
      ]);

    const cardRender = {
      $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
      type: "AdaptiveCard",
      version: "1.0",
      body: [
        {
          type: "TextBlock",
          text: "Chip below",
          size: "ExtraLarge",
          isSubtle: true,
          wrap: true,
          weight: "Bolder",
        },
      ],
      actions: [
        {
          type: "Action.ShowCard",
          title: "",
          card: {
            $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
            type: "AdaptiveCard",
            version: "1.0",
            body: [
              {
                type: "TextBlock",
                text: "Sub-card here",
                size: "ExtraLarge",
                isSubtle: true,
                wrap: true,
                weight: "Bolder",
              },
            ],
          },
        },
        {
          type: "Action.Submit",
          title: "label1",
          data: { speedybot_CHIP_CLICK: "my_target" },
        },
        {
          type: "Action.Submit",
          title: "label2",
          data: { speedybot_CHIP_CLICK: "label2" },
        },
        {
          type: "Action.Submit",
          title: "label 3",
          data: { speedybot_CHIP_CLICK: "label 3" },
        },
      ],
    };
    expect(card.build()).toEqual(cardRender);
  });

  it("Attaches data", async () => {
    const Bot = new SpeedyBot(token);
    const card = Bot.card()
      .addTitle("Here's some data")
      .attachData({ a: 1, b: 2 });

    const cardRender = {
      $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
      type: "AdaptiveCard",
      version: "1.0",
      body: [
        {
          type: "TextBlock",
          text: "Here's some data",
          size: "ExtraLarge",
          isSubtle: true,
          wrap: true,
          weight: "Bolder",
        },
      ],
      actions: [
        { type: "Action.Submit", title: "Submit", data: { a: 1, b: 2 } },
      ],
    };
    expect(card.build()).toEqual(cardRender);
  });

  it("Adds Table data", async () => {
    const Bot = new SpeedyBot(token);
    const card = Bot.card()
      .addTitle("Here's some data")
      .attachData({ a: 1, b: 2 })
      .addTable({ a: 1, b: 2, c: 3, d: "abc" });

    const cardRender = {
      $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
      type: "AdaptiveCard",
      version: "1.0",
      body: [
        {
          type: "TextBlock",
          text: "Here's some data",
          size: "ExtraLarge",
          isSubtle: true,
          wrap: true,
          weight: "Bolder",
        },
        {
          type: "FactSet",
          separator: false,
          facts: [
            { title: "a", value: 1 },
            { title: "b", value: 2 },
            { title: "c", value: 3 },
            { title: "d", value: "abc" },
          ],
        },
      ],
      actions: [
        { type: "Action.Submit", title: "Submit", data: { a: 1, b: 2 } },
      ],
    };

    expect(card.build()).toEqual(cardRender);
  });

  it("Adds background image", async () => {
    const Bot = new SpeedyBot(token);
    const card = Bot.card()
      .addTitle("Here's some data")
      .attachData({ a: 1, b: 2 })
      .setBackgroundImage(
        "https://raw.githubusercontent.com/valgaze/speedybot/deploy/docs/assets/logo.png"
      );

    const cardRender = {
      $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
      type: "AdaptiveCard",
      version: "1.0",
      body: [
        {
          type: "TextBlock",
          text: "Here's some data",
          size: "ExtraLarge",
          isSubtle: true,
          wrap: true,
          weight: "Bolder",
        },
      ],
      backgroundImage:
        "https://raw.githubusercontent.com/valgaze/speedybot/deploy/docs/assets/logo.png",
      actions: [
        { type: "Action.Submit", title: "Submit", data: { a: 1, b: 2 } },
      ],
    };

    expect(card.build()).toEqual(cardRender);
  });

  it("Adds an image", async () => {
    const Bot = new SpeedyBot(token);
    const card = Bot.card()
      .addTitle("Here's some data")
      .attachData({ a: 1, b: 2 })
      .setBackgroundImage(
        "https://raw.githubusercontent.com/valgaze/speedybot/deploy/docs/assets/logo.png"
      )
      .addTextarea("Placeholder 1234")
      .addImage(
        "https://raw.githubusercontent.com/valgaze/speedybot/deploy/docs/assets/logo.png"
      );

    const cardRender = {
      $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
      type: "AdaptiveCard",
      version: "1.0",
      body: [
        {
          type: "TextBlock",
          text: "Here's some data",
          size: "ExtraLarge",
          isSubtle: true,
          wrap: true,
          weight: "Bolder",
        },
        {
          id: "addTextarea_result",
          placeholder: "Placeholder 1234",
          type: "Input.Text",
          isMultiline: true,
        },
        {
          horizontalAlignment: "Center",
          size: "ExtraLarge",
          type: "Image",
          url: "https://raw.githubusercontent.com/valgaze/speedybot/deploy/docs/assets/logo.png",
        },
      ],
      backgroundImage:
        "https://raw.githubusercontent.com/valgaze/speedybot/deploy/docs/assets/logo.png",
      actions: [
        { type: "Action.Submit", title: "Submit", data: { a: 1, b: 2 } },
      ],
    };

    expect(card.build()).toEqual(cardRender);
  });

  it("Adds textarea", async () => {
    const Bot = new SpeedyBot(token);
    const card = Bot.card()
      .addTitle("Here's some data")
      .attachData({ a: 1, b: 2 })
      .setBackgroundImage(
        "https://raw.githubusercontent.com/valgaze/speedybot/deploy/docs/assets/logo.png"
      )
      .addTextarea("Placeholder 1234");

    const cardRender = {
      $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
      type: "AdaptiveCard",
      version: "1.0",
      body: [
        {
          type: "TextBlock",
          text: "Here's some data",
          size: "ExtraLarge",
          isSubtle: true,
          wrap: true,
          weight: "Bolder",
        },
        {
          id: "addTextarea_result",
          placeholder: "Placeholder 1234",
          type: "Input.Text",
          isMultiline: true,
        },
      ],
      backgroundImage:
        "https://raw.githubusercontent.com/valgaze/speedybot/deploy/docs/assets/logo.png",
      actions: [
        { type: "Action.Submit", title: "Submit", data: { a: 1, b: 2 } },
      ],
    };
    expect(card.build()).toEqual(cardRender);
  });

  it("Adds a link", async () => {
    const Bot = new SpeedyBot(token);
    const card = Bot.card()
      .addTitle("Here's some data")
      .attachData({ a: 1, b: 2 })
      .setBackgroundImage(
        "https://raw.githubusercontent.com/valgaze/speedybot/deploy/docs/assets/logo.png"
      )
      .addTextarea("Placeholder 1234")
      .addLink("https://github.com/valgaze/speedybot", "See speedybot");

    const cardRender = {
      $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
      type: "AdaptiveCard",
      version: "1.0",
      body: [
        {
          type: "TextBlock",
          text: "Here's some data",
          size: "ExtraLarge",
          isSubtle: true,
          wrap: true,
          weight: "Bolder",
        },
        {
          id: "addTextarea_result",
          placeholder: "Placeholder 1234",
          type: "Input.Text",
          isMultiline: true,
        },
        {
          type: "TextBlock",
          text: "**[See speedybot](https://github.com/valgaze/speedybot)**",
          wrap: true,
          size: "Medium",
          horizontalAlignment: "Left",
        },
      ],
      backgroundImage:
        "https://raw.githubusercontent.com/valgaze/speedybot/deploy/docs/assets/logo.png",
      actions: [
        { type: "Action.Submit", title: "Submit", data: { a: 1, b: 2 } },
      ],
    };
    expect(card.build()).toEqual(cardRender);
  });

  it("Adds a link, no label", async () => {
    const Bot = new SpeedyBot(token);
    const card = Bot.card()
      .addTitle("Here's some data")
      .attachData({ a: 1, b: 2 })
      .setBackgroundImage(
        "https://raw.githubusercontent.com/valgaze/speedybot/deploy/docs/assets/logo.png"
      )
      .addTextarea("Placeholder 1234")
      .addLink("https://github.com/valgaze/speedybot");

    const cardRender = {
      $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
      type: "AdaptiveCard",
      version: "1.0",
      body: [
        {
          type: "TextBlock",
          text: "Here's some data",
          size: "ExtraLarge",
          isSubtle: true,
          wrap: true,
          weight: "Bolder",
        },
        {
          id: "addTextarea_result",
          placeholder: "Placeholder 1234",
          type: "Input.Text",
          isMultiline: true,
        },
        {
          type: "TextBlock",
          text: "**[https://github.com/valgaze/speedybot](https://github.com/valgaze/speedybot)**",
          wrap: true,
          size: "Medium",
          horizontalAlignment: "Left",
        },
      ],
      backgroundImage:
        "https://raw.githubusercontent.com/valgaze/speedybot/deploy/docs/assets/logo.png",
      actions: [
        { type: "Action.Submit", title: "Submit", data: { a: 1, b: 2 } },
      ],
    };
    expect(card.build()).toEqual(cardRender);
  });

  it("Adds a subcard (using SpeedyCard)", async () => {
    const Bot = new SpeedyBot(token);
    const card = Bot.card()
      .addTitle("Here's some data")
      .attachData({ a: 1, b: 2 })
      .setBackgroundImage(
        "https://raw.githubusercontent.com/valgaze/speedybot/deploy/docs/assets/logo.png"
      )
      .addTextarea("Placeholder 1234")
      .addImage(
        "https://raw.githubusercontent.com/valgaze/speedybot/deploy/docs/assets/logo.png"
      )
      .addSubcard(Bot.card().addTitle("My title"));

    const cardRender = {
      $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
      type: "AdaptiveCard",
      version: "1.0",
      body: [
        {
          type: "TextBlock",
          text: "Here's some data",
          size: "ExtraLarge",
          isSubtle: true,
          wrap: true,
          weight: "Bolder",
        },
        {
          id: "addTextarea_result",
          placeholder: "Placeholder 1234",
          type: "Input.Text",
          isMultiline: true,
        },
        {
          horizontalAlignment: "Center",
          size: "ExtraLarge",
          type: "Image",
          url: "https://raw.githubusercontent.com/valgaze/speedybot/deploy/docs/assets/logo.png",
        },
      ],
      backgroundImage:
        "https://raw.githubusercontent.com/valgaze/speedybot/deploy/docs/assets/logo.png",
      actions: [
        {
          type: "Action.ShowCard",
          title: "",
          card: {
            $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
            type: "AdaptiveCard",
            version: "1.0",
            body: [
              {
                type: "TextBlock",
                text: "My title",
                size: "ExtraLarge",
                isSubtle: true,
                wrap: true,
                weight: "Bolder",
              },
            ],
          },
        },
        { type: "Action.Submit", title: "Submit", data: { a: 1, b: 2 } },
      ],
    };
    expect(card.build()).toEqual(cardRender);
  });

  it("Adds a subcard (using raw card json)", async () => {
    const Bot = new SpeedyBot(token);
    const card = Bot.card()
      .addTitle("Here's some data")
      .attachData({ a: 1, b: 2 })
      .setBackgroundImage(
        "https://raw.githubusercontent.com/valgaze/speedybot/deploy/docs/assets/logo.png"
      )
      .addTextarea("Placeholder 1234")
      .addImage(
        "https://raw.githubusercontent.com/valgaze/speedybot/deploy/docs/assets/logo.png"
      )
      .addSubcard({
        type: "AdaptiveCard",
        body: [
          {
            type: "ColumnSet",
            columns: [
              {
                type: "Column",
                items: [
                  {
                    type: "Image",
                    style: "Person",
                    url: "https://developer.webex.com/images/webex-logo-icon-non-contained.svg",
                    size: "Medium",
                    height: "50px",
                  },
                ],
                width: "auto",
              },
              {
                type: "Column",
                items: [
                  {
                    type: "TextBlock",
                    text: "Webex App",
                    weight: "Lighter",
                    color: "Accent",
                  },
                  {
                    type: "TextBlock",
                    weight: "Bolder",
                    text: "Buttons and Cards Release",
                    horizontalAlignment: "Left",
                    wrap: true,
                    color: "Light",
                    size: "Large",
                    spacing: "Small",
                  },
                ],
                width: "stretch",
              },
            ],
          },
          {
            type: "ColumnSet",
            columns: [
              {
                type: "Column",
                width: 35,
                items: [
                  {
                    type: "TextBlock",
                    text: "Release Date:",
                    color: "Light",
                  },
                  {
                    type: "TextBlock",
                    text: "Product:",
                    weight: "Lighter",
                    color: "Light",
                    spacing: "Small",
                  },
                  {
                    type: "TextBlock",
                    text: "OS:",
                    weight: "Lighter",
                    color: "Light",
                    spacing: "Small",
                  },
                ],
              },
              {
                type: "Column",
                width: 65,
                items: [
                  {
                    type: "TextBlock",
                    text: "Aug 6, 2019",
                    color: "Light",
                  },
                  {
                    type: "TextBlock",
                    text: "Webex Teams",
                    color: "Light",
                    weight: "Lighter",
                    spacing: "Small",
                  },
                  {
                    type: "TextBlock",
                    text: "Mac, Windows, Web",
                    weight: "Lighter",
                    color: "Light",
                    spacing: "Small",
                  },
                ],
              },
            ],
            spacing: "Padding",
            horizontalAlignment: "Center",
          },
          {
            type: "TextBlock",
            text: "We're making it easier for you to interact with bots and integrations in Webex Teams. When your bot sends information in a space that includes a card with buttons, you can now easily interact with it.",
            wrap: true,
          },
          {
            type: "TextBlock",
            text: "Buttons and Cards Resources:",
          },
          {
            type: "ColumnSet",
            columns: [
              {
                type: "Column",
                width: "auto",
                items: [
                  {
                    type: "Image",
                    altText: "",
                    url: "https://developer.webex.com/images/link-icon.png",
                    size: "Small",
                    width: "30px",
                  },
                ],
                spacing: "Small",
              },
              {
                type: "Column",
                width: "auto",
                items: [
                  {
                    type: "TextBlock",
                    text: "[Developer Portal Buttons and Cards Guide]()",
                    horizontalAlignment: "Left",
                    size: "Medium",
                  },
                ],
                verticalContentAlignment: "Center",
                horizontalAlignment: "Left",
                spacing: "Small",
              },
            ],
          },
          {
            type: "ActionSet",
            actions: [
              {
                type: "Action.Submit",
                title: "Subscribe to Release Notes",
                data: {
                  subscribe: true,
                },
              },
            ],
            horizontalAlignment: "Left",
            spacing: "None",
          },
        ],
        $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
        version: "1.3",
      });

    const cardRender = {
      $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
      type: "AdaptiveCard",
      version: "1.0",
      body: [
        {
          type: "TextBlock",
          text: "Here's some data",
          size: "ExtraLarge",
          isSubtle: true,
          wrap: true,
          weight: "Bolder",
        },
        {
          id: "addTextarea_result",
          placeholder: "Placeholder 1234",
          type: "Input.Text",
          isMultiline: true,
        },
        {
          horizontalAlignment: "Center",
          size: "ExtraLarge",
          type: "Image",
          url: "https://raw.githubusercontent.com/valgaze/speedybot/deploy/docs/assets/logo.png",
        },
      ],
      backgroundImage:
        "https://raw.githubusercontent.com/valgaze/speedybot/deploy/docs/assets/logo.png",
      actions: [
        {
          type: "Action.ShowCard",
          title: "",
          card: {
            type: "AdaptiveCard",
            body: [
              {
                type: "ColumnSet",
                columns: [
                  {
                    type: "Column",
                    items: [
                      {
                        type: "Image",
                        style: "Person",
                        url: "https://developer.webex.com/images/webex-logo-icon-non-contained.svg",
                        size: "Medium",
                        height: "50px",
                      },
                    ],
                    width: "auto",
                  },
                  {
                    type: "Column",
                    items: [
                      {
                        type: "TextBlock",
                        text: "Webex App",
                        weight: "Lighter",
                        color: "Accent",
                      },
                      {
                        type: "TextBlock",
                        weight: "Bolder",
                        text: "Buttons and Cards Release",
                        horizontalAlignment: "Left",
                        wrap: true,
                        color: "Light",
                        size: "Large",
                        spacing: "Small",
                      },
                    ],
                    width: "stretch",
                  },
                ],
              },
              {
                type: "ColumnSet",
                columns: [
                  {
                    type: "Column",
                    width: 35,
                    items: [
                      {
                        type: "TextBlock",
                        text: "Release Date:",
                        color: "Light",
                      },
                      {
                        type: "TextBlock",
                        text: "Product:",
                        weight: "Lighter",
                        color: "Light",
                        spacing: "Small",
                      },
                      {
                        type: "TextBlock",
                        text: "OS:",
                        weight: "Lighter",
                        color: "Light",
                        spacing: "Small",
                      },
                    ],
                  },
                  {
                    type: "Column",
                    width: 65,
                    items: [
                      {
                        type: "TextBlock",
                        text: "Aug 6, 2019",
                        color: "Light",
                      },
                      {
                        type: "TextBlock",
                        text: "Webex Teams",
                        color: "Light",
                        weight: "Lighter",
                        spacing: "Small",
                      },
                      {
                        type: "TextBlock",
                        text: "Mac, Windows, Web",
                        weight: "Lighter",
                        color: "Light",
                        spacing: "Small",
                      },
                    ],
                  },
                ],
                spacing: "Padding",
                horizontalAlignment: "Center",
              },
              {
                type: "TextBlock",
                text: "We're making it easier for you to interact with bots and integrations in Webex Teams. When your bot sends information in a space that includes a card with buttons, you can now easily interact with it.",
                wrap: true,
              },
              { type: "TextBlock", text: "Buttons and Cards Resources:" },
              {
                type: "ColumnSet",
                columns: [
                  {
                    type: "Column",
                    width: "auto",
                    items: [
                      {
                        type: "Image",
                        altText: "",
                        url: "https://developer.webex.com/images/link-icon.png",
                        size: "Small",
                        width: "30px",
                      },
                    ],
                    spacing: "Small",
                  },
                  {
                    type: "Column",
                    width: "auto",
                    items: [
                      {
                        type: "TextBlock",
                        text: "[Developer Portal Buttons and Cards Guide]()",
                        horizontalAlignment: "Left",
                        size: "Medium",
                      },
                    ],
                    verticalContentAlignment: "Center",
                    horizontalAlignment: "Left",
                    spacing: "Small",
                  },
                ],
              },
              {
                type: "ActionSet",
                actions: [
                  {
                    type: "Action.Submit",
                    title: "Subscribe to Release Notes",
                    data: { subscribe: true },
                  },
                ],
                horizontalAlignment: "Left",
                spacing: "None",
              },
            ],
            $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
            version: "1.3",
          },
        },
        { type: "Action.Submit", title: "Submit", data: { a: 1, b: 2 } },
      ],
    };
    expect(card.build()).toEqual(cardRender);
  });

  it("Add various colors to text", () => {
    const Bot = new SpeedyBot(token);
    const card = Bot.card()
      .addText("Accent", { size: "ExtraLarge", color: "Accent" })
      .addText("Attention", { size: "ExtraLarge", color: "Attention" })
      .addText("Dark", { size: "ExtraLarge", color: "Dark" })
      .addText("Default", { size: "ExtraLarge", color: "Default" })
      .addText("Good", { size: "ExtraLarge", color: "Good" })
      .addText("Light", { size: "ExtraLarge", color: "Light" })
      .addText("Warning", { size: "ExtraLarge", color: "Warning" })
      .build();

    const renderedCard = {
      $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
      type: "AdaptiveCard",
      version: "1.0",
      body: [
        {
          type: "TextBlock",
          text: "Accent",
          wrap: true,
          color: "Accent",
          size: "ExtraLarge",
          horizontalAlignment: "Left",
        },
        {
          type: "TextBlock",
          text: "Attention",
          wrap: true,
          color: "Attention",
          size: "ExtraLarge",
          horizontalAlignment: "Left",
        },
        {
          type: "TextBlock",
          text: "Dark",
          wrap: true,
          color: "Dark",
          size: "ExtraLarge",
          horizontalAlignment: "Left",
        },
        {
          type: "TextBlock",
          text: "Default",
          wrap: true,
          color: "Default",
          size: "ExtraLarge",
          horizontalAlignment: "Left",
        },
        {
          type: "TextBlock",
          text: "Good",
          wrap: true,
          color: "Good",
          size: "ExtraLarge",
          horizontalAlignment: "Left",
        },
        {
          type: "TextBlock",
          text: "Light",
          wrap: true,
          color: "Light",
          size: "ExtraLarge",
          horizontalAlignment: "Left",
        },
        {
          type: "TextBlock",
          text: "Warning",
          wrap: true,
          color: "Warning",
          size: "ExtraLarge",
          horizontalAlignment: "Left",
        },
      ],
    };
    expect(card).toEqual(renderedCard);
  });

  it("renders a stashcard", () => {
    const Bot = new SpeedyBot(token);
    const card = Bot.stashCard(
      "mySecret",
      "here is a message",
      "🎁 Unwrap",
      "🔥 Destroy"
    ).build();
    const renderedCard = {
      $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
      type: "AdaptiveCard",
      version: "1.0",
      body: [
        {
          type: "TextBlock",
          text: "here is a message",
          size: "ExtraLarge",
          isSubtle: true,
          wrap: true,
          weight: "Bolder",
        },
      ],
      actions: [
        {
          type: "Action.Submit",
          title: "🔥 Destroy",
          data: { _private_speedybot_: "delete" },
        },
        {
          type: "Action.ShowCard",
          title: "🎁 Unwrap",
          card: {
            $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
            type: "AdaptiveCard",
            version: "1.0",
            body: [
              {
                type: "TextBlock",
                text: "mySecret",
                size: "Medium",
                isSubtle: true,
                wrap: true,
                weight: "Lighter",
              },
            ],
          },
        },
      ],
    };
    expect(card).toEqual(renderedCard);
  });

  it("renders a complex card with blocks", () => {
    const Bot = new SpeedyBot(token);
    const card = Bot.card()
      .addTitle("LA Snack Attack Adventure!")
      .addSubtitle("Where 🌴 Palm Trees meet 🥨Pretzels!")
      .addText(
        "Venues, vistas & victuals – Los Angeles has 'em all! Pick some choices and we'll plan a trip"
      )
      .addText("Your LA Territory", {
        size: "Medium",
        color: "Accent",
        align: "Center",
      })
      .addText(
        "Steer through the steep streets of Silver Lake, amble in the alleys of Echo Park or cycle along the river in Frogtown-",
        {
          size: "Small",
          color: "Dark",
          align: "Left",
        }
      )
      .addPickerDropdown([
        "Pacific Palisades",
        "Santa Monica",
        "Venice",
        "Marina del Rey",
        "Playa del Rey",
        "Beverly Hills",
        "West Hollywood",
        "Hollywood",
        "Silver Lake",
        "Echo Park",
        "Arts District",
        "Downtown LA",
        "Griffith Park",
      ])
      .addText("Architectural Aesthetics", {
        size: "Medium",
        color: "Attention",
        align: "Left",
      })
      .addSingleSelect([
        "Mid-Century Modern",
        "Art Deco",
        "Contemporary Masterpieces",
        "Historical Landmarks",
      ])
      .addBlock(
        Bot.card().addText("Snack Attack", {
          size: "Medium",
          color: "Accent",
          align: "Center",
        }),
        { backgroundColor: "Warning" }
      )
      .addText("Let's grab some grub!", {
        size: "Medium",
        color: "Good",
        align: "Right",
      })
      .addMultiSelect([
        "Republique - A Classic Lunch",
        "Guisados - Tacos for the Soul",
        "The Getty Center - Café, with a view!",
        "Sqirl - The Brunch Bunch",
        "Boba Guys - Best-In-Town Matcha",
        "Churro Borough - LA’s Signature Sweet",
      ])

      .addBlock(
        Bot.card()
          .addText("La-La Land Discovery!", {
            size: "Medium",
            color: "Good",
            align: "Center",
          })
          .addText(
            "It's a big city with a lot of people and a lot of fun, come visit",
            {
              size: "Small",
              color: "Dark",
              align: "Left",
            }
          ),
        { backgroundColor: "Accent" }
      );
    const renderedCard = {
      $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
      type: "AdaptiveCard",
      version: "1.0",
      body: [
        {
          type: "TextBlock",
          text: "LA Snack Attack Adventure!",
          size: "ExtraLarge",
          isSubtle: true,
          wrap: true,
          weight: "Bolder",
        },
        {
          type: "TextBlock",
          text: "Where 🌴 Palm Trees meet 🥨Pretzels!",
          size: "Medium",
          isSubtle: true,
          wrap: true,
          weight: "Lighter",
        },
        {
          type: "TextBlock",
          text: "Venues, vistas & victuals – Los Angeles has 'em all! Pick some choices and we'll plan a trip",
          wrap: true,
          size: "Medium",
          horizontalAlignment: "Left",
        },
        {
          type: "TextBlock",
          text: "Your LA Territory",
          wrap: true,
          size: "Medium",
          horizontalAlignment: "Center",
          color: "Accent",
        },
        {
          type: "TextBlock",
          text: "Steer through the steep streets of Silver Lake, amble in the alleys of Echo Park or cycle along the river in Frogtown-",
          wrap: true,
          size: "Small",
          horizontalAlignment: "Left",
          color: "Dark",
        },
        {
          type: "Input.ChoiceSet",
          id: "addPickerDropdown_result",
          value: "0",
          isMultiSelect: false,
          isVisible: true,
          choices: [
            { title: "Pacific Palisades", value: "Pacific Palisades" },
            { title: "Santa Monica", value: "Santa Monica" },
            { title: "Venice", value: "Venice" },
            { title: "Marina del Rey", value: "Marina del Rey" },
            { title: "Playa del Rey", value: "Playa del Rey" },
            { title: "Beverly Hills", value: "Beverly Hills" },
            { title: "West Hollywood", value: "West Hollywood" },
            { title: "Hollywood", value: "Hollywood" },
            { title: "Silver Lake", value: "Silver Lake" },
            { title: "Echo Park", value: "Echo Park" },
            { title: "Arts District", value: "Arts District" },
            { title: "Downtown LA", value: "Downtown LA" },
            { title: "Griffith Park", value: "Griffith Park" },
          ],
        },
        {
          type: "TextBlock",
          text: "Architectural Aesthetics",
          wrap: true,
          size: "Medium",
          horizontalAlignment: "Left",
          color: "Attention",
        },
        {
          type: "Input.ChoiceSet",
          id: "addSingleSelectresult",
          value: "0",
          isMultiSelect: false,
          isVisible: true,
          style: "expanded",
          choices: [
            { title: "Mid-Century Modern", value: "Mid-Century Modern" },
            { title: "Art Deco", value: "Art Deco" },
            {
              title: "Contemporary Masterpieces",
              value: "Contemporary Masterpieces",
            },
            { title: "Historical Landmarks", value: "Historical Landmarks" },
          ],
        },
        {
          type: "Container",
          height: "stretch",
          items: [
            {
              type: "TextBlock",
              text: "Snack Attack",
              wrap: true,
              size: "Medium",
              horizontalAlignment: "Center",
              color: "Accent",
            },
          ],
          style: "Warning",
        },
        {
          type: "TextBlock",
          text: "Let's grab some grub!",
          wrap: true,
          size: "Medium",
          horizontalAlignment: "Right",
          color: "Good",
        },
        {
          type: "Input.ChoiceSet",
          id: "addMultiSelect_result",
          value: "0",
          isMultiSelect: true,
          isVisible: true,
          choices: [
            {
              title: "Republique - A Classic Lunch",
              value: "Republique - A Classic Lunch",
            },
            {
              title: "Guisados - Tacos for the Soul",
              value: "Guisados - Tacos for the Soul",
            },
            {
              title: "The Getty Center - Café, with a view!",
              value: "The Getty Center - Café, with a view!",
            },
            {
              title: "Sqirl - The Brunch Bunch",
              value: "Sqirl - The Brunch Bunch",
            },
            {
              title: "Boba Guys - Best-In-Town Matcha",
              value: "Boba Guys - Best-In-Town Matcha",
            },
            {
              title: "Churro Borough - LA’s Signature Sweet",
              value: "Churro Borough - LA’s Signature Sweet",
            },
          ],
          style: "expanded",
        },
        {
          type: "Container",
          height: "stretch",
          items: [
            {
              type: "TextBlock",
              text: "La-La Land Discovery!",
              wrap: true,
              size: "Medium",
              horizontalAlignment: "Center",
              color: "Good",
            },
            {
              type: "TextBlock",
              text: "It's a big city with a lot of people and a lot of fun, come visit",
              wrap: true,
              size: "Small",
              horizontalAlignment: "Left",
              color: "Dark",
            },
          ],
          style: "Accent",
        },
      ],
      actions: [{ type: "Action.Submit", title: "Submit" }],
    };
    expect(card.build()).toEqual(renderedCard);
  });
});
