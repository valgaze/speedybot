
export default {
	keyword: 'sendcard',
	handler(bot, trigger) {
		bot.say('One card on the way...')

		// Adapative Card: https://developer.webex.com/docs/api/guides/cards
		const cardPayload = {
			"$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
			"type": "AdaptiveCard",
			"version": "1.0",
			"body": [{
				"type": "TextBlock",
				"size": "Medium",
				"weight": "Bolder",
				"text": "System is 👍"
			}, {
				"type": "RichTextBlock",
				"inlines": [{
					"type": "TextRun",
					"text": "If you see this card, everything is working"
				}]
			}, {
				"type": "Image",
				"url": "https://i.imgur.com/SW78JRd.jpg",
				"horizontalAlignment": "Center",
				"size": "large"
			}, {
				"type": "Input.Text",
				"id": "inputData",
				"placeholder": "What's on your mind?"
			}],
			"actions": [{
				"type": "Action.OpenUrl",
				"title": "Take a moment to celebrate",
				"url": "https://www.youtube.com/watch?v=3GwjfUFyY6M",
				"style": "positive"
			}, {
				"type": "Action.Submit",
				"title": "Submit",
				"data": {
					"cardType": "inputForm"
				}
			}]
		}

		bot.sendCard(cardPayload, 'Your client does not currently support Adaptive Cards :(')
	},
	helpText: 'Sends an Adaptive Card with an input field to the user'
}