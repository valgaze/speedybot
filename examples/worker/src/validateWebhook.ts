/**
 *
 * Helper to process/validate incoming webhooks
 * - requestData: incoming request body
 * - secret: the secret used when registering webhooks
 * - signature:  Obtain headers under "X-Spark-Signature"
 * @param requestData: incoming request body
 * @param secret: the secret used when registering webhooks
 * @param signature: available as "X-Spark-Signature" on incoming request header
 * @returns boolean (valid or invalid)
 *
 */
export const validateWebhook = async <T = any>(requestData: T, secret: string, signature: string): Promise<boolean> => {
	const stringyBody = typeof requestData !== 'string' ? JSON.stringify(requestData) : requestData;
	const algo = {
		name: 'HMAC',
		hash: 'SHA-1',
	};
	const enc = {
		name: 'UTF-8',
	};
	const hmacKey = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), algo, false, ['sign']);
	const hmacData = await crypto.subtle.sign(algo, hmacKey, new TextEncoder().encode(stringyBody));

	const bufferToHex = (buffer: ArrayBufferLike) => {
		return Array.prototype.map.call(new Uint8Array(buffer), (x) => ('00' + x.toString(16)).slice(-2)).join('');
	};
	const hmacDataHex = bufferToHex(hmacData);
	return hmacDataHex === signature;
};
