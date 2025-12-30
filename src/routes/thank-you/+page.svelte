<script lang="ts">
	import { CheckCircleIcon } from 'heroicons-svelte/24/solid';
	import Header from '../../lib/components/Header.svelte';
	import Footer from '../../lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Thank You - Building Company</title>
	<meta name="description" content="Thank you for contacting Building Company." />
</svelte:head>

<Header />

<main class="pt-20 min-h-screen flex items-center justify-center">
	<div class="container-custom text-center">
		<div class="max-w-md mx-auto">
			<div class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
				<CheckCircleIcon class="w-10 h-10 text-green-600 dark:text-green-400" />
			</div>
			<h1 class="heading-2 mb-4">Thank You!</h1>
			<p class="text-body mb-8">
				We've received your message and will get back to you as soon as possible. Our team typically
				responds within 24 hours.
			</p>
			<a href="/" class="btn-primary">Return to Home</a>
		</div>
	</div>
</main>

<Footer />

