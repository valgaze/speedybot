import { SpeedyBot } from 'speedybot';
/**
 * tl;dr big idea here: Hit /location and validate w/ messageId by deleting it
 * If valid/exists (able to delete), inject location info
 */
export async function checkMessage(bot: SpeedyBot, messageId: string): Promise<{ roomId: string; ok: boolean }> {
	let msgExists: boolean | undefined;
	let roomId;
	try {
		const HACK_FOR_PRIVATE_METHODS = Object.getPrototypeOf(bot);
		const res = await HACK_FOR_PRIVATE_METHODS.getData.call(bot, 'text', { data: { id: messageId } });
		roomId = res.roomId;
		await bot.deleteMessage(messageId);
		msgExists = true;
	} catch (e) {
		console.log(`oh no`, e);
		if (e && typeof e === 'object' && 'statusCode' in e) {
			if (e.statusCode === 404) {
				msgExists = false;
			}
		} else {
			throw e;
		}
	}
	return { roomId, ok: Boolean(msgExists) };
}

export type TOD = 'morning' | 'afternoon' | 'evening' | 'error'; // time of day, ex. 'morning' | 'afternoon' | 'evening' | 'error'
export type Location = {
	city: string; // ex. 'Los Angeles'
	colo: string; // ex. 'LAX', IATA airport code of colo facility where request came in
	continent: string; // ex. 'NA',
	latitude: string;
	longitude: string;
	country: string; // ex. 'US'
	postalCode: string; // ex90210
	region: string;
	timezone: string; // ex. 'America/Los_Angeles'
	tod: TOD;
};

export const tod_generator = (timezone: string): TOD => {
	let tod = 'error';
	try {
		const date = new Date().toLocaleString('en-US', { timeZone: timezone });
		const hour = new Date(date).getHours();
		// 10~3 is evening
		if (20 <= hour || hour <= 3) {
			tod = 'evening';
		}

		if (hour <= 11) {
			tod = 'morning';
		}

		if (12 <= hour && hour <= 16) {
			tod = 'afternoon';
		}

		if (17 <= hour && hour <= 19) {
			tod = 'evening';
		}
	} catch (e) {
		tod = 'error';
	}

	return tod as TOD;
};

async function encrypt(text: string, key: string) {
	return text;
}

async function decrypt(text: string, key: string) {
	return text;
}
