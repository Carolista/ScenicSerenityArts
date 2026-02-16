/**
 * Header Component
 * Creates a reusable header with logo placeholder and navigation menu
 */

export function createHeader() {
	const header = document.createElement('header');

	// Create logo link
	const logoLink = document.createElement('a');
	logoLink.href = 'index.html';
	logoLink.className = 'logo-link';

	const logoImg = document.createElement('img');
	logoImg.src = 'assets/images/SSA-logo-white.png';
	logoImg.alt = 'Scenic Serenity Arts';

	logoLink.appendChild(logoImg);

	// Create navigation
	const nav = document.createElement('nav');
	const ul = document.createElement('ul');

	const navItems = [
		{ text: 'About', href: 'about.html' },
		{ text: 'Original Works', href: 'original-works.html' },
		{ text: 'Art Prints', href: 'art-prints.html' },
		{ text: 'Merchandise', href: 'merchandise.html' },
	];

	navItems.forEach(item => {
		const li = document.createElement('li');
		const a = document.createElement('a');
		a.href = item.href;
		a.textContent = item.text;
		li.appendChild(a);
		ul.appendChild(li);
	});

	nav.appendChild(ul);
	header.appendChild(logoLink);
	header.appendChild(nav);

	return header;
}

/**
 * Initialize header on page load
 * Adds the header to the body as the first element
 */
export function initHeader() {
	// Prevent duplicate headers
	if (document.querySelector('header')) {
		return;
	}

	const header = createHeader();
	document.body.prepend(header);
}
