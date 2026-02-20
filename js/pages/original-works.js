/**
 * Original Works Page Module
 * Handles the content and functionality for the Original Works page
 */

import { setUpHead } from '../utils/head.js';
import { initHeader } from '../components/header.js';
import { initFooter } from '../components/footer.js';
import { createSection } from '../components/section.js';
import { getPageById } from '../constants/pages.js';

export function initOriginalWorksPage() {
	// Get page metadata
	const PAGE = getPageById('original-works');

	// Setup head elements
	setUpHead({ title: PAGE.pageTitle, description: PAGE.shortDesc });

	// Initialize header
	initHeader();

	// Create main content
	const main = document.createElement('main');
	main.id = 'main-content';

	const heading = document.createElement('h1');
	heading.textContent = PAGE.heading;

	const paragraph = document.createElement('p');
	paragraph.textContent = PAGE.longDesc;

	main.appendChild(heading);
	main.appendChild(paragraph);

	// Original Paintings Section
	const originalPaintingsSection = createSection({
		heading: 'Original Paintings & Drawings',
		description:
			'Watercolors, acrylics, and pen-drawn originals exploring the physics of water and the structure of organic geometry.',
		cards: [
			{
				mediaSrc: 'assets/videos/painting-abstract.mp4',
				imageAlt: 'Abstract Paintings',
				title: 'Abstract Paintings',
				subtitle:
					'One-of-a-kind studies of fluid dynamics, metallic fractals, and intuitive color blooms.',
				buttonText: 'Shop Now',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52360344',
				preload: 'auto', // First video - preload for faster LCP
			},
			{
				mediaSrc: 'assets/videos/painting-graphic.mp4',
				imageAlt: 'Graphic Art',
				title: 'Graphic Art',
				subtitle:
					'Bold, structured compositions where geometry meets hand-drawn precision and celebrates nature.',
				buttonText: 'Shop Now',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52372347',
			},
			{
				mediaSrc: 'assets/videos/painting-nature.mp4',
				imageAlt: 'Nature Paintings',
				title: 'Nature Paintings',
				subtitle:
					'Atmospheric landscapes of the Smokies and the coast, captured with vibrant watercolors.',
				buttonText: 'Shop Now',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52158821',
			},
		],
	});

	// Bookmarks Section
	const bookmarksSection = createSection({
		heading: 'Hand-Painted Bookmarks',
		description:
			'Mini-masterpieces of watercolors finished with hand-drawn details for an artful reading experience.',
		cards: [
			{
				mediaSrc: 'assets/videos/bookmark-abstract.mp4',
				imageAlt: 'Abstract Bookmarks',
				title: 'Abstract Bookmarks',
				subtitle:
					'Functional fine art featuring unique watercolor fractals and shimmering metallic details.',
				buttonText: 'Shop Now',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52182819',
			},
			{
				mediaSrc: 'assets/videos/bookmark-nature.mp4',
				imageAlt: 'Nature Bookmarks',
				title: 'Nature Bookmarks',
				subtitle:
					'Hand-painted mountain and coastal scenes in a collectible, miniature format.',
				buttonText: 'Shop Now',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=57326833',
			},
		],
	});

	// 3D Shadow Box Paintings Section
	const shadowBoxSection = createSection({
		heading: 'Dimensional Mixed Media',
		description:
			'Multi-dimensional landscapes blending the richness of watercolors with intricate paper-crafted layers.',
		cards: [
			{
				mediaSrc: 'assets/videos/shadow-box.mp4',
				imageAlt:
					'Hand-painted 3D shadow box showing a layered mountain sunset.',
				title: '3D Shadow Box Paintings',
				subtitle:
					'Hand-cut paper layers and rich watercolors artfully composed in a deep, high-quality frame.',
				buttonText: 'Shop Now',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52170014',
			},
		],
	});

	// Wearables Section
	const wearablesSection = createSection({
		heading: 'Fiber Arts',
		description:
			'One-of-a-kind accessories featuring nature-inspired geometric patterns.',
		cards: [
			{
				mediaSrc: 'assets/videos/fingerless-mitts.mp4',
				imageAlt: 'Fingerless Mitts',
				title: 'Fingerless Mitts',
				subtitle:
					'Colorful, hand-knitted warmth for the wrists and hands—no two pairs are alike.',
				buttonText: 'Shop Now',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52182559',
			},
			{
				mediaSrc: 'assets/videos/hat.mp4',
				imageAlt: 'Hats',
				title: 'Hats',
				subtitle:
					'One-of-a-kind headwear crafted with complementary colorwork and geometric textures.',
				buttonText: 'Shop Now',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52158686',
			},
			{
				mediaSrc: 'assets/videos/scarf.mp4',
				imageAlt: 'Scarves',
				title: 'Scarves',
				subtitle:
					'Statement-piece neckwear featuring striking patterns and soft, quality materials.',
				buttonText: 'Shop Now',
				linkURL:
					'https://www.etsy.com/shop/ScenicSerenityArts?ref=dashboard-header&section_id=52158592',
			},
		],
	});

	main.appendChild(originalPaintingsSection);
	main.appendChild(bookmarksSection);
	main.appendChild(shadowBoxSection);
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
