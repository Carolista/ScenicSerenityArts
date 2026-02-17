/**
 * Footer Component
 * Creates a sticky footer that stays at the bottom of the viewport
 */

/**
 * Create footer element
 * @returns {HTMLElement} The footer element
 */
export function createFooter() {
	const footer = document.createElement('footer');

	const currentYear = new Date().getFullYear();
	footer.innerHTML = `&copy; ${currentYear} Scenic Serenity Arts &bull; Chattanooga, TN`;

	return footer;
}

/**
 * Initialize and append footer to the body
 */
export function initFooter() {
	const footer = createFooter();
	document.body.appendChild(footer);
}
