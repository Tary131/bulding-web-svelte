<script lang="ts">
	import { onMount } from 'svelte';
	import { SunIcon, MoonIcon } from 'heroicons-svelte/24/outline';

	let darkMode = false;
	let mounted = false;

	function updateTheme(isDark: boolean) {
		if (typeof window !== 'undefined') {
			const html = document.documentElement;
			if (isDark) {
				html.classList.add('dark');
				localStorage.setItem('theme', 'dark');
			} else {
				html.classList.remove('dark');
				localStorage.setItem('theme', 'light');
			}
		}
	}

	onMount(() => {
		mounted = true;
		if (typeof window !== 'undefined') {
			const savedTheme = localStorage.getItem('theme');
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			
			if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
				darkMode = true;
			} else {
				darkMode = false;
			}
			updateTheme(darkMode);
		}
	});

	function toggleDarkMode() {
		darkMode = !darkMode;
		updateTheme(darkMode);
	}
</script>

{#if mounted}
	<button
		on:click={toggleDarkMode}
		type="button"
		class="p-2 rounded-xl bg-white dark:bg-secondary-800 border-2 border-primary-500 dark:border-primary-400 text-primary-500 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-secondary-700 transition-all shadow-md hover:shadow-lg"
		aria-label="Toggle dark mode"
	>
		{#if darkMode}
			<SunIcon class="w-5 h-5" />
		{:else}
			<MoonIcon class="w-5 h-5" />
		{/if}
	</button>
{/if}

