import test from "tape";
import { SpeedyCard } from './../src'

test("setup", function (t) {
  t.end();
});

test("Kitchen sink SpeedyCard", (t) => {
    const expected = { $schema: 'http://adaptivecards.io/schemas/adaptive-card.json', type: 'AdaptiveCard', version: '1.0', body: [ { type: 'TextBlock', text: 'Do you want a snack', weight: 'Bolder', size: 'Large', wrap: true }, { type: 'Input.Text', placeholder: 'I am a placeholder', id: 'inputData' } ], actions: [ { type: 'Action.Submit', title: 'no', data: { chip_action: 'no' } }, { type: 'Action.Submit', title: 'Sure', data: { chip_action: 'yes' } }, { type: 'Action.Submit', title: 'Submit', data: {} } ] }
		const actual = new SpeedyCard().setTitle('Do you want a snack')
                                   .setChips(['no', { keyword: 'yes', label: 'Sure'}])
                                   .setInput('I am a placeholder')
                                   .render()
		
    // console.log(JSON.stringify(actual, null, 2))
    t.deepEqual(actual, expected);
    t.end();
});

test("teardown", function (t) {
  t.end();
});