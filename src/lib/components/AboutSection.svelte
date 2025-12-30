<script lang="ts">
	import { CheckCircleIcon } from 'heroicons-svelte/24/solid';

	const features = [
		'20+ Years of Experience',
		'Licensed & Insured',
		'Quality Craftsmanship',
		'On-Time Delivery',
		'Competitive Pricing',
		'Customer Satisfaction Guaranteed'
	];
</script>

<div class="container-custom">
	<div class="grid md:grid-cols-2 gap-12 items-center">
		<div>
			<h2 class="heading-2 mb-6">About Our Company</h2>
			<p class="text-body mb-6">
				With over two decades of experience in the construction industry, we've built a reputation
				for excellence, reliability, and outstanding craftsmanship. Our team of skilled professionals
				is dedicated to bringing your vision to life.
			</p>
			<p class="text-body mb-8">
				From residential homes to commercial buildings, we handle every project with meticulous
				attention to detail and a commitment to exceeding expectations. We believe in transparent
				communication, fair pricing, and delivering results that stand the test of time.
			</p>
			<div class="grid grid-cols-2 gap-4">
				{#each features as feature}
					<div class="flex items-center gap-2">
						<CheckCircleIcon class="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
						<span class="text-sm text-secondary-700 dark:text-secondary-300">{feature}</span>
					</div>
				{/each}
			</div>
		</div>
		<div class="relative">
			<div
				class="aspect-square rounded-lg bg-gradient-to-br from-primary-200 to-primary-400 dark:from-primary-800 dark:to-primary-600 shadow-xl"
			>
				<!-- Placeholder for image -->
				<div class="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
					Building Excellence
				</div>
			</div>
		</div>
	</div>
</div>

