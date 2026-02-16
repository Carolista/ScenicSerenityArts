/**
 * Home Page Module
 * Handles the content and functionality for the home/index page
 */

import { initHeader } from '../components/header.js';

export function initHomePage() {
	// Initialize header
	initHeader();

	// Create main content
	const main = document.createElement('main');

	const heading = document.createElement('h1');
	heading.textContent = 'Scenic Serenity Arts';

	const paragraph1 = document.createElement('p');
	paragraph1.textContent =
		'Welcome to Scenic Serenity Arts, where art meets nature.';

	const paragraph2 = document.createElement('p');
	paragraph2.textContent =
		'Explore our collection of original works, art prints, and unique merchandise inspired by serene landscapes.';

	main.appendChild(heading);
	main.appendChild(paragraph1);
	main.appendChild(paragraph2);

	document.body.appendChild(main);
}

// Initialize page when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initHomePage, { once: true });
} else {
	initHomePage();
}
