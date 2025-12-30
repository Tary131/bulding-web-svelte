<script lang="ts">
	import ContactSection from '../../lib/components/ContactSection.svelte';
	import Header from '../../lib/components/Header.svelte';
	import Footer from '../../lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Contact Us - Building Company</title>
	<meta name="description" content="Get in touch with Building Company for your construction needs." />
</svelte:head>

<Header />

<main class="pt-20">
	<section class="py-20 bg-white dark:bg-secondary-900">
		<ContactSection />
	</section>
</main>

<Footer />

