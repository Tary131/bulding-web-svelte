<script lang="ts">
	import ContactSection from '../../lib/components/ContactSection.svelte';
	import Footer from '../../lib/components/Footer.svelte';
	import Header from '../../lib/components/Header.svelte';
</script>

<svelte:head>
	<title>Kontakt - HR Stavby</title>
	<meta
		name="description"
		content="Kontaktujte nás pro bezplatnou konzultaci vašeho stavebního projektu."
	/>
</svelte:head>

<Header />

<main class="pt-20">
	<section class="py-20 bg-white dark:bg-secondary-900">
		<ContactSection />
	</section>
</main>

<Footer />
