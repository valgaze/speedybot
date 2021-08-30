export interface EasyCardPayload {
	title?: string;
	url: string;
	text?:string;
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
			"size":"large"
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
		const { placeholder="Submit" } = easyCardPayload.input
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
		const submitButton = 	{
			"type": "Action.Submit",
			"title": "Submit",
			"data": { "cardType": "inputForm" }
		}
		payload.actions.push(submitButton)
	}

	return payload;
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


const payload = {
	title: 'System is 👍',
	text: 'If you see this card, everything is working',
	image: 'https://i.imgur.com/SW78JRd.jpg',
	buttonLabel: `Take a moment to celebrate`,
	url: `https://www.youtube.com/watch?v=3GwjfUFyY6M`,
	input: {
		placeholder: `What's on your mind?`
	}		
}
console.log(JSON.stringify(easyCard(payload)))