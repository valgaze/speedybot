/**
 * WARNING: Very much work-in-progress
 * 
 * Concept: make zero-knowledge templates for adaptive cards w/
 * good default styling
 * ex. 
 * SimpleCard
 * Card with chips (row of buttons)
 * Multiselect
 * 
 */

export interface EasyCardPayload {
	title?: string;
	url: string;
	text?: string;
	buttonLabel?: string;
	image?: string;
	input?: {
		placeholder: string;
	}
	choices?: string[];
}

export interface EasyCardSpec {
	$schema: string;
	type: string;
	version: string;
	body: any;
	actions?: any;
}

export const easyCard = (easyCardPayload) => {
	const payload: EasyCardSpec = {
		"$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
		"type": "AdaptiveCard",
		"version": "1.0",
		"body": [
			{
				"type": "TextBlock",
				"size": "Medium",
				"weight": "Bolder",
				"text": `${easyCardPayload.title}`
			},
			{
				"type": "RichTextBlock",
				"inlines": [
					{
						"type": "TextRun",
						"text": `${easyCardPayload.text ? easyCardPayload.text : ''}`
					}
				]
			}
		],

	}

	if (easyCardPayload.image) {
		const imagePayload = {
			"type": "Image",
			"url": `${easyCardPayload.image}`,
			"horizontalAlignment": "Center",
			"size": "large"
		}
		payload.body.push(imagePayload)
	}

	if (easyCardPayload.url) {
		const buttonPayload = {
			"type": "Action.OpenUrl",
			"title": `${easyCardPayload.buttonLabel ? easyCardPayload.buttonLabel : 'Go'}`,
			"url": `${easyCardPayload.url}`,
			"style": "positive"
		}
		payload.actions = [buttonPayload]
	}

	if (easyCardPayload.input) {
		const { placeholder = "Submit" } = easyCardPayload.input
		const InputPayload = {
			"type": "Input.Text",
			"id": "inputData",
			"placeholder": placeholder
		}
		payload.body.push(InputPayload)
	}

	if (easyCardPayload.choices && easyCardPayload.choices.length) {
		const choices = easyCardPayload.choices.map((choice: string, idx) => {
			return {
				title: choice,
				value: String(idx)
			}
		})
		const choicePayload = {
			"type": "Input.ChoiceSet",
			"id": "choiceSelect",
			"value": "0",
			"isMultiSelect": true,
			"isVisible": true,
			choices,
		}
		payload.body.push(choicePayload)
	}

	if (easyCardPayload.input || easyCardPayload.choices) {
		const submitButton = {
			"type": "Action.Submit",
			"title": "Submit",
			"data": { "cardType": "inputForm" }
		}
		payload.actions.push(submitButton)
	}

	return payload;
}


export interface ChipCardPayload {
	title?: string;
	options: string[];
}

export const easyChipCard = (config: ChipCardPayload) => {
	interface Chip {
		type: string;
		title: string;
		data: any;
	}
	interface ChipCard {
		$schema: string;
		type: string;
		version: string;
		body: any;
		actions: Chip[];
	}


	const payload: ChipCard = {
		"type": "AdaptiveCard",
		"body": [],
		actions: [],
		"$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
		"version": "1.2"
	}

	if (config.options.length) {
		const { options } = config
		options.forEach(option => {
			const chip = {
				"type": "Action.Submit",
				"title": option,
				"data": {
					"chip_action": option
				}
			}
			payload.actions.push(chip)
		})
	}
	return payload;
}

export interface EasyKeyValueCardPayload {
	options: string[][],
	title?: string;
}
export const easyKeyValCard = (config: EasyKeyValueCardPayload) => {
	interface KeyValCard {
		$schema: string;
		type: string;
		version: string;
		body: any[];
		actions?: [];
	}

	const payload: KeyValCard = {
		"type": "AdaptiveCard",
		"body": [
			{
				"type": "ColumnSet",
				"columns": [],
				"spacing": "Padding",
				"horizontalAlignment": "Center"
			}
		],
		"$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
		"version": "1.2"
	}

	if (config.options.length) {
		const columnsData: { type: string, width: number, items: any[] }[] = [
			{
				"type": "Column",
				"width": 35,
				"items": []
			},
			{
				"type": "Column",
				"width": 65,
				"items": []
			}
		]
		const buildLabel = (label: string) => {
			return {
				"type": "TextBlock",
				"text": label,
				"weight": "Bolder",
				"color": "Light",
				"spacing": "Small"
			}
		}
		const buildValue = (value: string) => {
			return {
				"type": "TextBlock",
				"text": value,
				"color": "Light",
				"weight": "Lighter",
				"spacing": "Small"
			}
		}
		config.options.forEach(([label, value], i) => {
			columnsData[0].items.push(buildLabel(label))
			columnsData[1].items.push(buildValue(value))
		})
		payload.body[0].columns = columnsData
	}
	return payload
}

// Kitchen sink example + inputs
export const CardSample = {
	"$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
	"type": "AdaptiveCard",
	"version": "1.0",
	"body": [
		{
			"type": "ColumnSet",
			"columns": [
				{
					"type": "Column",
					"width": 2,
					"items": [
						{
							"type": "TextBlock",
							"text": "Tell us about yourself",
							"weight": "bolder",
							"size": "medium"
						},
						{
							"type": "TextBlock",
							"text": "We just need a few more details to get you booked for the trip of a lifetime!",
							"isSubtle": true,
							"wrap": true
						},
						{
							"type": "TextBlock",
							"text": "Don't worry, we'll never share or sell your information.",
							"isSubtle": true,
							"wrap": true,
							"size": "small"
						},
						{
							"type": "TextBlock",
							"text": "Your name",
							"wrap": true
						},
						{
							"type": "Input.Text",
							"id": "myName",
							"placeholder": "Last, First"
						},
						{
							"type": "TextBlock",
							"text": "Your email",
							"wrap": true
						},
						{
							"type": "Input.Text",
							"id": "myEmail",
							"placeholder": "youremail@example.com",
							"style": "email"
						},
						{
							"type": "TextBlock",
							"text": "Phone Number"
						},
						{
							"type": "Input.Text",
							"id": "myTel",
							"placeholder": "xxx.xxx.xxxx",
							"style": "tel"
						}
					]
				},
				{
					"type": "Column",
					"width": 1,
					"items": [
						{
							"type": "Image",
							"url": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Diver_Silhouette%2C_Great_Barrier_Reef.jpg",
							"size": "auto"
						}
					]
				}
			]
		}
	],
	"actions": [
		{
			"type": "Action.Submit",
			"title": "Submit",
			"data": { "cardType": "inputForm" }
		}
	]
}