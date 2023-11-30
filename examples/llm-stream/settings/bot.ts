import { SpeedyBot } from "../../../src";

import { OpenAIStream } from "./llm-stream";
const Bot = new SpeedyBot();

const showDebug = false;

Bot.exact("$clear", async ($) => {
  await $.clearScreen();
  return $.end;
});

Bot.addStep(async ($) => {
  const email = $.author.email;

  const allowed = ["valgaze@cisco.com"];
  if (allowed.includes(email)) {
    return $.next;
  } else {
    const card = await $.card()
      .addTitle("No access :/")
      .addText(`Sorry, you don't have access to this agent, request below`, {
        backgroundColor: "red",
        color: "green",
      })
      .addTextarea("Request for access", "access_request");
    await $.send(card);
  }

  return $.end;
});

Bot.addStep(async ($) => {
  if ($.text) {
    const rootMsg = await $.reply("Thinking...");
    OpenAIStream(
      $.text,
      async (curr, isFinal) => {
        await $.edit(rootMsg, curr);
      },
      {},
      15
    );
  }
  return $.next;
});

Bot.addStep(async ($) => {
  if ($.data) {
    if ($.data["access_request"]) {
      console.log("##ACCESS REQUEST", $.data["access_request"]);
      console.log("meta data:", JSON.stringify($.debug(), null, 2));
      await $.send(`Request received`);
    }
  }
  return $.next;
});

Bot.addStep(async ($) => {
  $.ctx.showDebug = showDebug;
  if ($.ctx.showDebug) {
    await $.send($.buildDataSnippet($.debug()));
  }
  return $.next;
});

export default Bot;

// Bogus in-memory, just for one-off testing, disposable/volatile
// Swap out with a proper database
export class BozoStorage {
  private storage: { [key: string]: any };
  constructor() {
    this.storage = {};
  }
  async get(storageKey: string, key: string): Promise<any> {
    return this.storage[storageKey]?.[key];
  }

  async save(storageKey: string, key: string, value: any): Promise<void> {
    if (!this.storage[storageKey]) {
      this.storage[storageKey] = {};
    }
    this.storage[storageKey][key] = value;
  }

  async deleteData(storageKey: string, key: string): Promise<void> {
    if (this.storage[storageKey]) {
      delete this.storage[storageKey][key];
    }
  }

  async listKeys(storageKey: string): Promise<string[]> {
    return this.storage[storageKey]
      ? Object.keys(this.storage[storageKey])
      : [];
  }
}
