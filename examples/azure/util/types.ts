// Customize for your implementation
export type AuthConfig = {
  clientId: string;
  clientSecret: string;
  oAuthEndpoint: string;
};

export type LLMConfig = {
  appKey: string;
  stream: boolean;
  memory: boolean; // do we want to worry about
  endpoint: string;
};
