/**
 * Page Constants
 * Single source of truth for all page metadata
 */

/**
 * All pages configuration
 * @type {Array<{id: string, href: string, navText: string|null, heading: string, pageTitle: string, description: string}>}
 */
export const PAGES = [
	{
		id: 'home',
		href: 'index.html',
		navText: null, // Not shown in navigation
		heading: 'Welcome',
		pageTitle: 'Scenic Serenity Arts',
		description:
			'Scenic Serenity Arts — Where art illuminates the analytical,  and geology intersects with geometry. Explore a collection of intuitive art, fiber goods, and functional decor inspired by the organic rhythms of the Great Smoky Mountains and the Florida coast.',
	},
	{
		id: 'about',
		href: 'about.html',
		navText: 'About the Artist',
		heading: 'About the Artist',
		pageTitle: 'About - Scenic Serenity Arts',
		description: null, // About page has custom content structure
	},
	{
		id: 'original-works',
		href: 'original-works.html',
		navText: 'Original Works',
		heading: 'Original Works',
		pageTitle: 'Original Works - Scenic Serenity Arts',
		description:
			'One-of-a-kind creations born from the intersection of logic and flow. From watercolor fractals to hand-knitted geometry, these pieces are crafted to be as unique as the nature that inspired them.',
	},
	{
		id: 'art-prints',
		href: 'art-prints.html',
		navText: 'Art Prints & Stationery',
		heading: 'Art Prints & Stationery',
		pageTitle: 'Art Prints & Stationery - Scenic Serenity Arts',
		description:
			'Bring colorful abstract compositions and nature-inspired landscapes into your space with high-quality reproductions and paper goods designed for collectors and correspondents alike.',
	},
	{
		id: 'lifestyle',
		href: 'lifestyle.html',
		navText: 'Home & Lifestyle',
		heading: 'Home & Lifestyle',
		pageTitle: 'Home & Lifestyle - Scenic Serenity Arts',
		description:
			'Functional art for everyday life. Modern abstract designs, transformed into lifestyle essentials for your home and tech.',
	},
];

/**
 * Navigation items for header menus (derived from PAGES)
 * @type {Array<{text: string, href: string}>}
 */
export const NAV_ITEMS = PAGES.filter(page => page.navText).map(page => ({
	text: page.navText,
	href: page.href,
}));

/**
 * Get page metadata by ID
 * @param {string} id - Page identifier
 * @returns {Object|undefined} Page metadata object
 */
export function getPageById(id) {
	return PAGES.find(page => page.id === id);
}

/**
 * Get page metadata by href
 * @param {string} href - Page URL
 * @returns {Object|undefined} Page metadata object
 */
export function getPageByHref(href) {
	return PAGES.find(page => page.href === href);
}
