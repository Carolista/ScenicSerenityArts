/**
 * Original Works Page Module
 * Handles the content and functionality for the Original Works page
 */

import { setupHead } from '../utils/head.js';
import { initHeader } from '../components/header.js';
import { initFooter } from '../components/footer.js';
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
		heading: 'Dimensional & Mixed Media',
		description:
			'Multi-dimensional landscapes blending the richness of watercolors with intricate paper-crafted layers.',
		cards: [
			{
				imageSrc: 'assets/images/SSA-logo-blue.png',
				imageAlt:
					'Hand-painted 3D shadow box showing a layered mountain sunset.',
				title: '3D Shadow Box Paintings',
				subtitle:
					'Hand-cut paper layers and rich watercolors artfully composed in a deep, high-quality frame.',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52170014',
			},
		],
	});

	// Original Paintings Section
	const originalPaintingsSection = createSection({
		heading: 'Original Paintings & Drawings',
		description:
			'Watercolors, acrylics, and pen-drawn originals exploring the physics of water and the structure of organic geometry.',
		cards: [
			{
				imageSrc: 'assets/images/SSA-logo-blue.png',
				imageAlt: 'Abstract Paintings',
				title: 'Abstract Paintings',
				subtitle:
					'One-of-a-kind studies of fluid dynamics, metallic fractals, and intuitive color blooms.',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52360344',
			},
			{
				imageSrc: 'assets/images/SSA-logo-blue.png',
				imageAlt: 'Graphic Art',
				title: 'Graphic Art',
				subtitle:
					'Bold, structured compositions where geometry meets hand-drawn precision and celebrates nature.',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52372347',
			},
			{
				imageSrc: 'assets/images/SSA-logo-blue.png',
				imageAlt: 'Nature Paintings',
				title: 'Nature Paintings',
				subtitle:
					'Atmospheric landscapes of the Smokies and the coast, captured in original watercolor.',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52158821',
			},
		],
	});

	// Bookmarks Section
	const bookmarksSection = createSection({
		heading: 'Bookmarks',
		description:
			'Miniature watercolor masterpieces finished with hand-drawn details for a delightful reading experience.',
		cards: [
			{
				imageSrc: 'assets/images/SSA-logo-blue.png',
				imageAlt: 'Abstract Bookmarks',
				title: 'Abstract Bookmarks',
				subtitle:
					'Functional fine art featuring unique watercolor fractals and shimmering metallic details.',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52182819',
			},
			{
				imageSrc: 'assets/images/SSA-logo-blue.png',
				imageAlt: 'Nature Bookmarks',
				title: 'Nature Bookmarks',
				subtitle:
					'Hand-painted mountain and coastal scenes in a collectible, miniature format.',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=57326833',
			},
		],
	});

	// Wearables Section
	const wearablesSection = createSection({
		heading: 'Textible & Fiber Arts',
		description:
			'One-of-a-kind accessories featuring intuitive, freeform geometric patterns.',
		cards: [
			{
				imageSrc: 'assets/images/SSA-logo-blue.png',
				imageAlt: 'Fingerless Mitts',
				title: 'Fingerless Mitts',
				subtitle:
					'Colorful, hand-knitted warmth for the wrists and hands—no two pairs are alike.',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52182559',
			},
			{
				imageSrc: 'assets/images/SSA-logo-blue.png',
				imageAlt: 'Hats',
				title: 'Hats',
				subtitle:
					'One-of-a-kind headwear crafted with intuitive colorwork and geometric textures.',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52158686',
			},
			{
				imageSrc: 'assets/images/SSA-logo-blue.png',
				imageAlt: 'Scarves',
				title: 'Scarves',
				subtitle:
					'Statement-piece neckwear featuring bold chevrons and organic, hand-knitted rhythms.',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52158592',
			},
		],
	});

	main.appendChild(shadowBoxSection);
	main.appendChild(originalPaintingsSection);
	main.appendChild(bookmarksSection);
	main.appendChild(wearablesSection);

	document.body.appendChild(main);

	// Initialize footer
	initFooter();
}

// Initialize page when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initOriginalWorksPage, {
		once: true,
	});
} else {
	initOriginalWorksPage();
}
