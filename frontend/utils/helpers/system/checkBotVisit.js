export function checkBotVisit() {
	const userAgent = process.client ? navigator.userAgent : useRequestHeaders()['user-agent'];
	return /bot|googlebot|lighthouse|crawler|spider|robot|crawling/i.test(userAgent);
}