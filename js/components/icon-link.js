/**
 * Icon Link Component
 * Creates a Font Awesome icon wrapped in an external link with tooltip
 */

/**
 * Create an icon link element
 * @param {Object} options - Icon link configuration options
 * @param {string} options.iconClass - Font Awesome icon class (e.g., 'fa-brands fa-facebook-f')
 * @param {string} options.url - External URL for the link
 * @param {string} options.tooltip - Tooltip text (site name)
 * @returns {HTMLElement} The anchor element containing the icon
 */
export function createIconLink(options = {}) {
	const { iconClass, url, tooltip } = options;

	if (!iconClass || !url) {
		throw new Error('Icon link requires iconClass and url');
	}

	const link = document.createElement('a');
	link.href = url;
	link.target = '_blank';
	link.rel = 'noopener noreferrer';
	link.className = 'icon-link';

	if (tooltip) {
		link.title = tooltip;
	}

	const icon = document.createElement('i');
	icon.className = iconClass;

	link.appendChild(icon);

	return link;
}
