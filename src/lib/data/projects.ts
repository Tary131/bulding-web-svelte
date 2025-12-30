export type Project = {
	id: string;
	title: string;
	location: string;
	type: string;
	summary: string;
	description?: string;
	beforeAfter: boolean;
	images: string[];
	services: string[];
	beforeImage?: string;
	afterImage?: string;
};

export const projects: Project[] = [
	{
		id: '1',
		title: 'Kompletní rekonstrukce bytu 3+kk',
		location: 'Praha 5',
		type: 'Rekonstrukce bytu',
		summary:
			'Kompletní rekonstrukce bytu včetně nových rozvodů, obkladů, dlažeb a sádrokartonových příček. Byt získal moderní a funkční dispozici.',
		description:
			'Provedli jsme kompletní rekonstrukci bytu 3+kk v Praze 5. Práce zahrnovaly demontáž starých rozvodů vody a elektřiny, novou elektroinstalaci a rozvody vody. Dále jsme provedli sádrokartonové příčky pro nové dispozice, obklady a dlažby v koupelně a kuchyni.',
		beforeAfter: true,
		beforeImage: '/images/before.webp',
		afterImage: '/images/after.webp',
		images: ['/images/projects/project-1-1.jpg', '/images/projects/project-1-2.jpg'],
		services: ['rekonstrukce-bytu-domu', 'obklady-dlazby', 'sadrokartony']
	},
	{
		id: '2',
		title: 'Zateplení a nová fasáda rodinného domu',
		location: 'Praha-východ',
		type: 'Fasády',
		summary:
			'Kompletní zateplení rodinného domu včetně nové fasády. Dům získal moderní vzhled a výrazně se snížily náklady na vytápění.',
		beforeAfter: true,
		beforeImage: '/images/before.webp',
		afterImage: '/images/after.webp',
		images: ['/images/projects/project-2-1.jpg', '/images/projects/project-2-2.jpg'],
		services: ['fasady']
	},
	{
		id: '3',
		title: 'Nová koupelna s obklady a dlažbami',
		location: 'Praha 10',
		type: 'Obklady a dlažby',
		summary:
			'Kompletní rekonstrukce koupelny včetně nových rozvodů, obkladů a dlažeb. Moderní design s důrazem na funkčnost.',
		beforeAfter: true,
		beforeImage: '/images/before.webp',
		afterImage: '/images/after.webp',
		images: ['/images/projects/project-3-1.jpg', '/images/projects/project-3-2.jpg'],
		services: ['obklady-dlazby']
	},
	{
		id: '4',
		title: 'Sádrokartonové příčky a podhledy',
		location: 'Praha 8',
		type: 'Sádrokartony',
		summary:
			'Rozdělení velkého prostoru pomocí sádrokartonových příček a úprava stropů podhledy s integrovaným osvětlením.',
		beforeAfter: false,
		images: ['/images/projects/project-4-1.jpg', '/images/projects/project-4-2.jpg'],
		services: ['sadrokartony']
	},
	{
		id: '5',
		title: 'Rekonstrukce kuchyně s novými obklady',
		location: 'Praha 6',
		type: 'Obklady a dlažby',
		summary:
			'Kompletní rekonstrukce kuchyně včetně nových obkladů, dlažeb a elektroinstalace. Funkční a estetické řešení.',
		beforeAfter: true,
		beforeImage: '/images/before.webp',
		afterImage: '/images/after.webp',
		images: ['/images/projects/project-5-1.jpg', '/images/projects/project-5-2.jpg'],
		services: ['obklady-dlazby', 'rekonstrukce-bytu-domu']
	}
];

export const getProjectById = (id: string): Project | undefined => {
	return projects.find((project) => project.id === id);
};

export const getProjectsByService = (serviceSlug: string): Project[] => {
	return projects.filter((project) => project.services.includes(serviceSlug));
};

