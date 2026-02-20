/**
 * Art Prints Page Module
 * Handles the content and functionality for the Art Prints page
 */

import { setUpHead } from '../utils/head.js';
import { initHeader } from '../components/header.js';
import { initFooter } from '../components/footer.js';
import { createSection } from '../components/section.js';
import { getPageById } from '../constants/pages.js';

export function initArtPrintsPage() {
	// Get page metadata
	const PAGE = getPageById('art-prints');

	// Setup head elements
	setUpHead({ title: PAGE.pageTitle, description: PAGE.shortDesc });

	// Initialize header
	initHeader();

	// Create main content
	const main = document.createElement('main');
	main.id = 'main-content';

	const heading = document.createElement('h1');
	heading.textContent = PAGE.heading;

	const paragraph = document.createElement('p');
	paragraph.textContent = PAGE.longDesc;

	main.appendChild(heading);
	main.appendChild(paragraph);

	// Cards & Postcards Section
	const paperGoodsSection = createSection({
		heading: 'Paper Goods',
		description:
			'Inspire yourself and others with vibrant art reproductions designed for collecting or sharing.',
		cards: [
			{
				mediaSrc: 'assets/videos/notecard.mp4',
				imageAlt: 'Notecards',
				title: 'Notecards',
				subtitle:
					'Artistic notecards for every occasion, featuring original abstract art and natural patterns.',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52438522',
				preload: 'auto', // First video - preload for faster LCP
			},
			{
				mediaSrc: 'assets/videos/postcard.mp4',
				imageAlt: 'Postcards',
				title: 'Postcards',
				subtitle:
					'Small-scale prints based on original art. (Note: Currently exclusive to UK shipping.)',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52399089',
			},
			// {
			// 	mediaSrc: 'assets/images/logos/SSA-logo-blue.png',
			// 	imageAlt: 'Art Prints',
			// 	title: 'Art Prints',
			// 	subtitle: '(Subtitle)',
			//  linkURL: '',
			// },
			{
				mediaSrc: 'assets/videos/poster.mp4',
				imageAlt: 'Posters',
				title: 'Posters',
				subtitle:
					'High-quality reproductions of my most popular abstract watercolor paintings.',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52461235',
			},
		],
	});

	// Notebooks & Journals Section
	const writingSection = createSection({
		heading: 'Writing & Reflection',
		description:
			'Dedicated spaces for your thoughts, enclosed by organic and mathematical art.',
		cards: [
			{
				mediaSrc: 'assets/videos/notebook.mp4',
				imageAlt: 'Notebooks',
				title: 'Notebooks',
				subtitle:
					'Spiral notebooks featuring original art—perfect for your daily logs and ruminations.',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52384830',
			},
			// {
			// 	mediaSrc: 'assets/images/logos/SSA-logo-blue.png',
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
