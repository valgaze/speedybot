/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import Bot from './../settings/bot';
import { ENVELOPES, logoRoll } from '../../../../newshack/src';
import { validateWebhook } from './validateWebhook';
import { Location, checkMessage, tod_generator } from './location_helpers';
import { locationHandler } from '../settings/location';
export interface Env {
	BOT_TOKEN: string;
	WEBHOOK_SECRET: string;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const urlRef = new URL(request.url);
		const { origin, pathname } = urlRef;
		Bot.setToken(env.BOT_TOKEN);

		if (request.method === 'GET') {
			if (pathname === '/location') {
				const { cf } = request;
				const {
					city,
					colo,
					continent,
					country,
					latitude,
					longitude,
					postalCode,
					region,
					timezone = '',
				} = (cf as IncomingRequestCfProperties) || {};

				const urlRef = new URL(request.url);
				const { searchParams } = urlRef;
				const messageId = searchParams.get('messageId') || null;

				if (!messageId) {
					return new Response('Missing parameters', { status: 422 });
				}

				const { roomId, ok } = await checkMessage(Bot, messageId);
				if (!ok) {
					return new Response('Sorry, that link is no longer valid', {
						status: 401,
					});
				} else {
					const locationDetails = {
						tod: tod_generator(timezone),
						city,
						colo,
						continent,
						country,
						latitude,
						longitude,
						postalCode,
						region,
						timezone,
					};

					ctx.waitUntil(new Promise(async (resolve) => resolve(locationHandler(Bot, roomId, locationDetails as Location))));
					// Page content (disposable)
					const html = `You can close this window.<script>window.close();window.addEventListener("load", window.close);setTimeout(window.close, 301);</script>`;
					return new Response(html, {
						status: 200,
						headers: {
							'content-type': 'text/html;charset=UTF-8',
						},
					});
				}
			}
			// otherwise, show logo
			return new Response(`
${logoRoll()}
${new Date()}`);
		}

		// Grab bot url and add to context ($.ctx.botURL is not special name, easy way to pass it)
		Bot.insertStepToFront(($) => Boolean(($.ctx.botURL = origin))); // $.next is just true under-the-hood
		const json = await request.json();
		const signature = request.headers.get('x-spark-signature');
		const secret = env.WEBHOOK_SECRET;
		// Validate webhook
		if (signature) {
			const proceed = await validateWebhook(json, secret, signature);
			if (proceed === false) {
				return new Response('Webhook Rejected');
			}
		}
		ctx.waitUntil(
			new Promise<void>(async (resolve, reject) => {
				try {
					await Bot.runMiddleware(json as ENVELOPES);
				} catch (e) {
					reject(e);
					return new Response(`Something happened, but backend is up and running: ${e}`);
				}
			})
		);
		return new Response(logoRoll());
	},
};
