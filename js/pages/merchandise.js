/**
 * Merchandise Page Module
 * Handles the content and functionality for the Merchandise page
 */

import { setupHead } from '../utils/head.js';
import { initHeader } from '../components/header.js';
import { initFooter } from '../components/footer.js';
import { createSection } from '../components/section.js';

export function initMerchandisePage() {
	// Setup head elements
	setupHead({ title: 'Merchandise - Scenic Serenity Arts' });

	// Initialize header
	initHeader();

	// Create main content
	const main = document.createElement('main');

	const heading = document.createElement('h1');
	heading.textContent = 'Merchandise';

	const paragraph = document.createElement('p');
	paragraph.textContent =
		'Functional art for everyday life. Signature patterns and modern geometric designs transformed into lifestyle essentials for your home and tech.';

	main.appendChild(heading);
	main.appendChild(paragraph);

	// Phone Cases Section
	const phoneCasesSection = createSection({
		heading: 'Phone Cases',
		description:
			'Durable protection for your phone featuring signature watercolor and organic patterns.',
		cards: [
			{
				imageSrc: 'assets/images/SSA-logo-blue.png',
				imageAlt: 'MagSafe Phone Cases',
				title: 'MagSafe Phone Cases',
				subtitle:
					'Precision-engineered cases with built-in magnets, blending modern tech with organic art.',
			},
			{
				imageSrc: 'assets/images/SSA-logo-blue.png',
				imageAlt: 'Snap Phone Cases',
				title: 'Snap Phone Cases',
				subtitle:
					'Sleek, slim-profile protection for a minimalist look that highlights original artwork.',
			},
			{
				imageSrc: 'assets/images/SSA-logo-blue.png',
				imageAlt: 'Tough Phone Cases',
				title: 'Tough Phone Cases',
				subtitle:
					'Maximum protection with a dual-layer shell featuring vibrant, wrap-around artistic designs.',
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
				imageSrc: 'assets/images/SSA-logo-blue.png',
				imageAlt: 'Apple Watch Bands',
				title: 'Apple Watch Bands',
				subtitle:
					'High-quality vegan leather bands that turn your wearable tech into a piece of watercolor art.',
			},
			{
				imageSrc: 'assets/images/SSA-logo-blue.png',
				imageAlt: 'Clocks',
				title: 'Clocks',
				subtitle:
					'Functional wall decor featuring signature abstract patterns for pop of color or shimmery elegance in your home.',
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
