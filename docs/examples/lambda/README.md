# SpeedyBot on AWS Lambda

Note: This example uses the **[Serverless Stack (SST)](https://serverless-stack.com/)** toolchain for provisioning, deployment of infrastructure. SST is built on top of a version **[AWS Cloud Development Kit (cdk)](https://aws.amazon.com/cdk/)** and makes it possible to express your infrastructure needs as spec/code. SST is definitely not required, but is the quickest route to a serverless deployment.

SpeedyBot has been built with serverless in mind from the beginning-- serverless infrastructure is "asleep" until you need it. Start-up times are fast enough to interact with the chat client withot timing out.

## 1) Fetch repo & install dependencies

```
git clone https://github.com/valgaze/speedybot
cd speedybot
cd examples/lambda
npm install
```

## 2) Set your bot access token

- If you have an existing bot, get its token here: **[https://developer.webex.com/my-apps](https://developer.webex.com/my-apps)**

- If you don't have a bot, create one and save the token from here: **[https://developer.webex.com/my-apps/new/bot](https://developer.webex.com/my-apps/new/bot)**

- Create a `.env` file like **[.env.example](./.env.example)**

```sh
WEBHOOK_SECRET=__REPLACE__ME__
BOT_TOKEN=__REPLACE__ME__
```

Note: WEBHOOK_SECRET is up to you, incoming requests will be hashed with it, if the hash is present on the incoming request & `WEBHOOK_SECRET` is present, the lambda will attempt to validate the request. If it fails to match the request will be rejected

Note: The `.env` file musts never be aded to source control (and there are may ways to supply sensitive data to lambda functions with SST)

## 3) Set up your AWS credentials on your machine

Note: You'll need an AWS account that has authorization/billing to create lambda functions

3a. Setup IAM here: https://sst.dev/chapters/create-an-iam-user.html

3b. Setup AWS CLI: https://sst.dev/chapters/configure-the-aws-cli.html

## 4) Deploy your bot and get its public URL

Run this command from the project directory:

```
npm run deploy
```

If deployment is successful, you should find that your url that looks something like this: https://abcd123456.execute-api.us-east-1.amazonaws.com

## 4) Register webhooks

Hop on over to the **[Webhooks Section](./../../webhooks.md)** to register your webhooks and secret

Note:
This uses SST but any deployment mechanism/structure you prefer works fine

Note: This SST configuration is setup to capture incoming WebEx requests on the `/speedybot` route, you can change any/all the behavior in **[the stack config](./stacks/MyStack.ts)**
