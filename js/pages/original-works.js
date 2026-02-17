/**
 * Original Works Page Module
 * Handles the content and functionality for the Original Works page
 */

import { initHeader } from '../components/header.js';
import { createCard } from '../components/card.js';

export function initOriginalWorksPage() {
	// Initialize header
	initHeader();

	// Create main content
	const main = document.createElement('main');

	const heading = document.createElement('h1');
	heading.textContent = 'Original Works';

	const paragraph1 = document.createElement('p');
	paragraph1.textContent =
		'Explore our collection of one-of-a-kind original artworks.';

	const paragraph2 = document.createElement('p');
	paragraph2.textContent =
		'Each piece is carefully crafted to bring the serenity of scenic landscapes into your space.';

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
			imageAlt: 'Shadow Box Paintings',
			title: 'Shadow Box Paintings',
			subtitle: '(Subtitle)',
		},
		{
			imageSrc: 'assets/images/SSA-logo-blue.png',
			imageAlt: 'Abstract Art',
			title: 'Abstract Art',
			subtitle: '(Subtitle)',
		},
		{
			imageSrc: 'assets/images/SSA-logo-blue.png',
			imageAlt: 'Nature Art',
			title: 'Nature Art',
			subtitle: '(Subtitle)',
		},
		{
			imageSrc: 'assets/images/SSA-logo-blue.png',
			imageAlt: 'Graphic Art',
			title: 'Graphic Art',
			subtitle: '(Subtitle)',
		},
		{
			imageSrc: 'assets/images/SSA-logo-blue.png',
			imageAlt: 'Abstract Bookmarks',
			title: 'Abstract Bookmarks',
			subtitle: '(Subtitle)',
		},
		{
			imageSrc: 'assets/images/SSA-logo-blue.png',
			imageAlt: 'Nature Bookmarks',
			title: 'Nature Bookmarks',
			subtitle: '(Subtitle)',
		},
		{
			imageSrc: 'assets/images/SSA-logo-blue.png',
			imageAlt: 'Hats',
			title: 'Hats',
			subtitle: '(Subtitle)',
		},
		{
			imageSrc: 'assets/images/SSA-logo-blue.png',
			imageAlt: 'Scarves',
			title: 'Scarves',
			subtitle: '(Subtitle)',
		},
		{
			imageSrc: 'assets/images/SSA-logo-blue.png',
			imageAlt: 'Fingerless Mitts',
			title: 'Fingerless Mitts',
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
	document.addEventListener('DOMContentLoaded', initOriginalWorksPage, {
		once: true,
	});
} else {
	initOriginalWorksPage();
}
