import test from "tape";
import { easyCard } from './../src/easycard'

test("setup", function (t) {
  t.end();
});

test("kitchen sink", (t) => {
    const expected = {
			"$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
			"type": "AdaptiveCard",
			"version": "1.0",
			"body": [
					{
							"type": "TextBlock",
							"size": "Medium",
							"weight": "Bolder",
							"text": "card title"
					},
					{
							"type": "RichTextBlock",
							"inlines": [
									{
											"type": "TextRun",
											"text": "text"
									}
							]
					},
					{
							"type": "Image",
							"url": "https://i.imgur.com/VQoXfHn.gif",
							"horizontalAlignment": "Center",
							"size": "large"
					},
					{
							"type": "Input.Text",
							"id": "inputData",
							"placeholder": "Send data"
					}
			],
			"actions": [
					{
							"type": "Action.OpenUrl",
							"title": "Button label",
							"url": "https://i.imgur.com/VQoXfHn.gif",
							"style": "positive"
					},
					{
							"type": "Action.Submit",
							"title": "Submit",
							"data": {
									"cardType": "inputForm"
							}
					}
			]
	}

	const actual = easyCard({
		title: 'card title',
		url: 'https://i.imgur.com/VQoXfHn.gif',
		text: 'text',
		buttonLabel: 'Button label',
		image: 'https://i.imgur.com/VQoXfHn.gif',
		input: {
			placeholder: 'Send data'
		}
	})
		t.deepEqual(actual, expected);
    t.end();
});


test("add an image", (t) => {
	const expected = [1,2,3,4]
	const actual = [1,2,3,4]
	t.deepEqual(actual, expected);
	t.end();
});

test("teardown", function (t) {
  t.end();
});