<script lang="ts">
	import { EnvelopeIcon, PhoneIcon } from 'heroicons-svelte/24/outline';
</script>

<footer class="bg-secondary-900 dark:bg-secondary-950 text-white py-12">
	<div class="container-custom">
		<div class="grid md:grid-cols-4 gap-8">
			<div>
				<h3 class="text-xl font-bold mb-4">Building Co.</h3>
				<p class="text-secondary-400 text-sm">
					Professional construction services with quality craftsmanship and exceptional customer
					service.
				</p>
			</div>

			<div>
				<h4 class="font-semibold mb-4">Quick Links</h4>
				<ul class="space-y-2 text-sm text-secondary-400">
					<li><a href="/" class="hover:text-white transition-colors">Home</a></li>
					<li><a href="/services" class="hover:text-white transition-colors">Services</a></li>
					<li><a href="/projects" class="hover:text-white transition-colors">Projects</a></li>
					<li><a href="/about" class="hover:text-white transition-colors">About</a></li>
				</ul>
			</div>

			<div>
				<h4 class="font-semibold mb-4">Services</h4>
				<ul class="space-y-2 text-sm text-secondary-400">
					<li><a href="/services/residential" class="hover:text-white transition-colors">Residential</a></li>
					<li><a href="/services/commercial" class="hover:text-white transition-colors">Commercial</a></li>
					<li><a href="/services/renovation" class="hover:text-white transition-colors">Renovation</a></li>
					<li><a href="/services/design" class="hover:text-white transition-colors">Design</a></li>
				</ul>
			</div>

			<div>
				<h4 class="font-semibold mb-4">Contact</h4>
				<ul class="space-y-3 text-sm text-secondary-400">
					<li class="flex items-center gap-2">
						<PhoneIcon class="w-4 h-4" />
						<a href="tel:+420123456789" class="hover:text-white transition-colors">
							+420 123 456 789
						</a>
					</li>
					<li class="flex items-center gap-2">
						<EnvelopeIcon class="w-4 h-4" />
						<a href="mailto:info@buildingcompany.com" class="hover:text-white transition-colors">
							info@buildingcompany.com
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="border-t border-secondary-800 mt-8 pt-8 text-center text-sm text-secondary-400">
			<p>&copy; {new Date().getFullYear()} Building Co. All rights reserved.</p>
		</div>
	</div>
</footer>

