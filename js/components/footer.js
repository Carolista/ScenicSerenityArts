/**
 * Footer Component
 * Creates a sticky footer that stays at the bottom of the viewport
 */

import { createIconLink } from './icon-link.js';

/**
 * Create footer element
 * @returns {HTMLElement} The footer element
 */
export function createFooter() {
	const footer = document.createElement('footer');

	// Create social icons container
	const socialIcons = document.createElement('div');
	socialIcons.className = 'social-icons';

	// Create social media icon links
	const facebookLink = createIconLink({
		iconClass: 'fa-brands fa-facebook-f',
		url: 'https://www.facebook.com/ScenicSerenityArts/',
		tooltip: 'Facebook',
	});

	const instagramLink = createIconLink({
		iconClass: 'fa-brands fa-instagram',
		url: 'https://www.instagram.com/scenicserenityarts/',
		tooltip: 'Instagram',
	});

	const etsyLink = createIconLink({
		iconClass: 'fa-brands fa-etsy',
		url: 'https://www.scenicserenityarts.etsy.com',
		tooltip: 'Etsy',
	});

	socialIcons.appendChild(facebookLink);
	socialIcons.appendChild(instagramLink);
	socialIcons.appendChild(etsyLink);

	footer.appendChild(socialIcons);

	// Create copyright text
	const copyright = document.createElement('div');
	copyright.className = 'copyright';
	const currentYear = new Date().getFullYear();
	copyright.innerHTML = `&copy; ${currentYear} Scenic Serenity Arts &bull; Chattanooga, TN`;

	footer.appendChild(copyright);

	return footer;
}

/**
 * Initialize and append footer to the body
 */
export function initFooter() {
	const footer = createFooter();
	document.body.appendChild(footer);
}
