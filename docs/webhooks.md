---
# layout: home
outline: deep
---

## Webhooks

Webhooks are the "glue" that connect your agent to your users. Note that to use webhooks (rather than websockets), you will need a publically-accessible hostname in order to register a webhook.

If you use a **[secret](https://developer.webex.com/blog/using-a-webhook-secret)** with your webhook (which you should), see **[Securing Webhooks](#securing-webhooks)** for information about how to validate the secret passed on payloads.

Below you can create, inspect, and delete webhooks associated with your bot's access token.

<TokenInput v-if="!store.state.tokenValid" />

<Blur :shouldBlur="!store.state.tokenValid">

<Webhooks> </Webhooks>

</Blur>

## Securing Webhooks

## Webhook secrets

To help secure your agent, you can add a "secret" when creating webhooks.

If you add a secret when creating a webhook on each incoming request will receive a hashed version of the request body under the header **X-Spark-Signature**

**Bottom line:** DO THIS. With your webhook secret you can take the SHA-1 representation of the request body and if it matches the signature on the header proceed otherwise simply discard the request.

Note: All of the samples in the **[examples directory](./examples/index)** of the SpeedyBot repo have reference implementations of validating webhooks appropriate for each platform.

## Reference implementations

## NodeJS

::: code-group

```ts [validateWebhook.ts]
import crypto from "crypto";

export const validateWebhook = <T = any>(
  signature: string,
  secret: string,
  requestBody: T
): boolean => {
  const hmac = crypto.createHmac("sha1", secret);
  if (typeof requestBody === "string") {
    hmac.update(requestBody);
  } else {
    hmac.update(JSON.stringify(requestBody));
  }
  const isValid = hmac.digest("hex") === signature;
  return isValid;
};
```

```js [validateWebhook.js (plain/common js)]
const crypto = require("crypto");

// validate signature
export const validateWebhook = (secret, signature, requestData) => {
  const hmac = crypto.createHmac("sha1", secret);
  if (typeof requestData === "string") {
    hmac.update(requestData);
  } else {
    hmac.update(JSON.stringify(requestData));
  }

  const isValid = hmac.digest("hex") === signature;
  return isValid;
};
```

:::

## Sample data

```js
const requestBody = {
  data: {
    a: 1,
    b: 2,
    c: {
      d: 3,
    },
  },
  signature: "01e0cb6a53731b9615b483335d77d97023410c72",
};
const secret = "myBongoSecret";

const res = validateWebhook(secret, requestBody.signature, requestBody.data);

console.log("is valid?", res);
```

## Web Crypto (for "Workers", V8 Isolates)

```js
const validateWebhook = async (secret, signature, requestData) => {
  const stringyBody =
    typeof requestData !== "string" ? JSON.stringify(requestData) : requestData;
  const algo = {
    name: "HMAC",
    hash: "SHA-1",
  };
  const enc = {
    name: "UTF-8",
  };
  const hmacKey = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    algo,
    false,
    ["sign"]
  );
  const hmacData = await crypto.subtle.sign(
    algo,
    hmacKey,
    new TextEncoder().encode(stringyBody)
  );

  const bufferToHex = (buffer) => {
    return Array.prototype.map
      .call(new Uint8Array(buffer), (x) => ("00" + x.toString(16)).slice(-2))
      .join("");
  };
  const hmacDataHex = bufferToHex(hmacData);
  return hmacDataHex === signature;
};

const requestBody = {
  data: {
    a: 1,
    b: 2,
    c: {
      d: 3,
    },
  },
  signature: "01e0cb6a53731b9615b483335d77d97023410c72",
};
const secret = "myBongoSecret";

const res = validateWebhook(
  secret,
  requestBody.signature,
  requestBody.data
).then((val) => console.log("is valid?", val));
```

## Resources

- https://developer.webex.com/blog/using-a-webhook-secret
- https://community.cisco.com/t5/collaboration-blogs/using-a-webhook-secret/ba-p/3662176
- https://blogs.cisco.com/learning/chatops-how-to-secure-your-webex-bot

<script setup>
import { ref } from 'vue'
const jsonData = ref({})
const shouldBlur = ref(true)
import Webhooks from './.vitepress/components/webhooks.vue'
import Blur from './.vitepress/components/Blur.vue'
import TokenInput from './.vitepress/components/token_handler.vue'

import { useCustomStore } from "./.vitepress/util/store";
const store = useCustomStore();

</script>
