import type { Handle } from '@sveltejs/kit';
import { paraglideMiddleware } from '$lib/paraglide/server';

export const handle: Handle = async ({ event, resolve }) => {
	return paraglideMiddleware(event.request, async ({ locale, request }) => {
		// Store language in event.locals for use in components
		event.locals.lang = locale;
		
		// Update the event with the potentially modified request
		event.request = request;
		
		return resolve(event);
	});
};

