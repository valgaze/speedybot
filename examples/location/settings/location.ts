import Bot from './bot';
import { Location } from '../src/location_helpers';

export async function locationHandler(bot: typeof Bot, roomId: string, locationData: Location) {
	const locationCard = Bot.card()
		.addTitle(`Good ${locationData.tod}`)
		.addSubtitle(
			`Note: this timezone + location data is not stored/collected/sold and is not hyper-accurate. It's accurate enough to understand if its dark/light outside whenever a user is located`
		)
		.addTable([
			['Country', locationData.country],
			['City', locationData.city],
			['Region', locationData.region],
			['Timezone', locationData.timezone],
		])
		.addLink(`https://maps.google.com/?q=${locationData.latitude},${locationData.longitude}`, 'See map 🗺');

	await Bot.sendTo(roomId, locationCard);
	return true;
}
