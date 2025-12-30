<script lang="ts">
	import { HomeIcon, BuildingOfficeIcon, WrenchScrewdriverIcon, PaintBrushIcon } from 'heroicons-svelte/24/outline';

	const services = [
		{
			icon: HomeIcon,
			title: 'Residential Construction',
			description: 'Custom homes, renovations, and additions tailored to your lifestyle and needs.'
		},
		{
			icon: BuildingOfficeIcon,
			title: 'Commercial Projects',
			description: 'Office buildings, retail spaces, and commercial facilities built to code.'
		},
		{
			icon: WrenchScrewdriverIcon,
			title: 'Renovations & Remodeling',
			description: 'Transform your existing space with our expert renovation services.'
		},
		{
			icon: PaintBrushIcon,
			title: 'Design & Planning',
			description: 'Comprehensive design services to bring your vision from concept to reality.'
		}
	];
</script>

<div class="container-custom">
	<div class="text-center mb-12">
		<h2 class="heading-2 mb-4">Our Services</h2>
		<p class="text-body max-w-2xl mx-auto">
			Comprehensive construction services to meet all your building needs. From initial design to
			final inspection, we're with you every step of the way.
		</p>
	</div>

	<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
		{#each services as service}
			<div
				class="bg-white dark:bg-secondary-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
			>
				<div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
					<svelte:component this={service.icon} class="w-6 h-6 text-primary-600 dark:text-primary-400" />
				</div>
				<h3 class="heading-3 mb-2">{service.title}</h3>
				<p class="text-body text-sm">{service.description}</p>
			</div>
		{/each}
	</div>
</div>

