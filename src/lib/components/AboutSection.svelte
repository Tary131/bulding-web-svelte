<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { CheckCircleIcon } from 'heroicons-svelte/24/solid';

	$: features = [
		m['about.why1'](),
		m['about.why2'](),
		m['about.why3'](),
		m['about.why4'](),
		m['about.why5']()
	];
</script>

<div class="container-custom">
	<div class="grid md:grid-cols-2 gap-12 items-center">
		<div>
			<h2 class="heading-2 mb-6 text-secondary-900 dark:text-white">{m['about.title']()}</h2>
			<p class="text-body mb-6">
				{m['about.description1']()}
			</p>
			<p class="text-body mb-8">
				{m['about.description2']()}
			</p>
			<div class="grid grid-cols-2 gap-4">
				{#each features as feature}
					<div class="flex items-center gap-2">
						<CheckCircleIcon class="w-5 h-5 text-primary-500 dark:text-primary-400 flex-shrink-0" />
						<span class="text-sm text-secondary-800 dark:text-secondary-300">{feature}</span>
					</div>
				{/each}
			</div>
		</div>
		<div class="relative">
			<div
				class="aspect-square rounded-2xl bg-gradient-to-br from-primary-200 to-primary-400 dark:from-primary-800 dark:to-primary-600 shadow-xl border-2 border-primary-500/20 dark:border-primary-400/20"
			>
				<!-- Placeholder for image -->
				<div
					class="w-full h-full flex items-center justify-center text-white text-2xl font-bold text-center px-4"
				>
					{m['hero.title']()}
				</div>
			</div>
		</div>
	</div>
</div>
