/**
 * Original Works Page Module
 * Handles the content and functionality for the Original Works page
 */

import { setupHead } from '../utils/head.js';
import { initHeader } from '../components/header.js';
import { createSection } from '../components/section.js';

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

	// 3D Shadow Box Paintings Section
	const shadowBoxSection = createSection({
		heading: '3D Shadow Box Paintings',
		description:
			'Multi-dimensional landscapes blending watercolor depth with intricate paper-crafted layers.',
		cards: [
			{
				imageSrc: 'assets/images/SSA-logo-blue.png',
				imageAlt:
					'Hand-painted 3D shadow box showing a layered mountain sunset.',
				title: '3D Shadow Box Paintings',
				subtitle: '(Subtitle)',
			},
		],
	});

	// Original Paintings Section
	const originalPaintingsSection = createSection({
		heading: 'Original Paintings & Drawings',
		description: 'Watercolors, acrylics, and pen-drawn originals exploring the physics of water and the structure of geometry.',
		cards: [
			{
				imageSrc: 'assets/images/SSA-logo-blue.png',
				imageAlt: 'Abstract Paintings',
				title: 'Abstract Paintings',
				subtitle: '(Subtitle)',
			},
			{
				imageSrc: 'assets/images/SSA-logo-blue.png',
				imageAlt: 'Nature Paintings',
				title: 'Nature Paintings',
				subtitle: '(Subtitle)',
			},
			{
				imageSrc: 'assets/images/SSA-logo-blue.png',
				imageAlt: 'Graphic Art',
				title: 'Graphic Art',
				subtitle: '(Subtitle)',
			},
		],
	});

	// Bookmarks Section
	const bookmarksSection = createSection({
		heading: 'Bookmarks',
		description: 'Miniature watercolor masterpieces finished with hand-drawn details.',
		cards: [
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
		],
	});

	// Wearables Section
	const wearablesSection = createSection({
		heading: 'Wearables',
		description: 'One-of-a-kind accessories featuring intuitive, freeform geometric patterns.',
		cards: [
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
		],
	});

	main.appendChild(shadowBoxSection);
	main.appendChild(originalPaintingsSection);
	main.appendChild(bookmarksSection);
	main.appendChild(wearablesSection);

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
