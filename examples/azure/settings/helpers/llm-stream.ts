// Could swap out for Anthropic or any provider
import openai from "openai";

type ChunkCallback = (
  textChunk: string,
  isFinished?: boolean
) => Promise<boolean>;

export class LLMStream {
  private editsDone: number = 0;
  private maxEdits: number;
  private minWords: number;
  private charBuffer: string = ""; // Full buffer
  private subCharBuffer: string = ""; // Sub buffer for the current chunk
  private isFinished: boolean = false;

  constructor(config?: { maxEdits?: number; minWords?: number }) {
    this.maxEdits = config?.maxEdits ?? 9;
    this.minWords = config?.minWords ?? 15;
  }

  public async incomingChunkHandler(
    chunk: openai.Chat.ChatCompletionChunk,
    callback: ChunkCallback
  ): Promise<boolean> {
    const text = chunk.choices[0]?.delta?.content || "";
    this.charBuffer += text;
    this.subCharBuffer += text;
    this.isFinished = chunk.choices[0]?.finish_reason === "stop";
    const numWords = this.subCharBuffer.split(" ").length;
    if (
      this.isFinished ||
      (this.editsDone < this.maxEdits && numWords >= this.minWords)
    ) {
      await callback(this.charBuffer, this.isFinished);
      this.editsDone++;
      this.subCharBuffer = "";
    }
    return true;
  }
}
