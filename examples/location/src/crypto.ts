export async function decrypt(text: string, secret: string): Promise<string> {
	text = text.replace(/-/g, '+').replace(/_/g, '/');
	const encryptedArray = new Uint8Array(
		atob(text)
			.split('')
			.map((char) => char.charCodeAt(0))
	);

	const iv = encryptedArray.slice(0, 12);
	const encryptedContent = encryptedArray.slice(12);

	const keyMaterial = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(secret));
	const key = await crypto.subtle.importKey('raw', keyMaterial, { name: 'AES-GCM' }, false, ['decrypt']);

	const decryptedData = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: iv }, key, encryptedContent);

	const decryptedText = new TextDecoder().decode(decryptedData);

	return decryptedText;
}

export async function encrypt(text: string, secret: string): Promise<string> {
	const encodedText = new TextEncoder().encode(text);
	const keyMaterial = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(secret));
	const key = await crypto.subtle.importKey('raw', keyMaterial, { name: 'AES-GCM' }, false, ['encrypt']);
	const iv = crypto.getRandomValues(new Uint8Array(12));

	const encryptedData = await crypto.subtle.encrypt({ name: 'AES-GCM', iv: iv }, key, encodedText);

	const encryptedArray = new Uint8Array(iv.byteLength + encryptedData.byteLength);
	encryptedArray.set(new Uint8Array(iv), 0);
	encryptedArray.set(new Uint8Array(encryptedData), iv.byteLength);

	const encryptedBase64 = btoa(String.fromCharCode(...encryptedArray))
		.replace(/\+/g, '-')
		.replace(/\//g, '_')
		.replace(/=/g, '');

	return encryptedBase64;
}
