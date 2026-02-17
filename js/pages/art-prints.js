/**
 * Art Prints Page Module
 * Handles the content and functionality for the Art Prints page
 */

import { setupHead } from '../utils/head.js';
import { initHeader } from '../components/header.js';
import { initFooter } from '../components/footer.js';
import { createSection } from '../components/section.js';

export function initArtPrintsPage() {
	// Setup head elements
	setupHead({ title: 'Art Prints - Scenic Serenity Arts' });

	// Initialize header
	initHeader();

	// Create main content
	const main = document.createElement('main');

	const heading = document.createElement('h1');
	heading.textContent = 'Art Prints & Stationery';

	const paragraph = document.createElement('p');
	paragraph.textContent =
		'Bring the spirit of the mountains and the sea into your space. High-quality archival reproductions and paper goods designed for collectors and correspondents alike.';

	main.appendChild(heading);
	main.appendChild(paragraph);

	// Cards & Postcards Section
	const paperGoodsSection = createSection({
		heading: 'Paper Goods',
		description:
			'Miniature art for collecting or sending, inspired by the beauty of the wilderness.',
		cards: [
			{
				imageSrc: 'assets/images/SSA-logo-blue.png',
				imageAlt: 'Cards',
				title: 'Cards',
				subtitle:
					'Artistic greeting cards for every occasion, featuring original art inspired by the beauty of the natural world.',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52438522',
			},
			{
				imageSrc: 'assets/images/SSA-logo-blue.png',
				imageAlt: 'Postcards',
				title: 'Postcards',
				subtitle:
					'Small-scale prints based on original art. (Note: Currently exclusive to UK shipping.)',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52399089',
			},
			// {
			// 	imageSrc: 'assets/images/SSA-logo-blue.png',
			// 	imageAlt: 'Art Prints',
			// 	title: 'Art Prints',
			// 	subtitle: '(Subtitle)',
			//  linkURL: '',
			// },
			{
				imageSrc: 'assets/images/SSA-logo-blue.png',
				imageAlt: 'Posters',
				title: 'Posters',
				subtitle:
					'Archival-quality gallery reproductions of my most popular watercolor landscapes.',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52461235',
			},
		],
	});

	// Notebooks & Journals Section
	const writingSection = createSection({
		heading: 'Writing & Reflection',
		description:
			'Hardcover spaces for your thoughts, wrapped in organic and mathematical art.',
		cards: [
			{
				imageSrc: 'assets/images/SSA-logo-blue.png',
				imageAlt: 'Notebooks',
				title: 'Notebooks',
				subtitle:
					'Hardcover spiral notebooks featuring original art—perfect for your daily logs and ruminations.',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52384830',
			},
			// {
			// 	imageSrc: 'assets/images/SSA-logo-blue.png',
			// 	imageAlt: 'Journals',
			// 	title: 'Journals',
			// 	subtitle: 'Premium bound journals designed to protect your thoughts with a cover of serene, abstract art.',
			//     linkURL: '',
			// },
		],
	});

	main.appendChild(paperGoodsSection);
	main.appendChild(writingSection);

	document.body.appendChild(main);

	// Initialize footer
	initFooter();
}

// Initialize page when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initArtPrintsPage, {
		once: true,
	});
} else {
	initArtPrintsPage();
}
