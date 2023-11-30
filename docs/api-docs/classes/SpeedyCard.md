[speedybot](../README.md) / [Exports](../modules.md) / SpeedyCard

# Class: SpeedyCard

Card Builder

This is a utility that makes it convenient to build + pass data to Adaptive Cards

Note: This extends Adaptive Card functionality to include "chips" which when tapped will trigger your text handling logic

You can add "pickers" for date, time, select (and multi-select)

## Table of contents

### Constructors

- [constructor](SpeedyCard.md#constructor)

### Properties

- [tools](SpeedyCard.md#tools)

### Methods

- [addAction](SpeedyCard.md#addaction)
- [addBlock](SpeedyCard.md#addblock)
- [addButton](SpeedyCard.md#addbutton)
- [addChip](SpeedyCard.md#addchip)
- [addChips](SpeedyCard.md#addchips)
- [addDeleteButton](SpeedyCard.md#adddeletebutton)
- [addHeader](SpeedyCard.md#addheader)
- [addImage](SpeedyCard.md#addimage)
- [addLink](SpeedyCard.md#addlink)
- [addLinkButton](SpeedyCard.md#addlinkbutton)
- [addMultiSelect](SpeedyCard.md#addmultiselect)
- [addPickerDate](SpeedyCard.md#addpickerdate)
- [addPickerDropdown](SpeedyCard.md#addpickerdropdown)
- [addPickerTime](SpeedyCard.md#addpickertime)
- [addSingleSelect](SpeedyCard.md#addsingleselect)
- [addSubcard](SpeedyCard.md#addsubcard)
- [addSubtitle](SpeedyCard.md#addsubtitle)
- [addTable](SpeedyCard.md#addtable)
- [addText](SpeedyCard.md#addtext)
- [addTextInput](SpeedyCard.md#addtextinput)
- [addTextarea](SpeedyCard.md#addtextarea)
- [addTitle](SpeedyCard.md#addtitle)
- [attachData](SpeedyCard.md#attachdata)
- [build](SpeedyCard.md#build)
- [needsSubmit](SpeedyCard.md#needssubmit)
- [setBackgroundImage](SpeedyCard.md#setbackgroundimage)
- [setSubmitButtonTitle](SpeedyCard.md#setsubmitbuttontitle)
- [survey](SpeedyCard.md#survey)

## Constructors

### constructor

• **new SpeedyCard**()

#### Defined in

[cards.ts:281](https://github.com/valgaze/speedybot/blob/ef3a39a/src/cards.ts#L281)

## Properties

### tools

• **tools**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `checkColor` | (`candidate`: `string`) => `BaseColors` |

#### Defined in

[cards.ts:217](https://github.com/valgaze/speedybot/blob/ef3a39a/src/cards.ts#L217)

## Methods

### addAction

▸ `Private` **addAction**(`a`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |

#### Returns

`void`

#### Defined in

[cards.ts:734](https://github.com/valgaze/speedybot/blob/ef3a39a/src/cards.ts#L734)

___

### addBlock

▸ **addBlock**(`content`, `config?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` \| [`SpeedyCard`](SpeedyCard.md) |
| `config` | `Object` |
| `config.backgroundColor?` | `ColorChoices` |
| `config.separator?` | `boolean` |
| `config.vertAlign?` | `VAlignChoices` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:507](https://github.com/valgaze/speedybot/blob/ef3a39a/src/cards.ts#L507)

___

### addButton

▸ **addButton**(`label`, `id?`, `attachedData?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `label` | `string` | `undefined` |
| `id` | `string` | `"button_result"` |
| `attachedData` | `string` \| { `[key: string]`: `number` \| `string` \| `boolean`;  } | `{}` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:749](https://github.com/valgaze/speedybot/blob/ef3a39a/src/cards.ts#L749)

___

### addChip

▸ **addChip**(`payload`, `id?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `payload` | `string` \| { `title`: `string` ; `value?`: `string`  } | `undefined` |
| `id` | `string` | `CONSTANTS.CHIP_LABEL` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:315](https://github.com/valgaze/speedybot/blob/ef3a39a/src/cards.ts#L315)

___

### addChips

▸ **addChips**(`chips`, `id?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `chips` | (`string` \| { `title`: `string` ; `value?`: `string`  })[] | `undefined` |
| `id` | `string` | `CONSTANTS.CHIP_LABEL` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:322](https://github.com/valgaze/speedybot/blob/ef3a39a/src/cards.ts#L322)

___

### addDeleteButton

▸ **addDeleteButton**(`label?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `label` | `string` | `CONSTANTS.destroyLabel` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:741](https://github.com/valgaze/speedybot/blob/ef3a39a/src/cards.ts#L741)

___

### addHeader

▸ **addHeader**(`text`, `config?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `config` | `HeaderConfig` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:455](https://github.com/valgaze/speedybot/blob/ef3a39a/src/cards.ts#L455)

___

### addImage

▸ **addImage**(`url`, `config?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config` | `Object` |
| `config.align?` | `AlignmentChoices` |
| `config.size?` | `SizeChoices` |
| `config.targetURL?` | `string` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:358](https://github.com/valgaze/speedybot/blob/ef3a39a/src/cards.ts#L358)

___

### addLink

▸ **addLink**(`url`, `label?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `label?` | `string` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:388](https://github.com/valgaze/speedybot/blob/ef3a39a/src/cards.ts#L388)

___

### addLinkButton

▸ **addLinkButton**(`url`, `label?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `label?` | `string` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:392](https://github.com/valgaze/speedybot/blob/ef3a39a/src/cards.ts#L392)

___

### addMultiSelect

▸ **addMultiSelect**(`choices`, `id?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `choices` | (`string` \| `number`)[] \| { `title`: `string` ; `value`: `string`  }[] | `undefined` |
| `id` | `string` | `"addMultiSelect_result"` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:598](https://github.com/valgaze/speedybot/blob/ef3a39a/src/cards.ts#L598)

___

### addPickerDate

▸ **addPickerDate**(`textLabel`, `id?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `textLabel` | `string` | `undefined` |
| `id` | `string` | `"addPickerDate_result"` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:646](https://github.com/valgaze/speedybot/blob/ef3a39a/src/cards.ts#L646)

___

### addPickerDropdown

▸ **addPickerDropdown**(`choices`, `id?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `choices` | (`string` \| `number` \| { `title`: `string` ; `value`: `string` \| `number`  })[] | `undefined` |
| `id` | `string` | `SpeedyCardId.dropdown` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:561](https://github.com/valgaze/speedybot/blob/ef3a39a/src/cards.ts#L561)

___

### addPickerTime

▸ **addPickerTime**(`textLabel`, `id?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `textLabel` | `string` | `undefined` |
| `id` | `string` | `"addPickerTime_result"` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:658](https://github.com/valgaze/speedybot/blob/ef3a39a/src/cards.ts#L658)

___

### addSingleSelect

▸ **addSingleSelect**(`choices`, `id?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `choices` | (`string` \| `number`)[] \| { `title`: `string` ; `value`: `string`  }[] | `undefined` |
| `id` | `string` | `"addSingleSelectresult"` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:588](https://github.com/valgaze/speedybot/blob/ef3a39a/src/cards.ts#L588)

___

### addSubcard

▸ **addSubcard**(`card`, `textLabel?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `card` | `Card` \| [`SpeedyCard`](SpeedyCard.md) | `undefined` |
| `textLabel` | `string` | `""` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:547](https://github.com/valgaze/speedybot/blob/ef3a39a/src/cards.ts#L547)

___

### addSubtitle

▸ **addSubtitle**(`subTitle`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subTitle` | `string` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:288](https://github.com/valgaze/speedybot/blob/ef3a39a/src/cards.ts#L288)

___

### addTable

▸ **addTable**(`input`, `separator?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `input` | (`string` \| `number`)[][] \| { `[key: string]`: `string` \| `number`;  } | `undefined` |
| `separator` | `boolean` | `false` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:293](https://github.com/valgaze/speedybot/blob/ef3a39a/src/cards.ts#L293)

___

### addText

▸ **addText**(`text`, `config?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `config` | `Object` |
| `config.align?` | `AlignmentChoices` |
| `config.backgroundColor?` | `ColorChoices` |
| `config.bold?` | `boolean` |
| `config.color?` | `ColorChoices` |
| `config.size?` | `SizeChoices` |
| `config.vertAlign?` | `VAlignChoices` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:406](https://github.com/valgaze/speedybot/blob/ef3a39a/src/cards.ts#L406)

___

### addTextInput

▸ **addTextInput**(`placeholder`, `id?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `placeholder` | `string` | `undefined` |
| `id` | `string` | `"addTextInput_result"` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:671](https://github.com/valgaze/speedybot/blob/ef3a39a/src/cards.ts#L671)

___

### addTextarea

▸ **addTextarea**(`placeholder`, `id?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `placeholder` | `string` | `undefined` |
| `id` | `string` | `"addTextarea_result"` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:684](https://github.com/valgaze/speedybot/blob/ef3a39a/src/cards.ts#L684)

___

### addTitle

▸ **addTitle**(`title`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:283](https://github.com/valgaze/speedybot/blob/ef3a39a/src/cards.ts#L283)

___

### attachData

▸ **attachData**(`payload`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `AttachedData` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:709](https://github.com/valgaze/speedybot/blob/ef3a39a/src/cards.ts#L709)

___

### build

▸ **build**(): `any`

#### Returns

`any`

#### Defined in

[cards.ts:803](https://github.com/valgaze/speedybot/blob/ef3a39a/src/cards.ts#L803)

___

### needsSubmit

▸ **needsSubmit**(): `boolean`

#### Returns

`boolean`

#### Defined in

[cards.ts:263](https://github.com/valgaze/speedybot/blob/ef3a39a/src/cards.ts#L263)

___

### setBackgroundImage

▸ **setBackgroundImage**(`url`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:698](https://github.com/valgaze/speedybot/blob/ef3a39a/src/cards.ts#L698)

___

### setSubmitButtonTitle

▸ **setSubmitButtonTitle**(`label`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:703](https://github.com/valgaze/speedybot/blob/ef3a39a/src/cards.ts#L703)

___

### survey

▸ **survey**(`questions`, `title?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `questions` | `SurveyQuestion`[] | `undefined` |
| `title` | `string` | `"📝 Survey"` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:765](https://github.com/valgaze/speedybot/blob/ef3a39a/src/cards.ts#L765)
