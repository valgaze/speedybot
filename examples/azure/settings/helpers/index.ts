import { ChatCompletion } from "openai/resources";
// Auth
export * from "./auth";
// Streaming
export * from "./llm-stream";
// Storage
export * from "./storage";

// Provides type (and typo) assistance when setting/fetching secrets from Bot.addSecret()
export type SecretsList =
  | "OAUTH_ENDPOINT"
  | "BASE_URL_LLM"
  | "MODEL"
  | "CLIENT_ID"
  | "CLIENT_SECRET"
  | "APP_KEY"
  | "API_VERSION";
interface Hate {
  filtered: boolean;
  severity: string;
}
interface Contentfilterresults {
  hate: Hate;
  self_harm: Hate;
  sexual: Hate;
  violence: Hate;
}
interface Message {
  content?: string;
  role: string;
}
interface Choice {
  content_filter_results: Contentfilterresults;
  finish_reason: string;
  index: number;
  message?: Message;
}
interface Promptfilterresult {
  prompt_index: number;
  content_filter_results: Contentfilterresults;
}
interface Usage {
  completion_tokens: number;
  prompt_tokens: number;
  total_tokens: number;
}

export type CustomAzureRes = ChatCompletion & {
  prompt_sent_to_chatgpt: Message[];
  user?: string;
  prompt_filter_results: Promptfilterresult;
};
export type AzureRes = {
  choices: Choice[];
  created: number;
  id: string;
  model: string;
  object: string;
  prompt_filter_results: Promptfilterresult[];
  system_fingerprint?: any;
  usage: Usage;
  prompt_sent_to_chatgpt: Message[];
  user?: string;
};

export type LLMSamples = "simpleExample" | "threadsExample" | "streamExample";
// | "personaExample";
