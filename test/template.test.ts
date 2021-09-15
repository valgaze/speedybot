import test from "tape";
import { fillTemplate } from './../src'

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

test("Should take a string & fill in the template (& not crash if key name happened to be contaied 😶)", (t) => {
	let pass = false;

	const payload = {
		phrases: `What directory to install speedybot ? (defaults to '$[directory]')`,
		template: {
			directory: 'speedybot',
		}
	}
	const { phrases, template } = payload

	const renderedChoices = [`What directory to install speedybot ? (defaults to 'speedybot')`];
	const res = fillTemplate(phrases, template)
	if (renderedChoices.includes(res)) {
		pass = true;
	}

	t.deepEqual(true, pass);
	t.end()
});