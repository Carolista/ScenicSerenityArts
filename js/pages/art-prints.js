/**
 * Art Prints Page Module
 * Handles the content and functionality for the Art Prints page
 */

import { setupHead } from '../utils/head.js';
import { initHeader } from '../components/header.js';
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
	const cardsSection = createSection({
		heading: 'Cards & Postcards',
		description:
			'Miniature art for collecting or sending, inspired by the beauty of the wilderness.',
		cards: [
			{
				imageSrc: 'assets/images/SSA-logo-blue.png',
				imageAlt: 'Cards',
				title: 'Cards',
				subtitle: '',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52438522',
			},
			{
				imageSrc: 'assets/images/SSA-logo-blue.png',
				imageAlt: 'Postcards',
				title: 'Postcards (UK only)',
				subtitle: '',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52399089',
			},
		],
	});

	// Art Prints & Posters Section
	const printsSection = createSection({
		heading: 'Art Prints & Posters',
		description:
			'Premium archival reproductions that bring a modern gallery feel to any room.',
		cards: [
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
				subtitle: '(Subtitle)',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52461235',
			},
		],
	});

	// Notebooks & Journals Section
	const notebooksSection = createSection({
		heading: 'Notebooks & Journals',
		description:
			'Hardcover spaces for your thoughts, wrapped in organic and mathematical art.',
		cards: [
			{
				imageSrc: 'assets/images/SSA-logo-blue.png',
				imageAlt: 'Notebooks',
				title: 'Notebooks',
				subtitle: '(Subtitle)',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52384830',
			},
			// {
			// 	imageSrc: 'assets/images/SSA-logo-blue.png',
			// 	imageAlt: 'Journals',
			// 	title: 'Journals',
			// 	subtitle: '(Subtitle)',
			//     linkURL: '',
			// },
		],
	});

	main.appendChild(cardsSection);
	main.appendChild(printsSection);
	main.appendChild(notebooksSection);

	document.body.appendChild(main);
}

// Initialize page when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initArtPrintsPage, {
		once: true,
	});
} else {
	initArtPrintsPage();
}
