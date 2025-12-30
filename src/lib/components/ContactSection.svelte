<script lang="ts">
	import { PhoneIcon, EnvelopeIcon, MapPinIcon } from 'heroicons-svelte/24/outline';
	import ContactForm from './ContactForm.svelte';
</script>

<div class="container-custom">
	<div class="grid md:grid-cols-2 gap-12">
		<div>
			<h2 class="heading-2 mb-6 text-secondary-900 dark:text-white">Kontaktujte nás</h2>
			<p class="text-body mb-8">
				Máte zájem o naše služby? Kontaktujte nás ještě dnes a domluvíme se na bezplatné konzultaci. Jsme tu, abychom odpověděli na vaše otázky a pomohli vám realizovat vaše představy.
			</p>

			<div class="space-y-6">
				<div class="flex items-start gap-4">
					<div
						class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center flex-shrink-0"
					>
						<PhoneIcon class="w-6 h-6 text-primary-500 dark:text-primary-400" />
					</div>
					<div>
						<h3 class="font-semibold text-secondary-900 dark:text-secondary-100 mb-1">Telefon</h3>
						<p class="text-body">
							<a href="tel:+420123456789" class="hover:text-primary-500 dark:hover:text-primary-400">
								+420 123 456 789
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
						<h3 class="font-semibold text-secondary-900 dark:text-secondary-100 mb-1">Email</h3>
						<p class="text-body">
							<a
								href="mailto:info@hrstavby.cz"
								class="hover:text-primary-500 dark:hover:text-primary-400"
							>
								info@hrstavby.cz
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
						<p class="text-body">Praha a okolí<br />Česká republika</p>
					</div>
				</div>
			</div>
		</div>

		<div>
			<ContactForm />
		</div>
	</div>
</div>

