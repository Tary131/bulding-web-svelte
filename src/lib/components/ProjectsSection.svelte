<script lang="ts">
	import { projects } from '../data/projects';

	const displayedProjects = projects.slice(0, 3);
</script>

<div class="container-custom">
	<div class="text-center mb-12">
		<h2 class="heading-2 mb-4 text-secondary-900 dark:text-white">Naše realizace</h2>
		<p class="text-body max-w-2xl mx-auto">
			Prohlédněte si ukázky naší práce. Každý projekt řešíme s důrazem na kvalitu a spokojenost klienta.
		</p>
	</div>

	<div class="grid md:grid-cols-3 gap-8">
		{#each displayedProjects as project}
			<a
				href="/realizace/{project.id}"
				class="bg-white dark:bg-secondary-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all border-2 border-transparent hover:border-primary-500/20 dark:hover:border-primary-400/20 block"
			>
				<div
					class="aspect-video bg-gradient-to-br from-primary-200 to-primary-400 dark:from-primary-800 dark:to-primary-600 flex items-center justify-center"
				>
					{#if project.beforeImage}
						<img
							src={project.beforeImage}
							alt={project.title}
							class="w-full h-full object-cover"
						/>
					{:else}
						<span class="text-white font-semibold text-center px-4">{project.title}</span>
					{/if}
				</div>
				<div class="p-6">
					<span class="text-xs font-semibold text-primary-500 dark:text-primary-400 uppercase tracking-wide">
						{project.type}
					</span>
					<h3 class="heading-3 mt-2 mb-2">{project.title}</h3>
					<p class="text-body text-sm mb-2">{project.summary}</p>
					<p class="text-sm text-secondary-600 dark:text-secondary-400">{project.location}</p>
				</div>
			</a>
		{/each}
	</div>

	<div class="text-center mt-12">
		<a href="/realizace" class="btn-secondary">Zobrazit všechny realizace</a>
	</div>
</div>

