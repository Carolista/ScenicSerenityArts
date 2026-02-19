/**
 * Home Page Module
 * Handles the content and functionality for the home/index page
 */

import { setUpHead } from '../utils/head.js';
import { initHeader } from '../components/header.js';
import { initFooter } from '../components/footer.js';
import { createCard } from '../components/card.js';
import { createCardGrid } from '../components/card-grid.js';
import { getPageById } from '../constants/pages.js';

export function initHomePage() {
	// Get page metadata
	const PAGE = getPageById('home');

	// Setup head elements
	setUpHead({ title: PAGE.pageTitle });

	// Initialize header
	initHeader();

	// Create main content
	const main = document.createElement('main');
	main.id = 'main-content';

	const heading = document.createElement('h1');
	heading.textContent = PAGE.heading;
	heading.id = 'ssa-large';

	const paragraph = document.createElement('p');
	paragraph.textContent = PAGE.description;

	main.appendChild(heading);
	main.appendChild(paragraph);

	// Define card data
	const cardData = [
		{
			mediaSrc: 'assets/videos/original-works-montage.mp4',
			imageAlt:
				'Video montage of an original painting, a one-of-a-kind knit scarf, a hand-painted bookmark, and a set of 2 shadow box paintings',
			title: 'Original Works',
			subtitle:
				'Unique paintings, hand-painted bookmarks, 3D shadow boxes, and one-of-a-kind, wearable fiber arts.',
			buttonText: 'Learn More',
			linkURL: '../original-works.html',
		},
		{
			mediaSrc: 'assets/videos/art-prints-montage.mp4',
			imageAlt:
				'Video montage featuring a notebook, poster, and postcard from the collection of paper goods and prints',
			title: 'Art Prints & Stationery',
			subtitle:
				'Fine art prints, posters, and inspired paper goods capturing the serenity of land and sea.',
			buttonText: 'Learn More',
			linkURL: '../art-prints.html',
		},
		{
			mediaSrc: 'assets/videos/lifestyle-montage.mp4',
			imageAlt:
				'Montage of a cell phone case, wall clock, and Apple watch band',
			title: 'Lifestyle',
			subtitle:
				'Functional art for your daily adventures. Elevate your tech and home with vibrant abstract patterns.',
			buttonText: 'Learn More',
			linkURL: '../lifestyle.html',
		},
	];

	// Create cards and card grid
	const cards = cardData.map(data => createCard(data));
	const cardGrid = createCardGrid(cards);

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
