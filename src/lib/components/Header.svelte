<script lang="ts">
	import { onMount } from 'svelte';
	import { Bars3Icon, XMarkIcon } from 'heroicons-svelte/24/outline';
	import DarkModeSwitcher from './DarkModeSwitcher.svelte';

	let mobileMenuOpen = false;
	let scrolled = false;
	let headerRef: HTMLElement;

	const navItems = [
		{ href: '/', label: 'Domů' },
		{ href: '/sluzby', label: 'Služby' },
		{ href: '/realizace', label: 'Realizace' },
		{ href: '/o-firme', label: 'O firmě' },
		{ href: '/kontakt', label: 'Kontakt' }
	];

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<header
	bind:this={headerRef}
	class="fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-2xl {scrolled
		? 'bg-white/95 dark:bg-secondary-900/95 backdrop-blur-md shadow-xl border-2 border-primary-500/20 dark:border-primary-400/20'
		: 'bg-white/90 dark:bg-secondary-900/90 backdrop-blur-md shadow-lg border-2 border-primary-500/10 dark:border-primary-400/10'}"
>
	<nav class="container-custom">
		<div class="flex items-center justify-between h-20">
			<a href="/" class="text-2xl font-bold text-primary-500 dark:text-primary-400">
				HR Stavby
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center space-x-6">
				{#each navItems as item}
					<a
						href={item.href}
						class="text-secondary-700 dark:text-secondary-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors font-medium px-3 py-2 rounded-xl hover:bg-primary-50 dark:hover:bg-secondary-800"
					>
						{item.label}
					</a>
				{/each}
				<DarkModeSwitcher />
			</div>

			<!-- Mobile Menu Button -->
			<div class="md:hidden flex items-center gap-2">
				<DarkModeSwitcher />
				<button
					on:click={toggleMobileMenu}
					class="p-2 rounded-xl text-secondary-700 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-secondary-800 transition-colors"
					aria-label="Toggle menu"
				>
					{#if mobileMenuOpen}
						<XMarkIcon class="w-6 h-6" />
					{:else}
						<Bars3Icon class="w-6 h-6" />
					{/if}
				</button>
			</div>
		</div>

		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<div class="md:hidden py-4 space-y-2">
				{#each navItems as item}
					<a
						href={item.href}
						class="block text-secondary-700 dark:text-secondary-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors font-medium px-4 py-2 rounded-xl hover:bg-primary-50 dark:hover:bg-secondary-800"
						on:click={() => (mobileMenuOpen = false)}
					>
						{item.label}
					</a>
				{/each}
			</div>
		{/if}
	</nav>
</header>

