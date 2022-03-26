import test from "ava";
import {SpeedyCard} from './../src'


test("Sanity test", (t) => {
  const expected = {
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "type": "AdaptiveCard",
    "version": "1.0",
    "body": [{
      "type": "TextBlock",
      "text": "System is 👍",
      "weight": "Bolder",
      "size": "Large",
      "wrap": true
    }]
  }
  const cardPayload = new SpeedyCard().setTitle('System is 👍')
 

  const actual = cardPayload.render()
  t.deepEqual(actual, expected);
});

test("Kitchen sink", (t) => {
    const expected = {
      "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
      "type": "AdaptiveCard",
      "version": "1.0",
      "body": [
        {
          "type": "TextBlock",
          "text": "System is 👍",
          "weight": "Bolder",
          "size": "Large",
          "wrap": true
        },
        {
          "type": "TextBlock",
          "text": "If you see this card, everything is working",
          "size": "Medium",
          "isSubtle": true,
          "wrap": true,
          "weight": "Lighter"
        },
        {
          "type": "FactSet",
          "facts": [
            {
              "title": "Bot's Uptime",
              "value": "12.492006583s"
            }
          ]
        },
        {
          "type": "Image",
          "url": "https://i.imgur.com/SW78JRd.jpg",
          "horizontalAlignment": "Center",
          "size": "Large"
        },
        {
          "type": "Input.Text",
          "placeholder": "What's on your mind?",
          "id": "inputData"
        }
      ],
      "actions": [
        {
          "type": "Action.Submit",
          "title": "Submit",
          "data": {
            "mySpecialData": {
              "a": 1,
              "b": 2
            }
          }
        }
      ]
    }
    const cardPayload = new SpeedyCard().setTitle('System is 👍')
    .setSubtitle('If you see this card, everything is working')
    .setImage('https://i.imgur.com/SW78JRd.jpg')
    .setInput(`What's on your mind?`)
    .setTable([["Bot's Uptime", `12.492006583s`]])
    .setData({mySpecialData: { a:1,b:2}})

		const actual = cardPayload.render()
		t.deepEqual(actual, expected);
});

test("Date and Time Pickers", (t) => {
  const expected = { $schema: 'http://adaptivecards.io/schemas/adaptive-card.json', type: 'AdaptiveCard', version: '1.0', body: [ { type: 'TextBlock', text: 'xxx', weight: 'Bolder', size: 'Large', wrap: true }, { type: 'TextBlock', text: 'Hi subtlte', size: 'Medium', isSubtle: true, wrap: true, weight: 'Lighter' }, { type: 'Input.ChoiceSet', id: 'selectedChoice', value: '0', isMultiSelect: false, isVisible: true, choices: [ { title: 'a', value: 'a' }, { title: 'b', value: 'b' }, { title: 'c', value: 'c' } ] }, { type: 'TextBlock', text: 'Choose yer date', wrap: true }, { id: 'selectedDate', type: 'Input.Date' }, { type: 'TextBlock', text: 'Select a time', wrap: true }, { id: 'selectedTime', type: 'Input.Time' } ], actions: [ { type: 'Action.Submit', title: 'Submit', data: { a: 1 } } ] }

  const myCard = new SpeedyCard().setTitle('xxx')
                                  .setSubtitle('Hi subtlte')
                                  .setData({a:1})
                                  .setTime('selectedTime')
                                  .setDate('selectedDate', 'Choose yer date')
                                  .setChoices(['a','b','c'], {id: 'selectedChoice'})

  const actual = myCard.render()
  t.deepEqual(actual, expected);
});
