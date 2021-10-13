## Utilities and Helper Functions

## SpeedyCard

- Getting started with AdaptiveCards (https://developer.webex.com/docs/api/guides/cards) can be a bit cumbersome and error-prone

- SpeedyCard is a limited subset of AdaptiveCards with basic features with a focus on user interaction & simplicity (title, text, input box, menu-select, no "collapsable" sections, etc)

- Inspired a bit by SwiftUI: https://developer.apple.com/xcode/swiftui/

- Make sure you call ```.render()``` and use the ```.sendCard``` method

<details><summary>Before/After</summary>

## Before 

```ts
const cardJson = {
	"$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
	"type": "AdaptiveCard",
	"version": "1.0",
	"body": [{
		"type": "TextBlock",
		"text": "System is 👍",
		"weight": "Bolder",
		"size": "Large",
		"wrap": true
	}, {
		"type": "TextBlock",
		"text": "If you see this card, everything is working",
		"size": "Small",
		"isSubtle": true,
		"wrap": true,
		"weight": "Lighter"
	}, {
		"type": "Image",
		"url": "https://i.imgur.com/SW78JRd.jpg",
		"horizontalAlignment": "Center",
		"size": "Large"
	}, {
		"type": "Input.Text",
		"placeholder": "What's on your mind?",
		"id": "inputData"
	}],
	"actions": [{
		"type": "Action.Submit",
		"title": "Submit",
		"data": {
			"cardType": "inputForm"
		}
	}, {
		"type": "Action.OpenUrl",
		"title": "Take a moment to celebrate",
		"url": "https://www.youtube.com/watch?v=3GwjfUFyY6M"
	}]
}

bot.sendCard(cardJson, 'Your client does not currently support Adaptive Cards')
```

## After

```ts
const cardJson = new SpeedyCard().setTitle('System is 👍', {st})
                                .setSubtitle('If you see this card, everything is working')
                                .setImage('https://i.imgur.com/SW78JRd.jpg')
                                .setInput(`What's on your mind?`)
                                .setUrl('https://www.youtube.com/watch?v=3GwjfUFyY6M', 'Take a moment to celebrate')
								.setData({mySpecialData: {a:1, b:2}})

bot.sendCard(cardJson.render(), 'Your client does not currently support Adaptive Cards')
```

</details>


```ts
import { SpeedyCard } from 'speedybot' 
export const handlers = [{
    keyword: ['go!'],
    handler(bot, trigger) {
        // Adapative Card: https://developer.webex.com/docs/api/guides/cards
        const myCard = new SpeedyCard().setTitle('System is 👍', {st})
                                       .setSubtitle('If you see this card, everything is working')
                                       .setImage('https://i.imgur.com/SW78JRd.jpg')
                                       .setInput(`What's on your mind?`)
                                       .setUrl('https://www.youtube.com/watch?v=3GwjfUFyY6M', 'Take a moment to celebrate')
									   .setChoices(['Abraham Lincoln','Adlai Stevenson','Connie Rice', 'Monty'], {id:})
									   .setTable([[`Bot's Time`, new Date().toTimeString()], ['Bot running duration', process.uptime()]])
        bot.sendCard(myCard.render(), 'Your client does not currently support Adaptive Cards')

    }
    helpText: 'A demo handler invoked when the user types go!'
},
{
    keyword: '<@submit>',
    handler(bot, trigger) {
        bot.say(`Submission received! You sent us ${JSON.stringify(trigger.attachmentAction.inputs)}`)
    },
    helpText: 'Special handler that fires when data is submitted'
}

```

## Storage

- Lightweight helper for storage, scoped to user

- Get operations don't error if none found, return null instead                                               

```ts
import { Storage } from 'speedybot'

const handler = {
    keyword: ['go!'],
    async handler(bot, trigger) {
        const val = await Storage.get('secret_code')
        if (val) {
            bot.say(`Your stored value is ${val}`)
        } else {
            const secretCode = Math.random().toString(36).slice(2)
            bot.say(`No stored value detected, saving '${secretCode}' now...`)
            await Storage.get('secret_code', secretCode)
        }
    }
    helpText: 'A demo handler invoked when the user types go!'
}
```


## fillTemplate & pickRandom

- Variation in responses is a low-investment, high-payoff way to make conversation agents more appealing and less robotic

- pickRandom does exactly what it sounds like-- randomly return an item from a list

- fillTemplate will randomly pick an item from a list and replace ```$[template_name]``` with a specified value

```ts
import { fillTemplate } from 'speedybot'

const handler = {
    keyword: ['go!'],
    async handler(bot, trigger) {
		const phrases = ["Hey $[name], how's it going? Here is one $[flavor] ice cream", "Hiya $[name], here's your $[flavor]", "Here's one $[flavor] for ya, $[name]"]
		const myTemplate = {
			name: trigger.person.displayName,
			flavor: 'mint'
		}

		bot.say(fillTemplate(phrases, myTemplate))

    }
    helpText: 'A demo handler invoked when the user types go!'
}
```