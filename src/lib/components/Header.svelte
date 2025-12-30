<script lang="ts">
	import { onMount } from 'svelte';
	import { Bars3Icon, XMarkIcon } from 'heroicons-svelte/24/outline';

	let mobileMenuOpen = false;
	let scrolled = false;
	let headerRef: HTMLElement;

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/services', label: 'Services' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' }
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
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled
		? 'bg-white/95 dark:bg-secondary-900/95 backdrop-blur-sm shadow-md'
		: 'bg-transparent'}"
>
	<nav class="container-custom">
		<div class="flex items-center justify-between h-20">
			<a href="/" class="text-2xl font-bold text-primary-600 dark:text-primary-400">
				Building Co.
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center space-x-8">
				{#each navItems as item}
					<a
						href={item.href}
						class="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
					>
						{item.label}
					</a>
				{/each}
			</div>

			<!-- Mobile Menu Button -->
			<button
				on:click={toggleMobileMenu}
				class="md:hidden p-2 text-secondary-700 dark:text-secondary-300"
				aria-label="Toggle menu"
			>
				{#if mobileMenuOpen}
					<XMarkIcon class="w-6 h-6" />
				{:else}
					<Bars3Icon class="w-6 h-6" />
				{/if}
			</button>
		</div>

		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<div class="md:hidden py-4 space-y-4">
				{#each navItems as item}
					<a
						href={item.href}
						class="block text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
						on:click={() => (mobileMenuOpen = false)}
					>
						{item.label}
					</a>
				{/each}
			</div>
		{/if}
	</nav>
</header>

