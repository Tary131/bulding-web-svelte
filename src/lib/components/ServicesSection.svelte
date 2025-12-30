<script lang="ts">
	import { services } from '../data/services';
	import { HomeIcon, WrenchScrewdriverIcon, PaintBrushIcon, BuildingOffice2Icon, SparklesIcon } from 'heroicons-svelte/24/outline';

	const serviceIcons: Record<string, any> = {
		'rekonstrukce-bytu-domu': HomeIcon,
		'zednicke-prace': WrenchScrewdriverIcon,
		'obklady-dlazby': PaintBrushIcon,
		'sadrokartony': BuildingOffice2Icon,
		'fasady': SparklesIcon
	};

	const displayedServices = services.slice(0, 5);
</script>

<div class="container-custom">
	<div class="text-center mb-12">
		<h2 class="heading-2 mb-4 text-secondary-900 dark:text-white">Naše služby</h2>
		<p class="text-body max-w-2xl mx-auto">
			Komplexní stavební řešení pro vaše projekty. Nabízíme širokou škálu stavebních služeb pro vaše byty, domy a další objekty.
		</p>
	</div>

	<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each displayedServices as service}
			<a
				href="/sluzby/{service.slug}"
				class="bg-white dark:bg-secondary-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-primary-500/20 dark:hover:border-primary-400/20 block h-full"
			>
				<div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mb-4">
					{#if serviceIcons[service.slug]}
						<svelte:component
							this={serviceIcons[service.slug]}
							class="w-6 h-6 text-primary-500 dark:text-primary-400"
						/>
					{/if}
				</div>
				<h3 class="heading-3 mb-2 text-secondary-900 dark:text-white">{service.title}</h3>
				<p class="text-body text-sm">{service.shortDescription}</p>
			</a>
		{/each}
	</div>

	<div class="text-center mt-8">
		<a href="/sluzby" class="btn-secondary">Zobrazit všechny služby</a>
	</div>
</div>

