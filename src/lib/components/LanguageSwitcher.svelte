<script lang="ts">
	import { onMount } from 'svelte';
	import { GlobeAltIcon } from 'heroicons-svelte/24/outline';

	let mounted = false;
	let isOpen = false;
	let currentLang: 'cs' | 'en' | 'de' = 'cs';
	let paraglideAvailable = false;

	const languages = [
		{ code: 'cs', name: 'Čeština', flag: '🇨🇿' },
		{ code: 'en', name: 'English', flag: '🇬🇧' },
		{ code: 'de', name: 'Deutsch', flag: '🇩🇪' }
	];

	$: currentLanguage = languages.find((lang) => lang.code === currentLang) || languages[0];

	onMount(async () => {
		mounted = true;
		
		// Get language from cookie (check both 'lang' and 'PARAGLIDE_LOCALE')
		if (typeof document !== 'undefined') {
			const cookies = document.cookie.split(';');
			let langCookie = cookies.find((c) => c.trim().startsWith('lang='));
			if (!langCookie) {
				langCookie = cookies.find((c) => c.trim().startsWith('PARAGLIDE_LOCALE='));
			}
			if (langCookie) {
				const lang = langCookie.split('=')[1].trim();
				if (['cs', 'en', 'de'].includes(lang)) {
					currentLang = lang as 'cs' | 'en' | 'de';
				}
			}
		}

		// Try to load paraglide runtime
		try {
			const paraglide = await import('$lib/paraglide/runtime');
			paraglideAvailable = true;
			paraglide.setLocale(currentLang as any);
		} catch {
			// Paraglide not available yet, that's okay
		}
	});

	function switchLanguage(locale: 'cs' | 'en' | 'de') {
		currentLang = locale;
		isOpen = false;
		
		// Save to both cookies for compatibility
		document.cookie = `lang=${locale}; path=/; max-age=31536000`;
		document.cookie = `PARAGLIDE_LOCALE=${locale}; path=/; max-age=31536000`;
		
		// Try to set language in paraglide if available
		if (paraglideAvailable) {
			import('$lib/paraglide/runtime').then((paraglide) => {
				paraglide.setLocale(locale as any);
			});
		}
		
		// Reload page to apply language change
		window.location.reload();
	}

	function toggleDropdown() {
		isOpen = !isOpen;
	}
</script>

{#if mounted}
	<div class="relative">
		<button
			on:click={toggleDropdown}
			class="p-2 rounded-xl bg-white dark:bg-secondary-800 border-2 border-primary-500 dark:border-primary-400 text-primary-500 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-secondary-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
			aria-label="Switch language"
		>
			<GlobeAltIcon class="w-5 h-5" />
			<span class="hidden sm:inline text-sm font-medium">{currentLanguage.flag}</span>
		</button>

		{#if isOpen}
			<div
				class="absolute right-0 mt-2 w-48 bg-white dark:bg-secondary-800 rounded-2xl shadow-xl border-2 border-primary-500/20 dark:border-primary-400/20 overflow-hidden z-50"
			>
				{#each languages as lang}
					<button
						on:click={() => switchLanguage(lang.code)}
						class="w-full px-4 py-3 text-left hover:bg-primary-50 dark:hover:bg-secondary-700 transition-colors flex items-center gap-3 {lang.code === currentLang
							? 'bg-primary-50 dark:bg-secondary-700 text-primary-600 dark:text-primary-400'
							: 'text-secondary-700 dark:text-secondary-300'}"
					>
						<span class="text-xl">{lang.flag}</span>
						<span class="font-medium">{lang.name}</span>
						{#if lang.code === currentLang}
							<span class="ml-auto text-primary-500 dark:text-primary-400">✓</span>
						{/if}
					</button>
				{/each}
			</div>
		{/if}
	</div>

	{#if isOpen}
		<div
			class="fixed inset-0 z-40"
			on:click={() => (isOpen = false)}
			on:keydown={(e) => e.key === 'Escape' && (isOpen = false)}
		></div>
	{/if}
{/if}


