/**
 * Merchandise Page Module
 * Handles the content and functionality for the Merchandise page
 */

import { setUpHead } from '../utils/head.js';
import { initHeader } from '../components/header.js';
import { initFooter } from '../components/footer.js';
import { createSection } from '../components/section.js';

export function initMerchandisePage() {
	// Setup head elements
	setUpHead({ title: 'Merchandise - Scenic Serenity Arts' });

	// Initialize header
	initHeader();

	// Create main content
	const main = document.createElement('main');
	main.id = 'main-content';

	const heading = document.createElement('h1');
	heading.textContent = 'Merchandise';

	const paragraph = document.createElement('p');
	paragraph.textContent =
		'Functional art for everyday life. Modern abstract designs, transformed into lifestyle essentials for your home and tech.';

	main.appendChild(heading);
	main.appendChild(paragraph);

	// Phone Cases Section
	const phoneCasesSection = createSection({
		heading: 'Phone Cases',
		description:
			'Durable protection for your phone featuring signature watercolor and organic patterns.',
		cards: [
			{
				mediaSrc: 'assets/videos/phone-case-magsafe.mp4',
				imageAlt: 'MagSafe Phone Cases',
				title: 'MagSafe Phone Cases',
				subtitle:
					'Precision-engineered cases with built-in magnets, blending modern tech with organic art.',
				buttonText: 'Shop Now',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52385803',
			},
			{
				mediaSrc: 'assets/videos/phone-case-snap.mp4',
				imageAlt: 'Snap Phone Cases',
				title: 'Snap Phone Cases',
				subtitle:
					'Sleek, slim-profile protection for with original artwork that catches the eye.',
				buttonText: 'Shop Now',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52373850',
			},
			{
				mediaSrc: 'assets/videos/phone-case-tough.mp4',
				imageAlt: 'Tough Phone Cases',
				title: 'Tough Phone Cases',
				subtitle:
					'Maximum protection with a dual-layer shell featuring vibrant, wrap-around artistic designs.',
				buttonText: 'Shop Now',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52373928',
			},
		],
	});

	// Home Tech Section
	const homeTechSection = createSection({
		heading: 'Home Tech',
		description:
			'Functional designs that turn everyday objects into artistic statements.',
		cards: [
			{
				mediaSrc: 'assets/videos/watch-band.mp4',
				imageAlt: 'Apple Watch Bands',
				title: 'Apple Watch Bands',
				subtitle:
					'High-quality vegan leather bands that turn your wearable tech into a portable work of art.',
				buttonText: 'Shop Now',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=56477203',
			},
			{
				mediaSrc: 'assets/videos/clock.mp4',
				imageAlt: 'Clocks',
				title: 'Clocks',
				subtitle:
					'Functional wall decor featuring signature abstract patterns for a pop of color in your home.',
				buttonText: 'Shop Now',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=56356386',
			},
		],
	});

	main.appendChild(phoneCasesSection);
	main.appendChild(homeTechSection);

	document.body.appendChild(main);

	// Initialize footer
	initFooter();
}

// Initialize page when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initMerchandisePage, {
		once: true,
	});
} else {
	initMerchandisePage();
}
