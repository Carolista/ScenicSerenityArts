/**
 * Merchandise Page Module
 * Handles the content and functionality for the Merchandise page
 */

import { setupHead } from '../utils/head.js';
import { initHeader } from '../components/header.js';
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
			'Durable protection featuring signature watercolor and fractal patterns.',
		cards: [
			{
				imageSrc: 'assets/images/SSA-logo-blue.png',
				imageAlt: 'MagSafe Phone Cases',
				title: 'MagSafe Phone Cases',
				subtitle: '(Subtitle)',
			},
			{
				imageSrc: 'assets/images/SSA-logo-blue.png',
				imageAlt: 'Snap Phone Cases',
				title: 'Snap Phone Cases',
				subtitle: '(Subtitle)',
			},
			{
				imageSrc: 'assets/images/SSA-logo-blue.png',
				imageAlt: 'Tough Phone Cases',
				title: 'Tough Phone Cases',
				subtitle: '(Subtitle)',
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
				subtitle: '(Subtitle)',
			},
			{
				imageSrc: 'assets/images/SSA-logo-blue.png',
				imageAlt: 'Clocks',
				title: 'Clocks',
				subtitle: '(Subtitle)',
			},
		],
	});

	main.appendChild(phoneCasesSection);
	main.appendChild(homeTechSection);

	document.body.appendChild(main);
}

// Initialize page when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initMerchandisePage, {
		once: true,
	});
} else {
	initMerchandisePage();
}
