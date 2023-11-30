import { OpenAIChat } from "@axflow/models/openai/chat";
import { StreamToIterable } from "@axflow/models/shared";
import { SpeedyBot } from "../../src/index";
const Bot = new SpeedyBot(process.env.BOT_TOKEN);
const apiKey = process.env.OPEN_AI_KEY;
type Chunk = any;
const stream = await OpenAIChat.stream(
  {
    model: "gpt-4",
    messages: [
      {
        role: "user",
        content: "explain how llms (large language models) work",
      },
    ],
  },

  { apiKey: apiKey }
);

class ChatResponseEditor {
  private editsDone: number = 0;
  private maxEdits = 8;
  private minWords = 5;
  private _subCharBuffer = "";
  private charBuffer = "";
  private isFinished = false;

  constructor(config?: { maxEdits?: number; minWords?: number }) {
    this.maxEdits = config?.maxEdits ?? 8;
    this.minWords = config?.minWords ?? 5;
  }

  public incomingChunkHandler = (
    chunk: Chunk,
    callback: (chunk: string, isFinished?: boolean) => void
  ) => {
    const content = chunk.choices[0]?.delta?.content || "";
    this.charBuffer += content;
    this._subCharBuffer += content;
    if (!this.isFinished) {
      this.isFinished = chunk.choices[0]?.finish_reason === "stop";
    }

    const numWords = this._subCharBuffer.split(" ").length;
    if (
      this.isFinished ||
      (this.editsDone < this.maxEdits &&
        content.length &&
        numWords >= this.minWords)
    ) {
      callback(this.charBuffer, this.isFinished);
      this.editsDone++;
      this._subCharBuffer = "";
    }
  };
}
const chatEditor = new ChatResponseEditor({ minWords: 15 });

const rootMsg = await Bot.sendTo("valgaze@cisco.com", "Thinking...");
for await (const chunk of StreamToIterable(stream)) {
  chatEditor.incomingChunkHandler(chunk, async (currentChunk, finalString) => {
    await Bot.editMessage(rootMsg.roomId, rootMsg.id, currentChunk);
    if (finalString) {
      await Bot.editMessage(rootMsg.roomId, rootMsg.id, currentChunk);
    }
  });
}
