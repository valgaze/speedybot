import { describe, expect, it } from "vitest";
import { createMockRequest, token } from "./common";
import { SpeedyBot } from "../src/speedybot";
import { logoRoll, mainRequester } from "../src";
import { checkers } from "../src/cards";
describe("Private methods", () => {
  it("[Private] get self data ", async () => {
    const { makeRequestMock, requestDetails } = createMockRequest();
    const inst = new SpeedyBot(token, makeRequestMock);
    const HACK_FOR_PRIVATE_METHODS = Object.getPrototypeOf(inst);

    await HACK_FOR_PRIVATE_METHODS.getSelf.call(inst); // rebind this context 🙃

    expect(requestDetails.url).toBe("https://webexapis.com/v1/people/me");
    expect(requestDetails.body).toEqual({});
    expect(requestDetails.method).toEqual("GET");
  });

  it("[Private] guess content type ", async () => {
    const inst = new SpeedyBot(token);
    const HACK_FOR_PRIVATE_METHODS = Object.getPrototypeOf(inst);
    const res = HACK_FOR_PRIVATE_METHODS.guessContentType.call(inst, "json");

    expect(res).toBe("application/json");
  });

  it("[Private] guess content type w/ * ", async () => {
    const inst = new SpeedyBot(token);
    const HACK_FOR_PRIVATE_METHODS = Object.getPrototypeOf(inst);
    const res = HACK_FOR_PRIVATE_METHODS.guessContentType.call(inst, "*.json");

    expect(res).toBe("application/json");
  });

  it("[Private] guess content type w/ *.txt ", async () => {
    const inst = new SpeedyBot(token);
    const HACK_FOR_PRIVATE_METHODS = Object.getPrototypeOf(inst);
    const res = HACK_FOR_PRIVATE_METHODS.guessContentType.call(inst, "*.txt");

    expect(res).toBe("text/plain");
  });

  it("[Private] guess content type w/ .fileExtension ", async () => {
    const inst = new SpeedyBot(token);
    const HACK_FOR_PRIVATE_METHODS = Object.getPrototypeOf(inst);
    const res = HACK_FOR_PRIVATE_METHODS.guessContentType.call(inst, ".json");

    expect(res).toBe("application/json");
  });
});

describe("Why not?", () => {
  it("Random values ", async () => {
    const inst = new SpeedyBot(token);
    expect(inst.rando()).to.not.equal(inst.rando());
  });

  it("Author Data ", async () => {
    const { makeRequestMock, requestDetails } = createMockRequest();

    const inst = new SpeedyBot(token, makeRequestMock);
    const data = await inst.getPerson("authorId");
    expect(requestDetails.url).toEqual(
      "https://webexapis.com/v1/people/authorId"
    );
    expect(requestDetails.token).toBe(token);
    expect(requestDetails.method).toBe("GET");
  });

  it("Recent rooms", async () => {
    const { makeRequestMock, requestDetails } = createMockRequest();
    const inst = new SpeedyBot(token, makeRequestMock);
    inst.setFallbackText("My fallback text");
    await inst.getRecentRooms();
    expect(requestDetails.url).toBe(
      "https://webexapis.com/v1/rooms?max=100&sortBy=lastactivity"
    );
    expect(requestDetails.method).toEqual("GET");
  });

  it("Set fallback messsage", async () => {
    const { makeRequestMock, requestDetails } = createMockRequest();
    const inst = new SpeedyBot(token, makeRequestMock);
    inst.setFallbackText("My fallback text");
    await inst.sendTo("roomId", inst.card().addTitle("yay"));
    expect(requestDetails.url).toBe("https://webexapis.com/v1/messages");
    expect(requestDetails.body).toEqual({
      roomId: "roomId",
      markdown: "My fallback text",
      text: "My fallback text",
      attachments: [
        {
          contentType: "application/vnd.microsoft.card.adaptive",
          content: {
            $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
            type: "AdaptiveCard",
            version: "1.0",
            body: [
              {
                type: "TextBlock",
                text: "yay",
                size: "ExtraLarge",
                isSubtle: true,
                wrap: true,
                weight: "Bolder",
              },
            ],
          },
        },
      ],
    });

    expect(requestDetails.method).toEqual("POST");
  });
});

describe("Who am I?", () => {
  it("Gets user info + webhooks", async () => {
    const { makeRequestMock, requestDetails } = createMockRequest();
    const inst = new SpeedyBot(token, makeRequestMock);
    await inst.whoAmI();
    expect(requestDetails.history).toEqual([
      "https://webexapis.com/v1/people/me",
      "https://webexapis.com/v1/webhooks",
    ]);
    expect(requestDetails.method).toEqual("GET");
  });
});

describe("Logo roll", () => {
  it("Rolls a logo", async () => {
    const logo = logoRoll();
    console.log(logo);
    expect(logo).toBeDefined();
  });
});

describe("Checkers: isEmail", () => {
  it("isEmail returns true for an email", async () => {
    const candidate = "joe@joe.com";
    expect(checkers.isEmail(candidate)).toBe(true);
  });

  it("isEmail returns false for an email", async () => {
    const candidate = "joe34567890";
    expect(checkers.isEmail(candidate)).toBe(false);
  });
});

describe("Checkers: isSpeedycard", () => {
  it("isSpeedyCard returns true for a SpeedyCard", async () => {
    const bot = new SpeedyBot(token);
    const candidate = bot.card().addTitle("a card");
    expect(checkers.isSpeedyCard(candidate)).toBe(true);
  });

  it("isSpeedyCard returns false for a non-speedycard", async () => {
    const bot = new SpeedyBot(token);
    const candidate = { a: 1, b: "not a card" };
    expect(checkers.isSpeedyCard(candidate)).toBe(false);
  });
});

describe("Checkers: isCard", () => {
  it("isCard returns true for a SpeedyCard", async () => {
    const bot = new SpeedyBot(token);
    const candidate = bot.card().addTitle("a card");
    expect(checkers.isCard(candidate)).toBe(true);
  });

  it("isCard returns false for a non-speedycard", async () => {
    const bot = new SpeedyBot(token);
    const candidate = { a: 1, b: "not a card" };
    expect(checkers.isCard(candidate)).toBe(false);
  });

  it("isCard returns true for a valid adaptive card", async () => {
    const bot = new SpeedyBot(token);
    const candidate = {
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
                { type: "TextBlock", text: "Release Date:", color: "Light" },
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
                { type: "TextBlock", text: "Aug 6, 2019", color: "Light" },
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
    };
    expect(checkers.isCard(candidate)).toBe(true);
  });

  it("isCard returns false for an invalid adaptive card", async () => {
    const bot = new SpeedyBot(token);
    const candidate = { message: "big phony card" };
    expect(checkers.isCard(candidate)).toBe(false);
  });
});

describe("Checkers: isCard", () => {
  it("isCard returns true for a SpeedyCard", async () => {
    const bot = new SpeedyBot(token);
    const candidate = bot.card().addTitle("a card");
    expect(checkers.isCard(candidate)).toBe(true);
  });

  it("isCard returns false for a non-speedycard", async () => {
    const bot = new SpeedyBot(token);
    const candidate = { a: 1, b: "not a card" };
    expect(checkers.isCard(candidate)).toBe(false);
  });
});

describe("Fuzzy matching", () => {
  it("Matches fuzzily", async () => {
    const bot = new SpeedyBot(token);
    const candidate = "hi";
    expect(bot.fuzzyMatch(candidate, ["yo", "hi"])).toBe(true);
  });

  it("Matches fuzzily, case-insenitive", async () => {
    const bot = new SpeedyBot(token);
    const candidate = "hI";
    expect(bot.fuzzyMatch(candidate, ["yo", "hi"])).toBe(true);
  });

  it("Matches fuzzily, case-insenitive on list", async () => {
    const bot = new SpeedyBot(token);
    const candidate = "hi";
    expect(bot.fuzzyMatch(candidate, ["yo", "Hi"])).toBe(true);
  });

  it("Reports false when no match", async () => {
    const bot = new SpeedyBot(token);
    const candidate = "hiii";
    expect(bot.fuzzyMatch(candidate, ["yo", "Hi"])).toBe(false);
  });
});
