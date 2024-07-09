import { AzureOpenAI } from "openai";
import { SpeedyBot } from "speedybot";
import { LLMStream, OAuthHelper, SimpleMemoryStorage } from "./helpers";
import { SystemPrompt } from "./helpers/prompts";
import type { CustomAzureRes, LLMSamples, SecretsList } from "./helpers";

const StorageRef = new SimpleMemoryStorage(":memory:");

const Bot = new SpeedyBot<SecretsList>();
export default Bot;

Bot.exact("$clear", async ($) => !Boolean(await $.clearScreen()));

/**
 * Setup: Choose an LLM strategy to configure the bot's behavior.
 * - 'simpleExample': Sends an input and gets a single response.
 * - 'threadsExample': Sends an input and receives multiple responses organized by threads/replies.
 * - 'streamExample': Streams tokens as they are received from an LLM system.
 */
Bot.addStep(($) => {
  const LLMStrategy: LLMSamples = "simpleExample";
  $.ctx.LLMStrategy = LLMStrategy;
  $.ctx.debug = true;

  return $.next;
});

/**
 * Example 1: "Simple"
 * Sends a single-shot message where the LLM responds based on system prompt + user input.
 * This sample does NOT maintain conversation memory/context.
 */
Bot.addStep(async ($) => {
  if ($.ctx.LLMStrategy === "simpleExample") {
    try {
      if ($.text) {
        const client = await buildAzureClient(Bot);
        const appKey = Bot.getSecret("APP_KEY") as string;
        const modelName = Bot.getSecret("MODEL") as string;

        const result = await client.chat.completions.create({
          model: modelName,
          messages: [
            { role: "system", content: SystemPrompt },
            { role: "user", content: $.text },
          ],
          user: JSON.stringify({ appkey: appKey }),
          stop: ["<|im_end|>"],
          stream: false,
        });

        const responseText = result.choices[0]?.message?.content;
        if (responseText) {
          await $.send(responseText);
        }
      }
    } catch (e) {
      if (e && typeof e === "object" && "status" in e && e.status === 401) {
        await $.send("It appears there is an issue with the system's API key");
        return $.end;
      }
      await $.send("It appears there was some type of catastrophic error");
      if ($.ctx.debug) {
        console.log("Error", e);
        await $.send(JSON.stringify(e));
      }
    }
  }
  return $.next;
});

/**
 * Example 2: "Threads"
 * Allows replying to messages where the LLM maintains conversation context and history, within context window limits.
 */
Bot.addStep(async ($) => {
  if ($.ctx.LLMStrategy === "threadsExample") {
    try {
      if ($.text) {
        let { parentId } = $.msg;
        const isThread = Boolean(parentId);
        if (!isThread) {
          const text = $.pickRandom(["🧩", "🧠", "🌀", "⏳", "🔄"]);
          await $.reply(text);
          parentId = $.id;
        }
        const lookupId = `${$.author.id}_${parentId}`;
        const client = await buildAzureClient(Bot);
        const appKey = Bot.getSecret("APP_KEY") as string;
        const modelName = Bot.getSecret("MODEL") as string;

        await StorageRef.init();
        const convoRecord = await StorageRef.getMemory(lookupId);
        const conversationID = convoRecord?.conversationID || "";

        const result = (await client.chat.completions.create({
          model: modelName,
          messages: [
            { role: "system", content: SystemPrompt },
            { role: "user", content: JSON.stringify($.text) },
          ],
          user: JSON.stringify({
            appkey: appKey,
            ...(conversationID && { session_id: conversationID }),
          }),
          stop: ["<|im_end|>"],
          stream: false,
        })) as CustomAzureRes;

        const responseText = result.choices[0]?.message?.content;
        if (responseText) {
          await $.reply(responseText);
        }

        if (!conversationID && result.user) {
          try {
            const userObj = JSON.parse(result.user) as { session_id?: string };
            if (typeof userObj.session_id === "string") {
              await StorageRef.setMemory(lookupId, userObj.session_id);
            }
          } catch {
            await $.send("There was an issue saving conversation memory");
          }
        }
      }
    } catch (e) {
      if (e && typeof e === "object" && "status" in e && e.status === 401) {
        await $.send("It appears there is an issue with the system's API key");
        return $.end;
      }
      await $.send("It appears there was some type of catastrophic error");
      if ($.ctx.debug) {
        console.log("Error", e);
        await $.send(JSON.stringify(e));
      }
    }
  }
  return $.next;
});

/**
 * Example 3: "Streaming"
 * LLM responses are streamed in, considering message edit limits in WebEx.
 */
Bot.addStep(async ($) => {
  if ($.ctx.LLMStrategy === "streamExample") {
    try {
      if ($.text) {
        const client = await buildAzureClient(Bot);
        const appKey = Bot.getSecret("APP_KEY") as string;
        const modelName = Bot.getSecret("MODEL") as string;

        const streamHandler = new LLMStream();
        const rootMsg = await $.send("Thinking...");

        const result = await client.chat.completions.create({
          model: modelName,
          messages: [
            { role: "system", content: SystemPrompt },
            { role: "user", content: $.text },
          ],
          user: JSON.stringify({ appkey: appKey }),
          stop: ["<|im_end|>"],
          stream: true,
        });

        for await (const chunk of result) {
          await streamHandler.incomingChunkHandler(chunk, async (textChunk) => {
            await $.edit(rootMsg, textChunk);
            return $.next;
          });
        }
      }
    } catch (e) {
      if (e && typeof e === "object" && "status" in e && e.status === 401) {
        await $.send("It appears there is an issue with the system's API key");
        return $.end;
      }
      await $.send("It appears there was some type of catastrophic error");
      if ($.ctx.debug) {
        console.log("Error", e);
        await $.send(JSON.stringify(e));
      }
    }
  }
  return $.next;
});

/**
 * File Handling Example
 * This step demonstrates how to handle file uploads and extract information from uploaded files.
 */
Bot.addStep(async ($) => {
  if ($.file) {
    const supportedExtensions = ["txt"];
    const { bytes, contentType, extension, name } = $.file;

    if (!supportedExtensions.includes(extension)) {
      await $.send(
        `This agent does not yet support file uploads of ${extension} files (${contentType})`
      );

      const bytesToMB = (bytes: number, integerOnly = false): number => {
        const megabytes = bytes / (1024 * 1024);
        return integerOnly ? Math.floor(megabytes) : +megabytes.toFixed(2);
      };

      await $.send(
        `You uploaded "${name}", a *.${extension} file [${contentType}] with a size of ${bytesToMB(
          bytes
        )} MB [${bytes} bytes]`
      );
      return $.end;
    }

    if (extension === "txt") {
      if (name === "andy.txt") {
        await $.reply("😻😻");
        const fileData = (await $.file.getData()) as string;

        const client = await buildAzureClient(Bot);
        const appKey = Bot.getSecret("APP_KEY") as string;
        const modelName = Bot.getSecret("MODEL") as string;

        const result = await client.chat.completions.create({
          model: modelName,
          messages: [
            {
              role: "system",
              content: `Here is the content of the text file (*.txt): ${fileData}`,
            },
            {
              role: "user",
              content: $.text ?? `tell me about the text file contents`,
            },
          ],
          user: JSON.stringify({ appkey: appKey }),
          stop: ["<|im_end|>"],
          stream: false,
        });

        const responseText = result.choices[0]?.message?.content;
        if (responseText) {
          await $.send(responseText);
        }
      }
    }
  }
  return $.next;
});

/**
 * (optional): Restrict + scope access to specific people
 * Populate allowedEmails with a list of permitted
 *
 */
Bot.insertStepToFront(async ($) => {
  const allowedEmails = [] as string[];
  if (allowedEmails.length) {
    if (allowedEmails.includes($.author.email)) {
      return $.next;
    }
    await $.send(`You do not have access to this agent`);
    return $.end;
  }
  return $.next;
});

/**
 * Azure Client Initialization
 * Initialize the Azure OpenAI client, handle OAuth, etc
 * Todo: persist the key and refresh if expires
 */
export const buildAzureClient = async (
  Bot: SpeedyBot<SecretsList>
): Promise<AzureOpenAI> => {
  const clientId = Bot.getSecret("CLIENT_ID") as string;
  const clientSecret = Bot.getSecret("CLIENT_SECRET") as string;
  const oAuthEndpoint = Bot.getSecret("OAUTH_ENDPOINT") as string;
  const oauthClient = new OAuthHelper(clientId, clientSecret, oAuthEndpoint);
  const apiKey = await oauthClient.getKey();
  const baseURL = Bot.getSecret("BASE_URL_LLM") as string;
  const apiVersion = Bot.getSecret("API_VERSION") as string;
  return new AzureOpenAI({ apiKey, apiVersion, baseURL });
};
