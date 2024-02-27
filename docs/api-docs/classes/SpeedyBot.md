[speedybot](../README.md) / [Exports](../modules.md) / SpeedyBot

# Class: SpeedyBot<S\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` = `string` |

## Table of contents

### Constructors

- [constructor](SpeedyBot.md#constructor)

### Methods

- [Setup](SpeedyBot.md#setup)
- [addSecret](SpeedyBot.md#addsecret)
- [addSecrets](SpeedyBot.md#addsecrets)
- [addStep](SpeedyBot.md#addstep)
- [addStepSequence](SpeedyBot.md#addstepsequence)
- [appCard](SpeedyBot.md#appcard)
- [captureError](SpeedyBot.md#captureerror)
- [card](SpeedyBot.md#card)
- [checkAuthor](SpeedyBot.md#checkauthor)
- [contains](SpeedyBot.md#contains)
- [convertToHash](SpeedyBot.md#converttohash)
- [createWebhook](SpeedyBot.md#createwebhook)
- [deleteMessage](SpeedyBot.md#deletemessage)
- [deleteWebhook](SpeedyBot.md#deletewebhook)
- [detectType](SpeedyBot.md#detecttype)
- [editMessage](SpeedyBot.md#editmessage)
- [errorCard](SpeedyBot.md#errorcard)
- [exact](SpeedyBot.md#exact)
- [extractFiledata](SpeedyBot.md#extractfiledata)
- [fetchWebhooks](SpeedyBot.md#fetchwebhooks)
- [fuzzyMatch](SpeedyBot.md#fuzzymatch)
- [generateFileName](SpeedyBot.md#generatefilename)
- [getFile](SpeedyBot.md#getfile)
- [getPerson](SpeedyBot.md#getperson)
- [getRecentRooms](SpeedyBot.md#getrecentrooms)
- [getRoom](SpeedyBot.md#getroom)
- [getSecret](SpeedyBot.md#getsecret)
- [getSelf](SpeedyBot.md#getself)
- [getToken](SpeedyBot.md#gettoken)
- [getWebhooks](SpeedyBot.md#getwebhooks)
- [insertStepToFront](SpeedyBot.md#insertsteptofront)
- [onCamera](SpeedyBot.md#oncamera)
- [onReject](SpeedyBot.md#onreject)
- [peekFile](SpeedyBot.md#peekfile)
- [pickRandom](SpeedyBot.md#pickrandom)
- [rando](SpeedyBot.md#rando)
- [regex](SpeedyBot.md#regex)
- [replyTo](SpeedyBot.md#replyto)
- [runMiddleware](SpeedyBot.md#runmiddleware)
- [sendFileTo](SpeedyBot.md#sendfileto)
- [sendTo](SpeedyBot.md#sendto)
- [setFallbackText](SpeedyBot.md#setfallbacktext)
- [setToken](SpeedyBot.md#settoken)
- [stashCard](SpeedyBot.md#stashcard)
- [successCard](SpeedyBot.md#successcard)
- [validateToken](SpeedyBot.md#validatetoken)
- [whoAmI](SpeedyBot.md#whoami)

## Constructors

### constructor

• **new SpeedyBot**<`S`\>(`_token?`, `makeRequest?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` = `string` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `_token` | `string` | `""` |
| `makeRequest` | `CoreMakerequest`<`unknown`\> | `mainRequester` |

#### Defined in

[speedybot.ts:53](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L53)

## Methods

### Setup

▸ **Setup**(`url`, `secret`): `Promise`<[`Webhook`, `Webhook`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `secret` | `string` |

#### Returns

`Promise`<[`Webhook`, `Webhook`]\>

#### Defined in

[speedybot.ts:926](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L926)

___

### addSecret

▸ **addSecret**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `S` |
| `value` | `string` \| `number` |

#### Returns

`void`

#### Defined in

[speedybot.ts:67](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L67)

___

### addSecrets

▸ **addSecrets**(`payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Object` |

#### Returns

`void`

#### Defined in

[speedybot.ts:71](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L71)

___

### addStep

▸ **addStep**<`T`\>(`middleware`): `void`

Core part of SpeedyBot Listener, it MUST return `$.next` (continues chain) or `$.end`

The $ parameter's `$.send` and `$.reply` methods will be autobound to incoming message

```ts
const Bot = new SpeedyBot();
Bot.addStep(async ($) => {
 await Bot.sendTo($.author.email, "my message");
 const parentMessageID = $.id;
 await Bot.replyTo(parentMessageID, $.author.email, "my great reply message");
 await $.send("Hello the right person");
 await $.reply("Reply to the right message");
 return $.next;
});

```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `AttachedData` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `middleware` | `Middleware`<`T`\> |

#### Returns

`void`

#### Defined in

[speedybot.ts:152](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L152)

___

### addStepSequence

▸ **addStepSequence**<`T`\>(`middlewares`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `AttachedData` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `middlewares` | `Middleware`<`T`\>[] |

#### Returns

`void`

#### Defined in

[speedybot.ts:156](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L156)

___

### appCard

▸ **appCard**(`appName`, `logoUrl`, `config?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `appName` | `string` |
| `logoUrl` | `string` |
| `config` | `Omit`<`HeaderConfig`, ``"iconURL"``\> |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[speedybot.ts:1410](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L1410)

___

### captureError

▸ **captureError**(`func`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (`e`: `SpeedyError`) => `unknown` |

#### Returns

`void`

#### Defined in

[speedybot.ts:245](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L245)

___

### card

▸ **card**(`config?`): [`SpeedyCard`](SpeedyCard.md)

Convenience helper that creates a SpeedyCard

![cards](media://demo_sendcard.gif)

```ts
import { SpeedyBot } from 'speedybot-mini'
// 1) Initialize your bot w/ config
const CultureBot = new SpeedyBot('tokenPlaceholder');

// 2) Export your bot
export default CultureBot;

// 3) Do whatever you want!

CultureBot.contains(["hi", "hey"],
 async ($bot, msg) => {
  const cardData = $bot.card({
    title: "SpeedyBot Hub",
    subTitle: "Sign the paperwork",
    chips: ["ping", "pong", "hi",],
    image: "https://github.com/valgaze/speedybot-mini/raw/deploy/docs/assets/logo.png?raw=true",
    url: "https://github.com/valgaze/speedybot-mini"
  });
  $bot.send(cardData);
 })

```

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | `Partial`<`AbbreviatedSpeedyCard` & { `label`: `string`  }\> |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[speedybot.ts:710](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L710)

___

### checkAuthor

▸ `Private` **checkAuthor**(`authorObj`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authorObj` | `SelfData` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[speedybot.ts:1018](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L1018)

___

### contains

▸ **contains**(`keyword`, `cb`): `void`

Performs a case-insensitive check to determine if the input text contains the specified keyword or a list of supplied words.
If a match is found, the provided middleware function is executed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keyword` | `string` \| `string`[] | The keyword or array of keywords to check for in the input text. |
| `cb` | `Middleware`<`AttachedData`\> | The middleware function to be executed if a match is found. |

#### Returns

`void`

#### Defined in

[speedybot.ts:221](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L221)

___

### convertToHash

▸ **convertToHash**(`arr`): `Object`

Convert a list of pairs into an object for secrets consumption.

**`example`**
```typescript
const input: string[] = ['secret1=value1', 'secret2=value2', 'secret3=value3'];
const output = convertToHash(input);
console.log(output);
// Output:
// {
//   secret1: 'value1',
//   secret2: 'value2',
//   secret3: 'value3'
// }
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `string`[] | The list of pairs to convert. |

#### Returns

`Object`

The converted object.

#### Defined in

[speedybot.ts:1402](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L1402)

___

### createWebhook

▸ **createWebhook**(`payload`): `Promise`<`Webhook`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Object` |
| `payload.event` | `string` |
| `payload.name` | `string` |
| `payload.resource` | `string` |
| `payload.secret?` | `string` |
| `payload.targetUrl` | `string` |

#### Returns

`Promise`<`Webhook`\>

#### Defined in

[speedybot.ts:1002](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L1002)

___

### deleteMessage

▸ **deleteMessage**(`msgId`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msgId` | `string` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[speedybot.ts:857](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L857)

___

### deleteWebhook

▸ **deleteWebhook**(`webhookId`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `webhookId` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[speedybot.ts:870](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L870)

___

### detectType

▸ `Private` **detectType**(`envelope`): `MessageTypes`

#### Parameters

| Name | Type |
| :------ | :------ |
| `envelope` | `ENVELOPES` |

#### Returns

`MessageTypes`

#### Defined in

[speedybot.ts:842](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L842)

___

### editMessage

▸ **editMessage**(`roomId`, `messageId`, `message`): `Promise`<`MessageResponse`\>

Edit a message

#### Parameters

| Name | Type |
| :------ | :------ |
| `roomId` | `string` |
| `messageId` | `string` |
| `message` | `string` |

#### Returns

`Promise`<`MessageResponse`\>

#### Defined in

[speedybot.ts:792](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L792)

___

### errorCard

▸ **errorCard**(`title`, `message`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |
| `message` | `string` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[speedybot.ts:775](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L775)

___

### exact

▸ **exact**(`keyword`, `cb`): `void`

Performs a case-sensitive match to check if the input text exactly matches the specified keyword.
If there is a match, the provided middleware function is executed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keyword` | `string` | The keyword to match against the input text. |
| `cb` | `Middleware`<`AttachedData`\> | The middleware function to be executed if there is a match. |

#### Returns

`void`

#### Defined in

[speedybot.ts:203](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L203)

___

### extractFiledata

▸ `Private` **extractFiledata**(`res`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `res` | `StubbedRes`<`unknown`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `bytes` | `number` |
| `contentType` | `string` |
| `extension` | `string` |
| `name` | `string` |

#### Defined in

[speedybot.ts:1292](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L1292)

___

### fetchWebhooks

▸ **fetchWebhooks**(): `Promise`<{ `id`: `string` ; `name`: `string` ; `resource`: `string` ; `targetUrl`: `string`  }[]\>

Return abbreviated array of webhook data

#### Returns

`Promise`<{ `id`: `string` ; `name`: `string` ; `resource`: `string` ; `targetUrl`: `string`  }[]\>

#### Defined in

[speedybot.ts:905](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L905)

___

### fuzzyMatch

▸ **fuzzyMatch**(`candidate`, `options`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `candidate` | `string` |
| `options` | `string`[] |

#### Returns

`boolean`

#### Defined in

[speedybot.ts:1378](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L1378)

___

### generateFileName

▸ `Private` **generateFileName**(): `string`

#### Returns

`string`

#### Defined in

[speedybot.ts:1132](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L1132)

___

### getFile

▸ **getFile**(`url`, `opts?`): `Promise`<`SpeedyFile` & { `data`: `unknown`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `opts` | `Object` |
| `opts.responseType?` | ``"arraybuffer"`` \| ``"json"`` |

#### Returns

`Promise`<`SpeedyFile` & { `data`: `unknown`  }\>

#### Defined in

[speedybot.ts:1236](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L1236)

___

### getPerson

▸ **getPerson**(`personId`): `Promise`<`SelfData`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `personId` | `string` |

#### Returns

`Promise`<`SelfData`\>

#### Defined in

[speedybot.ts:1069](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L1069)

___

### getRecentRooms

▸ **getRecentRooms**(`limit?`): `Promise`<{ `id`: `string` ; `title`: `string` ; `type`: `string`  }[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `limit` | `number` | `100` |

#### Returns

`Promise`<{ `id`: `string` ; `title`: `string` ; `type`: `string`  }[]\>

#### Defined in

[speedybot.ts:935](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L935)

___

### getRoom

▸ **getRoom**(`roomId`): `Promise`<`Room_Details`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `roomId` | `string` |

#### Returns

`Promise`<`Room_Details`\>

#### Defined in

[speedybot.ts:1083](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L1083)

___

### getSecret

▸ **getSecret**(`key`): `undefined` \| `string` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `S` |

#### Returns

`undefined` \| `string` \| `number`

#### Defined in

[speedybot.ts:75](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L75)

___

### getSelf

▸ **getSelf**(`token?`): `Promise`<`SelfData`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token?` | `string` |

#### Returns

`Promise`<`SelfData`\>

#### Defined in

[speedybot.ts:1024](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L1024)

___

### getToken

▸ **getToken**(): `string`

#### Returns

`string`

#### Defined in

[speedybot.ts:105](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L105)

___

### getWebhooks

▸ **getWebhooks**(): `Promise`<{ `items`: `Webhook`[]  }\>

Return array of full webhook data

#### Returns

`Promise`<{ `items`: `Webhook`[]  }\>

#### Defined in

[speedybot.ts:887](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L887)

___

### insertStepToFront

▸ **insertStepToFront**(`middleware`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `middleware` | `Middleware`<`AttachedData`\> |

#### Returns

`void`

#### Defined in

[speedybot.ts:113](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L113)

___

### onCamera

▸ **onCamera**(`cb`, `formats?`): `void`

Shorthand-handler for files w/ image types

For use w/ vision + text prompting systems

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `cb` | `Middleware`<`AttachedData`\> | `undefined` |
| `formats` | `string`[] | `[]` |

#### Returns

`void`

#### Defined in

[speedybot.ts:183](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L183)

___

### onReject

▸ `Private` **onReject**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `SpeedyError` |

#### Returns

`void`

#### Defined in

[speedybot.ts:239](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L239)

___

### peekFile

▸ **peekFile**(`url`): `Promise`<`Omit`<`SpeedyFile`, ``"data"``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`<`Omit`<`SpeedyFile`, ``"data"``\>\>

#### Defined in

[speedybot.ts:1310](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L1310)

___

### pickRandom

▸ **pickRandom**<`P`\>(`list`): `P`

#### Type parameters

| Name |
| :------ |
| `P` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `P`[] |

#### Returns

`P`

#### Defined in

[speedybot.ts:120](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L120)

▸ **pickRandom**<`P`\>(`min`, `max`): `number`

#### Type parameters

| Name |
| :------ |
| `P` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |

#### Returns

`number`

#### Defined in

[speedybot.ts:121](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L121)

▸ **pickRandom**<`P`\>(`listOrMin`, `max?`): `number` \| `P`

#### Type parameters

| Name |
| :------ |
| `P` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `listOrMin` | `number` \| `P`[] |
| `max?` | `number` |

#### Returns

`number` \| `P`

#### Defined in

[speedybot.ts:122](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L122)

___

### rando

▸ **rando**(): `string`

Generate a random string of 11 characters (letters + numbers)

#### Returns

`string`

#### Defined in

[speedybot.ts:1139](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L1139)

___

### regex

▸ **regex**(`reg`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reg` | `RegExp` |
| `cb` | `Middleware`<`AttachedData`\> |

#### Returns

`void`

#### Defined in

[speedybot.ts:160](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L160)

___

### replyTo

▸ **replyTo**(`param1`, `param2`, `param3?`): `Promise`<`MessageResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `param1` | `string` \| `MessageResponse` |
| `param2` | `undefined` \| `string` |
| `param3?` | `string` |

#### Returns

`Promise`<`MessageResponse`\>

#### Defined in

[speedybot.ts:812](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L812)

___

### runMiddleware

▸ **runMiddleware**(`env`, `startingCtx?`): `Promise`<`boolean`\>

Main workhorse that takes in a webhook and passes it through provided flows

```ts
import

```

#### Parameters

| Name | Type |
| :------ | :------ |
| `env` | `ENVELOPES` |
| `startingCtx` | `Object` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[speedybot.ts:260](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L260)

___

### sendFileTo

▸ **sendFileTo**(`destination`, `data`, `extensionOrFileName`, `textLabel?`, `contentType?`): `Promise`<`MessageResponse`\>

Send a file to a destination-- a downloadable file will be generated

At minimum, provide the file data & desired file extension

```ts

import { SpeedyBot } from 'speedybot'
const Bot = new SpeedyBot('__REPLACE__ME__')
const myData = { a: 1, b: 2, c: [1,2,3,'hello', 'bonjour']}
$bot.sendFileTo('target@email.com', myData, 'json')

```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `destination` | `string` \| { `personId`: `string`  } | `undefined` |
| `data` | `any` | `undefined` |
| `extensionOrFileName` | `string` | `undefined` |
| `textLabel` | `string` | `""` |
| `contentType` | ``null`` \| `string` | `null` |

#### Returns

`Promise`<`MessageResponse`\>

#### Defined in

[speedybot.ts:1180](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L1180)

___

### sendTo

▸ **sendTo**(`emailOrRoomId`, `message`): `Promise`<`MessageResponse`\>

Send a message to a room, email, or personId

```ts

import { SpeedyBot } from 'speedybot'
// 1) Initialize your bot w/ config
const Bot = new SpeedyBot({ token: '__REPLACE__ME__'});

Bot.sendTo('targetEmail@account.com', '**here is a message**')
Bot.sendTo('aaa-bbb-ccc-ddd-eee-fff', '**Here is a message to a room**')
Bot.sendTo({toPersonId: 'xxxyyyzzz', '**here is a message**')

```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emailOrRoomId` | `string` \| { `personId`: `string`  } |
| `message` | `Message` |

#### Returns

`Promise`<`MessageResponse`\>

#### Defined in

[speedybot.ts:624](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L624)

___

### setFallbackText

▸ **setFallbackText**(`t`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `string` |

#### Returns

`void`

#### Defined in

[speedybot.ts:109](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L109)

___

### setToken

▸ **setToken**(`token`): [`SpeedyBot`](SpeedyBot.md)<`S`\>

Sets the token to transact with APIs (needed to send messages, receive webhooks, files, etc)

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

[`SpeedyBot`](SpeedyBot.md)<`S`\>

#### Defined in

[speedybot.ts:100](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L100)

___

### stashCard

▸ **stashCard**(`secret`, `message?`, `unwrapLabel?`, `destroyLabel?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `secret` | `string` \| `number` | `undefined` |
| `message?` | `string` | `undefined` |
| `unwrapLabel` | `string` | `CONSTANTS.unwrapLabel` |
| `destroyLabel` | `string` | `CONSTANTS.destroyLabel` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[speedybot.ts:764](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L764)

___

### successCard

▸ **successCard**(`title`, `message`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |
| `message` | `string` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[speedybot.ts:782](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L782)

___

### validateToken

▸ **validateToken**(`token`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[speedybot.ts:667](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L667)

___

### whoAmI

▸ **whoAmI**(): `Promise`<`SelfData` & { `webhooks`: `Webhook`[]  }\>

#### Returns

`Promise`<`SelfData` & { `webhooks`: `Webhook`[]  }\>

#### Defined in

[speedybot.ts:1038](https://github.com/valgaze/speedybot/blob/4524beb/src/speedybot.ts#L1038)
