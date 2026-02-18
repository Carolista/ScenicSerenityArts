/**
 * Home Page Module
 * Handles the content and functionality for the home/index page
 */

import { setupHead } from '../utils/head.js';
import { initHeader } from '../components/header.js';
import { initFooter } from '../components/footer.js';
import { createCard } from '../components/card.js';

export function initHomePage() {
	// Setup head elements
	setupHead({ title: 'Scenic Serenity Arts', includeAnalytics: true });

	// Initialize header
	initHeader();

	// Create main content
	const main = document.createElement('main');

	const heading = document.createElement('h1');
	heading.textContent = 'Scenic Serenity Arts';
	heading.id = 'ssa-large';

	const paragraph = document.createElement('p');
	paragraph.textContent =
		'Where the wilderness meets the mathematical. Explore a collection of intuitive art, fiber goods, and functional decor inspired by the organic rhythms of the Great Smoky Mountains and the Atlantic coast.';

	main.appendChild(heading);
	main.appendChild(paragraph);

	// Create card grid
	const cardGrid = document.createElement('div');
	cardGrid.className = 'card-grid';

	// Define card data
	const cardData = [
		{
			mediaSrc: 'assets/images/logos/SSA-logo-blue.png',
			imageAlt:
				'A collection of original watercolor paintings and handmade geometric knitwear',
			title: 'Original Works',
			subtitle:
				'One-of-a-kind paintings, 3D shadow boxes, and wearable fiber arts defined by organic fractals.',
			linkURL: '../original-works.html',
		},
		{
			mediaSrc: 'assets/images/logos/SSA-logo-blue.png',
			imageAlt:
				'Fine art posters and greeting cards featuring stylized mountain and coastal landscapes',
			title: 'Art Prints & Stationery',
			subtitle:
				'Archival gallery prints and nature-inspired paper goods capturing the serenity of land and sea.',
			linkURL: '../art-prints.html',
		},
		{
			mediaSrc: 'assets/images/logos/SSA-logo-blue.png',
			imageAlt:
				'Modern lifestyle accessories including MagSafe cases and home decor with abstract art',
			title: 'Merchandise',
			subtitle:
				'Functional art for your daily adventures. Elevate your tech and home with signature geometric patterns.',
			linkURL: '../merchandise.html',
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

	// Initialize footer
	initFooter();
}

// Initialize page when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initHomePage, { once: true });
} else {
	initHomePage();
}
