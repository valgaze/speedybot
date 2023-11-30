import { StackContext, Api } from "sst/constructs";

export function API({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    defaults: {
      function: {
        runtime: "nodejs18.x",
        timeout: 20,
        environment: {
          WEBHOOK_SECRET: process.env.WEBHOOK_SECRET as string,
          BOT_TOKEN: process.env.BOT_TOKEN as string, // bot token, make one here: https://developer.webex.com/my-apps/new
        },
      },
    },
    routes: {
      "POST /speedybot": "packages/functions/src/lambda.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
