/**
 * Page Constants
 * Single source of truth for all page metadata
 */

/**
 * All pages configuration
 * @type {Array<{id: string, href: string, navText: string|null, heading: string, pageTitle: string, shortDesc: string, longDesc: string}>}
 */
export const PAGES = [
	{
		id: 'home',
		href: 'index.html',
		navText: null, // Not shown in navigation
		heading: 'Welcome',
		pageTitle: 'Scenic Serenity Arts',
		shortDesc:
			'Original watercolor paintings, fiber arts, and functional decor inspired by the Great Smoky Mountains and Florida coast.',
		longDesc:
			'Scenic Serenity Arts — Where art illuminates the analytical,  and geology intersects with geometry. Explore a collection of intuitive art, fiber goods, and functional decor inspired by the organic rhythms of the Great Smoky Mountains and the Florida coast.',
	},
	{
		id: 'about',
		href: 'about.html',
		navText: 'About the Artist',
		heading: 'About the Artist',
		pageTitle: 'About - Scenic Serenity Arts',
		shortDesc:
			'Meet Caroline Jones, a software developer and artist creating original watercolor paintings, fiber arts, and functional decor.',
		longDesc:
			'Meet Caroline Jones, a software developer and artist creating original watercolor paintings, fiber arts, and functional decor inspired by the Great Smoky Mountains and Florida coast.',
	},
	{
		id: 'original-works',
		href: 'original-works.html',
		navText: 'Original Works',
		heading: 'Original Works',
		pageTitle: 'Original Works - Scenic Serenity Arts',
		shortDesc:
			'One-of-a-kind watercolor paintings, hand-painted bookmarks, 3D shadow boxes, and hand-knitted fiber arts by Caroline Jones.',
		longDesc:
			'One-of-a-kind creations born from the intersection of logic and flow. From watercolor fractals to hand-knitted geometry, these pieces are crafted to be as unique as the nature that inspired them.',
	},
	{
		id: 'art-prints',
		href: 'art-prints.html',
		navText: 'Art Prints & Stationery',
		heading: 'Art Prints & Stationery',
		pageTitle: 'Art Prints & Stationery - Scenic Serenity Arts',
		shortDesc:
			'High-quality art prints, posters, notecards, postcards, and notebooks featuring abstract compositions and nature-inspired landscapes.',
		longDesc:
			'Bring colorful abstract compositions and nature-inspired landscapes into your space with high-quality reproductions and paper goods designed for collectors and correspondents alike.',
	},
	{
		id: 'lifestyle',
		href: 'lifestyle.html',
		navText: 'Home & Lifestyle',
		heading: 'Home & Lifestyle',
		pageTitle: 'Home & Lifestyle - Scenic Serenity Arts',
		shortDesc:
			'Modern abstract art designs on phone cases, home decor, and tech accessories. Functional art for everyday life.',
		longDesc:
			'Functional art for everyday life. Modern abstract designs, transformed into lifestyle essentials for your home and tech.',
	},
];

/**
 * Validate that shortDesc is within SEO-recommended length
 * @param {string} shortDesc - Short description to validate
 * @param {number} [maxLength=160] - Maximum recommended length
 * @throws {Error} If shortDesc exceeds maxLength
 */
export function validateShortDesc(shortDesc, maxLength = 160) {
	if (shortDesc && shortDesc.length > maxLength) {
		throw new Error(
			`Short description exceeds ${maxLength} characters (${shortDesc.length}): "${shortDesc}"`
		);
	}
}

/**
 * Validate all page shortDesc values
 * @throws {Error} If any shortDesc exceeds recommended length
 */
export function validateAllPages() {
	PAGES.forEach(page => {
		if (page.shortDesc) {
			try {
				validateShortDesc(page.shortDesc);
			} catch (error) {
				throw new Error(`Page "${page.id}": ${error.message}`);
			}
		}
	});
}

// Validate all pages on module load (development check)
validateAllPages();

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
