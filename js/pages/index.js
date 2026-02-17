/**
 * Home Page Module
 * Handles the content and functionality for the home/index page
 */

import { setupHead } from '../utils/head.js';
import { initHeader } from '../components/header.js';
import { createCard } from '../components/card.js';

export function initHomePage() {
	// Setup head elements
	setupHead({ title: 'Scenic Serenity Arts', includeAnalytics: true });

	// Initialize header
	initHeader();

	// Create main content
	const main = document.createElement('main');

	const heading = document.createElement('h1');
	heading.textContent = 'Welcome!';
	heading.id = 'welcome';

	const paragraph1 = document.createElement('p');
	paragraph1.textContent =
		'Welcome to Scenic Serenity Arts, where art meets nature.';

	const paragraph2 = document.createElement('p');
	paragraph2.textContent =
		'Explore our collection of original works, art prints, and unique merchandise inspired by serene landscapes.';

	main.appendChild(heading);
	main.appendChild(paragraph1);
	main.appendChild(paragraph2);

	// Create card grid
	const cardGrid = document.createElement('div');
	cardGrid.className = 'card-grid';

	// Define card data
	const cardData = [
		{
			imageSrc: 'assets/images/embrace-warmth-square.jpg',
			imageAlt: 'Card 1 image',
			title: 'Title 1',
			subtitle: 'Subtitle 1',
		},
		{
			imageSrc: 'assets/images/escape-into-art-square.png',
			imageAlt: 'Card 2 image',
			title: 'Title 2',
			subtitle: 'Subtitle 2',
		},
		{
			imageSrc: 'assets/images/watercolor-magic.jpg',
			imageAlt: 'Card 3 image',
			title: 'Title 3',
			subtitle: 'Subtitle 3',
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
	document.addEventListener('DOMContentLoaded', initHomePage, { once: true });
} else {
	initHomePage();
}
