<script lang="ts">
	import { PhoneIcon, EnvelopeIcon, MapPinIcon } from 'heroicons-svelte/24/outline';
	import ContactForm from './ContactForm.svelte';
	import * as m from '$lib/paraglide/messages';
	import { CONTACT } from '$lib/constants';
</script>

<div class="container-custom">
	<div class="grid md:grid-cols-2 gap-12">
		<div>
			<h2 class="heading-2 mb-6 text-secondary-900 dark:text-white">{m['contact.title']()}</h2>
			<p class="text-body mb-8">
				{m['contact.subtitle']()}
			</p>

			<div class="space-y-6">
				<div class="flex items-start gap-4">
					<div
						class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center flex-shrink-0"
					>
						<PhoneIcon class="w-6 h-6 text-primary-500 dark:text-primary-400" />
					</div>
					<div>
						<h3 class="font-semibold text-secondary-900 dark:text-secondary-100 mb-1">{m['contact.phone']()}</h3>
						<p class="text-body">
							<a href={`tel:${CONTACT.phone}`} class="hover:text-primary-500 dark:hover:text-primary-400">
								{CONTACT.phone}
							</a>
						</p>
					</div>
				</div>

				<div class="flex items-start gap-4">
					<div
						class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center flex-shrink-0"
					>
						<EnvelopeIcon class="w-6 h-6 text-primary-500 dark:text-primary-400" />
					</div>
					<div>
						<h3 class="font-semibold text-secondary-900 dark:text-secondary-100 mb-1">{m['contact.email']()}</h3>
						<p class="text-body">
							<a
								href={`mailto:${CONTACT.email}`}
								class="hover:text-primary-500 dark:hover:text-primary-400"
							>
								{CONTACT.email}
							</a>
						</p>
					</div>
				</div>

				<div class="flex items-start gap-4">
					<div
						class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center flex-shrink-0"
					>
						<MapPinIcon class="w-6 h-6 text-primary-500 dark:text-primary-400" />
					</div>
					<div>
						<h3 class="font-semibold text-secondary-900 dark:text-secondary-100 mb-1">Adresa</h3>
						<p class="text-body whitespace-pre-line">{m['contact.address']()}</p>
					</div>
				</div>
			</div>
		</div>

		<div>
			<ContactForm />
		</div>
	</div>
</div>

