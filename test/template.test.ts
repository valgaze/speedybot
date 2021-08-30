import test from "tape";
import { fillTemplate } from './../util'

test("Should pick a random choice and fill the template", (t) => {
	let pass = false;

	const payload = {
		phrases: ["Hey $[name], how's it going?", "Hi $[name], here's your $[flavor]"],
		 template: {
			name: 'Joe',
			flavor: 'mint'
		}
	}
	const { phrases, template } = payload

	const renderedChoices = [`Hey Joe, how's it going?`, `Hi Joe, here's your mint`];
	const res = fillTemplate(phrases, template)

	if (renderedChoices.includes(res)) {
		pass = true;
	}
	
  t.deepEqual(true, pass);
	t.end()
});