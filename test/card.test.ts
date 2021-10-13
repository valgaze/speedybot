import test from "tape";
import {SpeedyCard} from './../src'

test("setup", function (t) {
  t.end();
});

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
  t.end();
});

test("Kitchen sink", (t) => {
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
      }, {
        "type": "TextBlock",
        "text": "If you see this card, everything is working",
        "size": "Small",
        "isSubtle": true,
        "wrap": true,
        "weight": "Lighter"
      }, {
        "type": "FactSet",
        "facts": [{
          "title": "Bot's Uptime",
          "value": "12.492006583s"
        }]
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
          "mySpecialData": {
            "a": 1,
            "b": 2
          }
        }
      }]
    }

    const cardPayload = new SpeedyCard().setTitle('System is 👍')
    .setSubtitle('If you see this card, everything is working')
    .setImage('https://i.imgur.com/SW78JRd.jpg')
    .setInput(`What's on your mind?`)
    .setTable([["Bot's Uptime", `12.492006583s`]])
    .setData({mySpecialData: { a:1,b:2}})

		const actual = cardPayload.render()
		t.deepEqual(actual, expected);
    t.end();
});

test("teardown", function (t) {
  t.end();
});