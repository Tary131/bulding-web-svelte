<script lang="ts">
	import { EnvelopeIcon, PhoneIcon } from 'heroicons-svelte/24/outline';
</script>

<footer class="bg-secondary-900 dark:bg-secondary-950 text-white py-12">
	<div class="container-custom">
		<div class="grid md:grid-cols-4 gap-8">
		<div>
			<h3 class="text-xl font-bold mb-4">HR Stavby</h3>
			<p class="text-secondary-400 text-sm">
				Rodinná stavební firma poskytující kvalitní stavební služby v Praze a okolí.
			</p>
		</div>

		<div>
			<h4 class="font-semibold mb-4">Rychlé odkazy</h4>
			<ul class="space-y-2 text-sm text-secondary-400">
				<li><a href="/" class="hover:text-primary-400 transition-colors">Domů</a></li>
				<li><a href="/sluzby" class="hover:text-primary-400 transition-colors">Služby</a></li>
				<li><a href="/realizace" class="hover:text-primary-400 transition-colors">Realizace</a></li>
				<li><a href="/o-firme" class="hover:text-primary-400 transition-colors">O firmě</a></li>
			</ul>
		</div>

		<div>
			<h4 class="font-semibold mb-4">Služby</h4>
			<ul class="space-y-2 text-sm text-secondary-400">
				<li><a href="/sluzby/rekonstrukce-bytu-domu" class="hover:text-primary-400 transition-colors">Rekonstrukce</a></li>
				<li><a href="/sluzby/zednicke-prace" class="hover:text-primary-400 transition-colors">Zednické práce</a></li>
				<li><a href="/sluzby/obklady-dlazby" class="hover:text-primary-400 transition-colors">Obklady a dlažby</a></li>
				<li><a href="/sluzby/fasady" class="hover:text-primary-400 transition-colors">Fasády</a></li>
			</ul>
		</div>

			<div>
				<h4 class="font-semibold mb-4">Kontakt</h4>
				<ul class="space-y-3 text-sm text-secondary-400">
					<li class="flex items-center gap-2">
						<PhoneIcon class="w-4 h-4" />
						<a href="tel:+420123456789" class="hover:text-primary-400 transition-colors">
							+420 123 456 789
						</a>
					</li>
					<li class="flex items-center gap-2">
						<EnvelopeIcon class="w-4 h-4" />
						<a href="mailto:info@hrstavby.cz" class="hover:text-primary-400 transition-colors">
							info@hrstavby.cz
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="border-t border-secondary-800 mt-8 pt-8 text-center text-sm text-secondary-400">
			<p>&copy; {new Date().getFullYear()} HR Stavby. Všechna práva vyhrazena.</p>
		</div>
	</div>
</footer>

