import { touchpointEndpoint } from 'config.json';
import http from 'services/httpService';

export async function getQuotes() {
	// console.log('Getting quote list!');
	const { data: quotes } = await http.get(touchpointEndpoint);
	return quotes;
}

export async function getQuote(id) {
	// console.log('Getting quote!', id);
	const { data: quote } = await http.get(`${touchpointEndpoint}/${id}`);
	return quote;
}

export async function saveQuote(quote) {
	// console.log('Saving quote', quote);
	if (quote.id === undefined) {
		return await http.post(touchpointEndpoint, quote);
	} else {
		return await http.put(touchpointEndpoint + '/' + quote.id, quote);
	}
}
