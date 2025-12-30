<script lang="ts">
	import { PhoneIcon, EnvelopeIcon, MapPinIcon } from 'heroicons-svelte/24/outline';
	import ContactForm from './ContactForm.svelte';
</script>

<div class="container-custom">
	<div class="grid md:grid-cols-2 gap-12">
		<div>
			<h2 class="heading-2 mb-6">Get In Touch</h2>
			<p class="text-body mb-8">
				Ready to start your next project? Contact us today for a free consultation and quote. We're
				here to answer your questions and help bring your vision to life.
			</p>

			<div class="space-y-6">
				<div class="flex items-start gap-4">
					<div
						class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0"
					>
						<PhoneIcon class="w-6 h-6 text-primary-600 dark:text-primary-400" />
					</div>
					<div>
						<h3 class="font-semibold text-secondary-900 dark:text-secondary-100 mb-1">Phone</h3>
						<p class="text-body">
							<a href="tel:+420123456789" class="hover:text-primary-600 dark:hover:text-primary-400">
								+420 123 456 789
							</a>
						</p>
					</div>
				</div>

				<div class="flex items-start gap-4">
					<div
						class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0"
					>
						<EnvelopeIcon class="w-6 h-6 text-primary-600 dark:text-primary-400" />
					</div>
					<div>
						<h3 class="font-semibold text-secondary-900 dark:text-secondary-100 mb-1">Email</h3>
						<p class="text-body">
							<a
								href="mailto:info@buildingcompany.com"
								class="hover:text-primary-600 dark:hover:text-primary-400"
							>
								info@buildingcompany.com
							</a>
						</p>
					</div>
				</div>

				<div class="flex items-start gap-4">
					<div
						class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0"
					>
						<MapPinIcon class="w-6 h-6 text-primary-600 dark:text-primary-400" />
					</div>
					<div>
						<h3 class="font-semibold text-secondary-900 dark:text-secondary-100 mb-1">Address</h3>
						<p class="text-body">123 Construction Street<br />Building City, BC 12345</p>
					</div>
				</div>
			</div>
		</div>

		<div>
			<ContactForm />
		</div>
	</div>
</div>

