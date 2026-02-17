/**
 * About Page Module
 * Handles the content and functionality for the About page
 */

import { setupHead } from '../utils/head.js';
import { initHeader } from '../components/header.js';

export function initAboutPage() {
	// Setup head elements
	setupHead({ title: 'About - Scenic Serenity Arts' });

	// Initialize header
	initHeader();

	// Create main content
	const main = document.createElement('main');

	const heading = document.createElement('h1');
	heading.textContent = 'About the Artist';

	const paragraph1 = document.createElement('p');
	paragraph1.textContent =
		'Scenic Serenity Arts is dedicated to bringing the tranquility of nature into your life through art.';

	const paragraph2 = document.createElement('p');
	paragraph2.textContent =
		'Each piece is carefully crafted to capture the essence of serene landscapes, offering a moment of peace in your daily life.';

	main.appendChild(heading);
	main.appendChild(paragraph1);
	main.appendChild(paragraph2);

	document.body.appendChild(main);
}

// Initialize page when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initAboutPage, { once: true });
} else {
	initAboutPage();
}
