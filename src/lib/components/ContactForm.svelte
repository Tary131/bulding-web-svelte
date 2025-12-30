<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<form method="POST" action="/contact" use:enhance class="space-y-6">
	<div>
		<label for="name" class="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
			Jméno *
		</label>
		<input
			type="text"
			id="name"
			name="name"
			class="w-full px-4 py-2 border-2 border-secondary-300 dark:border-secondary-600 rounded-2xl bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
			required
		/>
	</div>

	<div>
		<label for="email" class="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
			Email *
		</label>
		<input
			type="email"
			id="email"
			name="email"
			class="w-full px-4 py-2 border-2 border-secondary-300 dark:border-secondary-600 rounded-2xl bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
			required
		/>
	</div>

	<div>
		<label for="phone" class="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
			Telefon
		</label>
		<input
			type="tel"
			id="phone"
			name="phone"
			class="w-full px-4 py-2 border-2 border-secondary-300 dark:border-secondary-600 rounded-2xl bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
		/>
	</div>

	<div>
		<label for="message" class="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
			Zpráva *
		</label>
		<textarea
			id="message"
			name="message"
			rows="5"
			class="w-full px-4 py-2 border-2 border-secondary-300 dark:border-secondary-600 rounded-2xl bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
			required
		></textarea>
	</div>

	<button type="submit" class="btn-primary w-full"> Odeslat zprávu </button>
</form>

