<script lang="ts">
	import { CheckCircleIcon } from 'heroicons-svelte/24/solid';
	import Header from '../../lib/components/Header.svelte';
	import Footer from '../../lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Děkujeme - HR Stavby</title>
	<meta name="description" content="Děkujeme za vaši zprávu. Brzy se vám ozveme." />
</svelte:head>

<Header />

<main class="pt-20 min-h-screen flex items-center justify-center">
	<div class="container-custom text-center">
		<div class="max-w-md mx-auto">
			<div class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
				<CheckCircleIcon class="w-10 h-10 text-green-600 dark:text-green-400" />
			</div>
			<h1 class="heading-2 mb-4">Děkujeme!</h1>
			<p class="text-body mb-8">
				Vaši zprávu jsme obdrželi a co nejdříve se vám ozveme. Obvykle odpovídáme do 24 hodin.
			</p>
			<a href="/" class="btn-primary">Zpět na hlavní stránku</a>
		</div>
	</div>
</main>

<Footer />

