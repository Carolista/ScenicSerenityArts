/**
 * Merchandise Page Module
 * Handles the content and functionality for the Merchandise page
 */

import { setupHead } from '../utils/head.js';
import { initHeader } from '../components/header.js';
import { createCard } from '../components/card.js';

export function initMerchandisePage() {
	// Setup head elements
	setupHead({ title: 'Merchandise - Scenic Serenity Arts' });

	// Initialize header
	initHeader();

	// Create main content
	const main = document.createElement('main');

	const heading = document.createElement('h1');
	heading.textContent = 'Merchandise';

	const paragraph1 = document.createElement('p');
	paragraph1.textContent = 'Shop our unique merchandise collection.';

	const paragraph2 = document.createElement('p');
	paragraph2.textContent =
		'From mugs to tote bags, find the perfect item featuring our scenic artwork.';

	main.appendChild(heading);
	main.appendChild(paragraph1);
	main.appendChild(paragraph2);

	// Create card grid
	const cardGrid = document.createElement('div');
	cardGrid.className = 'card-grid';

	// Define card data
	const cardData = [
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
		{
			imageSrc: 'assets/images/SSA-logo-blue.png',
			imageAlt: 'Notebooks & Journals',
			title: 'Notebooks & Journals',
			subtitle: '(Subtitle)',
		},
	];

	// Create cards
	cardData.forEach(data => {
		const card = createCard(data);
		if (card) {
			cardGrid.appendChild(card);
		}
	});

	main.appendChild(cardGrid);

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
