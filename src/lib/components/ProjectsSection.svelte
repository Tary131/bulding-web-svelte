<script lang="ts">
	const projects = [
		{
			title: 'Modern Family Home',
			category: 'Residential',
			description: 'A stunning 3,500 sq ft contemporary home with open floor plan and energy-efficient design.',
			image: '/images/project1.jpg'
		},
		{
			title: 'Commercial Office Complex',
			category: 'Commercial',
			description: 'A 10,000 sq ft office building with modern amenities and sustainable features.',
			image: '/images/project2.jpg'
		},
		{
			title: 'Historic Renovation',
			category: 'Renovation',
			description: 'Careful restoration of a 1920s home preserving original character with modern updates.',
			image: '/images/project3.jpg'
		}
	];
</script>

<div class="container-custom">
	<div class="text-center mb-12">
		<h2 class="heading-2 mb-4">Featured Projects</h2>
		<p class="text-body max-w-2xl mx-auto">
			Explore some of our recent work and see the quality craftsmanship we bring to every project.
		</p>
	</div>

	<div class="grid md:grid-cols-3 gap-8">
		{#each projects as project}
			<div class="bg-white dark:bg-secondary-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
				<div
					class="aspect-video bg-gradient-to-br from-primary-200 to-primary-400 dark:from-primary-800 dark:to-primary-600 flex items-center justify-center"
				>
					<span class="text-white font-semibold">{project.title}</span>
				</div>
				<div class="p-6">
					<span class="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide">
						{project.category}
					</span>
					<h3 class="heading-3 mt-2 mb-2">{project.title}</h3>
					<p class="text-body text-sm">{project.description}</p>
				</div>
			</div>
		{/each}
	</div>

	<div class="text-center mt-12">
		<a href="/projects" class="btn-secondary">View All Projects</a>
	</div>
</div>

