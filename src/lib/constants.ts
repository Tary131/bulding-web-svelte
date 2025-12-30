/**
 * Application constants
 * Centralized configuration to avoid magic numbers and hardcoded values
 */

export const CONTACT = {
	phone: '+420123456789',
	phone2: '+420987654321',
	email: 'info@hr-stavby.cz',
	hours: 'Po-Pá: 7:00 - 18:00',
	responseTime: 'Odpovídáme do 24 hodin'
} as const;

export const LOCATION = {
	address: 'Praha, Česká republika',
	coordinates: {
		lat: 50.0755,
		lng: 14.4378
	},
	googleMapsUrl: 'https://www.google.com/maps/place/Praha',
	googleMapsEmbedUrl:
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163930.4997897375!2d14.213699999999999!3d50.05966999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b939c0970798b%3A0x400af0f66164090!2sPrague%2C%20Czechia!5e0!3m2!1sen!2scz!4v1234567890123!5m2!1sen!2scz'
} as const;

export const SOCIAL = {
	instagram: 'https://instagram.com/hrstavby' // TODO: Doplňte skutečný Instagram URL
} as const;

export const ANIMATION = {
	duration: 0.6,
	delay: 0.1,
	scrollMargin: '-100px'
} as const;

export const BASE_URL = 'https://hr-stavby.cz';

