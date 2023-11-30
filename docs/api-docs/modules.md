[speedybot](README.md) / Exports

# speedybot

## Table of contents

### Classes

- [SpeedyBot](classes/SpeedyBot.md)
- [SpeedyCard](classes/SpeedyCard.md)

### Type Aliases

- [$Magic](modules.md#$magic)

## Type Aliases

### $Magic

Ƭ **$Magic**<`T`\>: { `buildDMLink`: (`target`: `string`, `label`: `string`) => `string` ; `buildDataSnippet`: (`data`: `any`, `type?`: `string`) => `string` ; `buildLink`: (`destinationURL`: `string`, `label?`: `string`, `noBold?`: `boolean`) => `string` ; `card`: (`config?`: `Partial`<`AbbreviatedSpeedyCard`\>) => [`SpeedyCard`](classes/SpeedyCard.md) ; `clearScreen`: (`c?`: `number`) => `Promise`<`MessageResponse`\> ; `debug`: () => `DebugInfo` ; `edit`: (`m`: `MessageResponse`, `e`: `string`) => `Promise`<`MessageResponse`\> ; `fillTemplate`: (`utterances`: `string`[], `template`: { `[key: string]`: `string` \| `number`;  }) => `string` ; `getFile`: (`url`: `string`, `opts?`: { `responseType?`: ``"arraybuffer"`` \| ``"json"``  }) => `Promise`<{ `contentType`: `string` ; `extension`: `string` ; `name`: `string` ; `url`: `string` ; `getData`: <T\>() => `Promise`<`T`\>  }\> ; `pickRandom`: <P\>(`list`: `P`[]) => `P`<P\>(`min`: `number`, `max`: `number`) => `number`<P\>(`listOrMin`: `number` \| `P`[], `max?`: `number`) => `number` \| `P` ; `reply`: (`message`: `string`) => `Promise`<`MessageResponse`\> ; `send`: (`m`: `Message`) => `Promise`<`MessageResponse`\> ; `sendFile`: <T\>(`data`: `T`, `fileExtension`: `string`) => `Promise`<`MessageResponse`\> ; `thread`: (`threadData`: [`string` \| [`SpeedyCard`](classes/SpeedyCard.md), ...string[]] & { `length`: ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` \| ``6``  }) => `any`  } & `IncomingItem`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `AttachedData` |

#### Defined in

[types.ts:121](https://github.com/valgaze/speedybot/blob/ef3a39a/src/types.ts#L121)
