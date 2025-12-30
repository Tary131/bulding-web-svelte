export type Service = {
	slug: string;
	title: string;
	shortDescription: string;
	longDescription: string;
	benefits: string[];
	keywords: string[];
};

export const services: Service[] = [
	{
		slug: 'rekonstrukce-bytu-domu',
		title: 'Rekonstrukce bytů a domů',
		shortDescription: 'Kompletní rekonstrukce bytů a rodinných domů od projektu až po realizaci.',
		longDescription:
			'Nabízíme komplexní rekonstrukční práce pro byty i rodinné domy. Zajišťujeme kompletní servis od návrhu, přes povolení, až po finální realizaci. Specializujeme se na moderní a funkční řešení, která zvýší hodnotu vašeho nemovitosti.',
		benefits: [
			'Komplexní řešení od projektu po realizaci',
			'Zkušenosti s různými typy nemovitostí',
			'Respektujeme váš rozpočet a časové možnosti',
			'Používáme kvalitní materiály a osvědčené postupy',
			'Dokončení v dohodnutém termínu'
		],
		keywords: ['rekonstrukce', 'byt', 'dům', 'kompletní rekonstrukce', 'renovace']
	},
	{
		slug: 'zednicke-prace',
		title: 'Zednické práce',
		shortDescription: 'Profesionální zednické práce všech druhů - od drobných oprav po novostavby.',
		longDescription:
			'Provádíme veškeré zednické práce včetně zdění, omítek, betonářských prací a drobných staveb. Máme dlouholeté zkušenosti s různými typy materiálů a stavebních technologií.',
		benefits: [
			'Široký rozsah zednických prací',
			'Přesné a kvalitní provedení',
			'Dodržení termínů',
			'Použití moderních materiálů',
			'Čisté a bezpečné pracoviště'
		],
		keywords: ['zednické práce', 'zdění', 'omítky', 'beton', 'stavba']
	},
	{
		slug: 'obklady-dlazby',
		title: 'Obklady a dlažby',
		shortDescription: 'Pokládka obkladů a dlažeb v koupelnách, kuchyních a dalších prostorách.',
		longDescription:
			'Specializujeme se na pokládku obkladů a dlažeb v interiérech i exteriérech. Nabízíme široký výběr materiálů a vzorů, včetně poradenských služeb při výběru vhodného řešení pro váš prostor.',
		benefits: [
			'Precizní pokládka s důrazem na detaily',
			'Široký výběr materiálů a vzorů',
			'Odborné poradenství při výběru',
			'Dlouhodobá životnost provedení',
			'Esteticky dokonalý výsledek'
		],
		keywords: ['obklady', 'dlažby', 'koupelna', 'kuchyně', 'keramika']
	},
	{
		slug: 'sadrokartony',
		title: 'Sádrokartony',
		shortDescription: 'Montáž sádrokartonových příček, podhledů a dalších konstrukcí.',
		longDescription:
			'Provádíme montáž sádrokartonových konstrukcí včetně příček, podhledů, obkladů a dalších prvků. Nabízíme rychlé a čisté řešení pro rozdělení prostorů nebo úpravu stropů.',
		benefits: [
			'Rychlá a čistá montáž',
			'Flexibilní řešení prostorů',
			'Možnost integrace osvětlení',
			'Akustické a tepelné izolace',
			'Moderní a estetický vzhled'
		],
		keywords: ['sádrokartony', 'příčky', 'podhledy', 'GK', 'suchá výstavba']
	},
	{
		slug: 'fasady',
		title: 'Fasády',
		shortDescription: 'Zateplení a úprava fasád rodinných domů a dalších objektů.',
		longDescription:
			'Zajišťujeme kompletní práce na fasádách včetně zateplení, omítek a finální úpravy. Pomůžeme vám snížit náklady na vytápění a zároveň zlepšit vzhled vašeho domu.',
		benefits: [
			'Výrazné snížení nákladů na vytápění',
			'Zlepšení vzhledu objektu',
			'Dlouhodobá ochrana stavby',
			'Široký výběr finálních úprav',
			'Zvýšení hodnoty nemovitosti'
		],
		keywords: ['fasády', 'zateplení', 'omítky', 'ETICS', 'izolace']
	}
];

export const getServiceBySlug = (slug: string): Service | undefined => {
	return services.find((service) => service.slug === slug);
};

