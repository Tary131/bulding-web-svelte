import cs from '../../messages/cs.json';
import en from '../../messages/en.json';
import de from '../../messages/de.json';

export type Language = 'cs' | 'en' | 'de';

const messages: Record<Language, typeof cs> = {
	cs,
	en,
	de
};

let currentLang: Language = 'cs';

export function setLanguage(lang: Language) {
	if (['cs', 'en', 'de'].includes(lang)) {
		currentLang = lang;
		if (typeof window !== 'undefined') {
			document.cookie = `lang=${lang}; path=/; max-age=31536000`;
		}
	}
}

export function getLanguage(): Language {
	return currentLang;
}

export function t(key: string): string {
	const keys = key.split('.');
	let value: any = messages[currentLang];
	
	for (const k of keys) {
		value = value?.[k];
		if (value === undefined) {
			// Fallback to Czech if translation missing
			value = messages.cs;
			for (const k2 of keys) {
				value = value?.[k2];
			}
			break;
		}
	}
	
	return value || key;
}

// Helper function to get all messages for current language
export function getMessages() {
	return messages[currentLang];
}

