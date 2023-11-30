import { OpenAIChat } from "@axflow/models/openai/chat";
import { StreamToIterable } from "@axflow/models/shared";
import { OpenAIChatTypes } from "@axflow/models/openai/chat";

// could easily swap w/ Anthropic
type Chunk = {
  id: string;
  object: "chat.completion.chunk";
  created: number;
  model: string;
  choices: {
    index: number;
    delta: {
      content: string;
    };
    finish_reason: null | string; // Assuming finish_reason can be null or a string
  }[];
};

export const OpenAIStream = async (
  prompt: string,
  cb: (currentChunk: string, isFinale: boolean) => void,
  config: Partial<OpenAIChatTypes.Request> = {},
  minWords = 15
) => {
  const stream = await OpenAIChat.stream(
    {
      model: config.model ?? "gpt-4",
      ...(config ? { ...config } : {}),
      messages: (config.messages ?? []).concat({
        role: "user",
        content: prompt,
      }),
    },
    { apiKey: process.env.OPEN_AI_KEY }
  );

  // type handler = (chunk: string, isFinished?: boolean) => void;
  const chatEditor = new ChatResponseEditor({ minWords });
  for await (const chunk of StreamToIterable(stream)) {
    chatEditor.incomingChunkHandler(
      //@ts-ignore
      chunk,
      async (currentChunk: string, isFinale: boolean) => {
        cb(currentChunk, isFinale);
      }
    );
  }
};

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
    callback: (chunk: string, isFinished?: boolean) => unknown
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
