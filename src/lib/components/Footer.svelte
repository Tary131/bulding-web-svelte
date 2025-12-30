<script lang="ts">
	import {
		BuildingOfficeIcon,
		EnvelopeIcon,
		HomeIcon,
		MapPinIcon,
		PhoneIcon,
		UserGroupIcon,
		WrenchScrewdriverIcon
	} from 'heroicons-svelte/24/outline';
	import * as m from '$lib/paraglide/messages';
	import { CONTACT } from '$lib/constants';
	import SocialLink from './ui/SocialLink.svelte';
	import CzechRegionsMap from './ui/CzechRegionsMap.svelte';

	const currentYear = new Date().getFullYear();
</script>

<footer id="main-footer" class="bg-secondary-900 dark:bg-secondary-950 text-white">
	<div class="container-custom py-12">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
			<div>
				<a href="/" class="inline-block mb-4">
					<!-- Logo placeholder - replace with actual logo when available -->
					<div class="h-12 md:h-14 w-auto max-w-[180px] md:max-w-[220px] text-white text-2xl font-bold brightness-0 invert">
						HR Stavby
					</div>
				</a>
				<p class="text-secondary-300 dark:text-secondary-400 mb-4">
					{m['footer.description']()}
				</p>
				<SocialLink type="instagram" className="text-secondary-300 dark:text-secondary-400 hover:text-white transition-colors text-sm" />
			</div>

			<div>
				<h4 class="text-lg font-semibold mb-4">{m['footer.navigation']()}</h4>
				<ul class="space-y-2">
					<li>
						<a
							href="/"
							class="flex items-center gap-2 text-secondary-300 dark:text-secondary-400 hover:text-white transition-colors"
						>
							<HomeIcon class="w-4 h-4" />
							{m['common.home']()}
						</a>
					</li>
					<li>
						<a
							href="/sluzby"
							class="flex items-center gap-2 text-secondary-300 dark:text-secondary-400 hover:text-white transition-colors"
						>
							<WrenchScrewdriverIcon class="w-4 h-4" />
							{m['common.services']()}
						</a>
					</li>
					<li>
						<a
							href="/realizace"
							class="flex items-center gap-2 text-secondary-300 dark:text-secondary-400 hover:text-white transition-colors"
						>
							<BuildingOfficeIcon class="w-4 h-4" />
							{m['common.projects']()}
						</a>
					</li>
					<li>
						<a
							href="/o-firme"
							class="flex items-center gap-2 text-secondary-300 dark:text-secondary-400 hover:text-white transition-colors"
						>
							<UserGroupIcon class="w-4 h-4" />
							{m['common.about']()}
						</a>
					</li>
					<li>
						<a
							href="/kontakt"
							class="flex items-center gap-2 text-secondary-300 dark:text-secondary-400 hover:text-white transition-colors"
						>
							<EnvelopeIcon class="w-4 h-4" />
							{m['common.contact']()}
						</a>
					</li>
				</ul>
			</div>

			<div>
				<h4 class="text-lg font-semibold mb-4">{m['footer.services']()}</h4>
				<ul class="space-y-2">
					<li>
						<a
							href="/sluzby/rekonstrukce-bytu-domu"
							class="text-secondary-300 hover:text-white transition-colors"
						>
							{m['footer.serviceReconstruction']()}
						</a>
					</li>
					<li>
						<a
							href="/sluzby/zednicke-prace"
							class="text-secondary-300 hover:text-white transition-colors"
						>
							{m['footer.serviceMasonry']()}
						</a>
					</li>
					<li>
						<a
							href="/sluzby/obklady-dlazby"
							class="text-secondary-300 hover:text-white transition-colors"
						>
							{m['footer.serviceTiles']()}
						</a>
					</li>
					<li>
						<a
							href="/sluzby/sadrokartony"
							class="text-secondary-300 hover:text-white transition-colors"
						>
							{m['footer.serviceDrywall']()}
						</a>
					</li>
					<li>
						<a
							href="/sluzby/fasady"
							class="text-secondary-300 hover:text-white transition-colors"
						>
							{m['footer.serviceFacades']()}
						</a>
					</li>
				</ul>
			</div>

			<div>
				<h4 class="text-lg font-semibold mb-4">{m['footer.contact']()}</h4>
				<ul class="space-y-2 text-secondary-300 dark:text-secondary-400 mb-4">
					<li>
						<a
							href="tel:{CONTACT.phone}"
							class="flex items-center gap-2 hover:text-white transition-colors"
						>
							<PhoneIcon class="w-4 h-4" />
							<span>{CONTACT.phone}</span>
						</a>
					</li>
					<li>
						<a
							href="mailto:{CONTACT.email}"
							class="flex items-center gap-2 hover:text-white transition-colors"
						>
							<EnvelopeIcon class="w-4 h-4" />
							<span>{CONTACT.email}</span>
						</a>
					</li>
					<li>
						<SocialLink
							type="instagram"
							className="flex items-center gap-2 hover:text-white transition-colors"
						/>
					</li>
					<li class="pt-4 flex items-start gap-2">
						<MapPinIcon class="w-4 h-4 mt-0.5 flex-shrink-0" />
						<p class="text-sm">{m['footer.location']()}</p>
					</li>
				</ul>
				<div class="mt-4">
					<CzechRegionsMap size="small" />
				</div>
			</div>
		</div>

		<div class="border-t border-secondary-700 dark:border-secondary-800 pt-8">
			<div
				class="flex flex-col md:flex-row justify-between items-center gap-4 text-secondary-300 dark:text-secondary-400 text-sm"
			>
				<p>&copy; {currentYear} Stavební práce Honza & Richard. {m['footer.rights']()}.</p>
				<a href="/ochrana-osobnich-udaju" class="hover:text-white transition-colors">
					{m['footer.privacy']()}
				</a>
			</div>
		</div>
	</div>
</footer>
