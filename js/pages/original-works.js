/**
 * Original Works Page Module
 * Handles the content and functionality for the Original Works page
 */

import { setupHead } from '../utils/head.js';
import { initHeader } from '../components/header.js';
import { createCard } from '../components/card.js';

export function initOriginalWorksPage() {
	// Setup head elements
	setupHead({ title: 'Original Works - Scenic Serenity Arts' });

	// Initialize header
	initHeader();

	// Create main content
	const main = document.createElement('main');

	const heading = document.createElement('h1');
	heading.textContent = 'Original Works';

	const paragraph = document.createElement('p');
	paragraph.textContent =
		'One-of-a-kind creations born from the intersection of logic and flow. From watercolor fractals to hand-knitted geometry, these pieces are crafted to be as unique as the nature that inspired them.';

	main.appendChild(heading);
	main.appendChild(paragraph);

	// Create card grid
	const cardGrid = document.createElement('div');
	cardGrid.className = 'card-grid';

	// Define card data
	const cardData = [
		{
			imageSrc: 'assets/images/SSA-logo-blue.png',
			imageAlt: 'Hand-painted 3D shadow box showing a layered mountain sunset.',
			title: '3D Shadow Box Paintings',
			subtitle: 'Multi-dimensional landscapes blending watercolor depth with intricate paper-crafted layers.',
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
