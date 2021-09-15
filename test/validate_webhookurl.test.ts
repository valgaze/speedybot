import test from "tape";
import { ValidatewebhookUrl } from './../src/helpers'

test("setup", function (t) {
  t.end();
});

// ex. good: https://123-456-789.ngrok.io/webhookroute
// ex. bad: https://123-456-789.ngrok.io/
// ex. bad: https://123-456-789.ngrok.io
test("Should return true if valid", (t) => {
    const webhookUrl = 'https://123-456-789.ngrok.io/webhookroute'
    const expected = true
		const actual = ValidatewebhookUrl(webhookUrl)
		t.deepEqual(actual, expected);
    t.end();
});

test("Should throw if no ending path", (t) => {
  const webhookUrl = 'https://123-456-789.ngrok.io'
  try {
    ValidatewebhookUrl(webhookUrl)
    t.fail('Should throw error');
  } catch (e) {
    t.match(e.message, /.*?/, 'Error thrown correctly');
  } finally {
    t.end();
  }
});


test("Should throw if no ending path, ends in slash", (t) => {
  const webhookUrl = 'https://123-456-789.ngrok.io/'
  try {
    ValidatewebhookUrl(webhookUrl)
    t.fail('Should throw error');
  } catch (e) {
    t.match(e.message, /.*?/, 'Error thrown correctly');
  } finally {
    t.end();
  }
});

test("teardown", function (t) {
  t.end();
});