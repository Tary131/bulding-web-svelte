<script lang="ts">
	import { onMount } from 'svelte';
	import { animate, inView } from 'motion';
	import Hero from '../lib/components/Hero.svelte';
	import AboutSection from '../lib/components/AboutSection.svelte';
	import ServicesSection from '../lib/components/ServicesSection.svelte';
	import ProjectsSection from '../lib/components/ProjectsSection.svelte';
	import ContactSection from '../lib/components/ContactSection.svelte';
	import Header from '../lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import * as m from '$lib/paraglide/messages';

	let heroRef: HTMLElement;
	let aboutRef: HTMLElement;
	let servicesRef: HTMLElement;
	let projectsRef: HTMLElement;

	onMount(() => {
		// Animate sections on scroll
		if (aboutRef) {
			inView(aboutRef, () => {
				animate(aboutRef, { opacity: [0, 1], y: [30, 0] }, { duration: 0.6 });
			});
		}
		if (servicesRef) {
			inView(servicesRef, () => {
				animate(servicesRef, { opacity: [0, 1], y: [30, 0] }, { duration: 0.6 });
			});
		}
		if (projectsRef) {
			inView(projectsRef, () => {
				animate(projectsRef, { opacity: [0, 1], y: [30, 0] }, { duration: 0.6 });
			});
		}
	});
</script>

<svelte:head>
	<title>{m['header.title']()} - {m['hero.title']()}</title>
	<meta name="description" content={m['hero.subtitle']()} />
</svelte:head>

<Header />

<main class="pt-24 bg-white dark:bg-secondary-900 min-h-screen">
	<div bind:this={heroRef}>
		<Hero />
	</div>

	<section bind:this={aboutRef} class="py-20 bg-white dark:bg-secondary-900">
		<AboutSection />
	</section>

	<section bind:this={servicesRef} class="py-20 bg-white dark:bg-secondary-950">
		<ServicesSection />
	</section>

	<section bind:this={projectsRef} class="py-20 bg-white dark:bg-secondary-900">
		<ProjectsSection />
	</section>

	<section class="py-20 bg-white dark:bg-secondary-950">
		<ContactSection />
	</section>
</main>

<Footer />

