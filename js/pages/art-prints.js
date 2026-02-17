/**
 * Art Prints Page Module
 * Handles the content and functionality for the Art Prints page
 */

import { setupHead } from '../utils/head.js';
import { initHeader } from '../components/header.js';
import { createCard } from '../components/card.js';

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
	paragraph.textContent = 'Bring the spirit of the mountains and the sea into your space. High-quality archival reproductions and paper goods designed for collectors and correspondents alike.';

	main.appendChild(heading);
	main.appendChild(paragraph);

	// Create card grid
	const cardGrid = document.createElement('div');
	cardGrid.className = 'card-grid';

	// Define card data
	const cardData = [
		{
			imageSrc: 'assets/images/SSA-logo-blue.png',
			imageAlt: 'Posters',
			title: 'Posters',
			subtitle: '(Subtitle)',
		},
		{
			imageSrc: 'assets/images/SSA-logo-blue.png',
			imageAlt: 'Cards',
			title: 'Cards',
			subtitle: '(Subtitle)',
		},
		{
			imageSrc: 'assets/images/SSA-logo-blue.png',
			imageAlt: 'Postcards',
			title: 'Postcards',
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
	document.addEventListener('DOMContentLoaded', initArtPrintsPage, {
		once: true,
	});
} else {
	initArtPrintsPage();
}
