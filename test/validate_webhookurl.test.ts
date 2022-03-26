import test from "ava";
import { ValidatewebhookUrl } from './../src/helpers'


// ex. good: https://123-456-789.ngrok.io/webhookroute
// ex. bad: https://123-456-789.ngrok.io/
// ex. bad: https://123-456-789.ngrok.io
test("Should return true if valid", (t) => {
    const webhookUrl = 'https://123-456-789.ngrok.io/webhookroute'
    const expected = true
		const actual = ValidatewebhookUrl(webhookUrl)
		t.deepEqual(actual, expected);
});

test("Should throw if no ending path", (t) => {
  const webhookUrl = 'https://123-456-789.ngrok.io'
  try {
    ValidatewebhookUrl(webhookUrl)
    t.fail('Should throw error');
  } catch (e) {
    t.pass()
  }
});


test("Should throw if no ending path, ends in slash", (t) => {
  const webhookUrl = 'https://123-456-789.ngrok.io/'
  try {
    ValidatewebhookUrl(webhookUrl)
    t.fail('Should throw error');
  } catch (e) {
   t.pass()
  } finally {
    // no op
  }

});

