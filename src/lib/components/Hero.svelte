<script lang="ts">
	import { onMount } from 'svelte';
	import { animate } from 'motion';
	import { ArrowDownIcon } from 'heroicons-svelte/24/outline';

	let heroRef: HTMLElement;
	let titleRef: HTMLElement;
	let subtitleRef: HTMLElement;
	let ctaRef: HTMLElement;

	onMount(() => {
		if (titleRef) {
			animate(titleRef, { opacity: [0, 1], y: [30, 0] }, { duration: 0.8, delay: 0.2 });
		}
		if (subtitleRef) {
			animate(subtitleRef, { opacity: [0, 1], y: [30, 0] }, { duration: 0.8, delay: 0.4 });
		}
		if (ctaRef) {
			animate(ctaRef, { opacity: [0, 1], y: [30, 0] }, { duration: 0.8, delay: 0.6 });
		}
	});
</script>

<section
	bind:this={heroRef}
	class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary-50 via-white to-primary-50 dark:from-secondary-950 dark:via-secondary-900 dark:to-secondary-950 pt-20"
>
	<div class="container-custom text-center">
		<h1 bind:this={titleRef} class="heading-1 mb-6 opacity-0">
			Building Your Dreams
			<br />
			<span class="text-primary-600 dark:text-primary-400">Into Reality</span>
		</h1>
		<p bind:this={subtitleRef} class="text-body text-xl mb-8 max-w-2xl mx-auto opacity-0">
			Expert construction services with quality craftsmanship. From concept to completion, we bring
			your vision to life with precision and care.
		</p>
		<div bind:this={ctaRef} class="flex flex-col sm:flex-row gap-4 justify-center opacity-0">
			<a href="/contact" class="btn-primary"> Get Started </a>
			<a href="/services" class="btn-secondary"> Our Services </a>
		</div>
	</div>

	<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
		<ArrowDownIcon class="w-6 h-6 text-secondary-400 dark:text-secondary-600 animate-bounce" />
	</div>
</section>

