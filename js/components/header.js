/**
 * Header Component
 * Creates a reusable header with logo placeholder and navigation menu
 */

import { NAV_ITEMS } from '../constants/pages.js';

/**
 * Create mobile navigation modal
 * @returns {HTMLElement} The mobile nav modal element
 */
function createMobileNav() {
	const modal = document.createElement('div');
	modal.className = 'mobile-nav-modal';
	modal.setAttribute('role', 'dialog');
	modal.setAttribute('aria-modal', 'true');
	modal.setAttribute('aria-label', 'Navigation menu');

	// Close button
	const closeBtn = document.createElement('button');
	closeBtn.className = 'mobile-nav-close';
	closeBtn.innerHTML = '<i class="fa fa-times"></i>';
	closeBtn.setAttribute('aria-label', 'Close menu');

	// Navigation items
	const ul = document.createElement('ul');

	NAV_ITEMS.forEach(item => {
		const li = document.createElement('li');
		const a = document.createElement('a');
		a.href = item.href;
		a.textContent = item.text;
		li.appendChild(a);
		ul.appendChild(li);
	});

	modal.appendChild(closeBtn);
	modal.appendChild(ul);

	// Close modal on click
	closeBtn.addEventListener('click', () => {
		modal.classList.remove('active');
	});

	// Close modal when clicking outside navigation items
	modal.addEventListener('click', e => {
		if (e.target === modal) {
			modal.classList.remove('active');
		}
	});

	return modal;
}

/**
 * Create header element
 * @returns {HTMLElement} The header element
 */
export function createHeader() {
	const header = document.createElement('header');

	// Create skip link for accessibility
	const skipLink = document.createElement('a');
	skipLink.href = '#main-content';
	skipLink.className = 'skip-link';
	skipLink.textContent = 'Skip to main content';
	header.appendChild(skipLink);

	// Create logo link
	const logoLink = document.createElement('a');
	logoLink.href = 'index.html';
	logoLink.className = 'logo-link';

	const logoImg = document.createElement('img');
	logoImg.src = 'assets/images/logos/SSA-logo-white.png';
	logoImg.alt = 'Scenic Serenity Arts';
	// Set dimensions to prevent CLS - CSS controls actual display size
	logoImg.width = 300;
	logoImg.height = 100;

	logoLink.appendChild(logoImg);

	// Create desktop navigation
	const nav = document.createElement('nav');
	const ul = document.createElement('ul');

	NAV_ITEMS.forEach(item => {
		const li = document.createElement('li');
		const a = document.createElement('a');
		a.href = item.href;
		a.textContent = item.text;
		li.appendChild(a);
		ul.appendChild(li);
	});

	nav.appendChild(ul);

	// Create hamburger menu button
	const hamburger = document.createElement('button');
	hamburger.className = 'hamburger-menu';
	hamburger.innerHTML = '<i class="fa fa-bars"></i>';
	hamburger.setAttribute('aria-label', 'Open menu');

	header.appendChild(logoLink);
	header.appendChild(nav);
	header.appendChild(hamburger);

	return header;
}

/**
 * Append header to the document body
 * @param {HTMLElement} header - The header element to append
 */
function appendHeader(header) {
	document.body.prepend(header);
}

/**
 * Append mobile navigation modal to the document body
 * @param {HTMLElement} mobileNav - The mobile nav element to append
 */
function appendMobileNav(mobileNav) {
	document.body.appendChild(mobileNav);
}

/**
 * Setup event handlers for mobile navigation
 * @param {HTMLElement} header - The header element
 * @param {HTMLElement} mobileNav - The mobile nav modal element
 * @returns {Function} Cleanup function to remove event listeners
 */
function setUpMobileNavHandlers(header, mobileNav) {
	const hamburger = header.querySelector('.hamburger-menu');
	const closeBtn = mobileNav.querySelector('.mobile-nav-close');

	// Function to open mobile nav
	function openMobileNav() {
		mobileNav.classList.add('active');
		// Focus the close button when modal opens
		closeBtn.focus();
		// Trap focus within modal
		document.addEventListener('keydown', handleKeyDown);
	}

	// Function to close mobile nav
	function closeMobileNav() {
		mobileNav.classList.remove('active');
		// Return focus to hamburger button
		hamburger.focus();
		// Remove focus trap
		document.removeEventListener('keydown', handleKeyDown);
	}

	// Handle keyboard navigation in modal
	function handleKeyDown(e) {
		// Close on Escape key
		if (e.key === 'Escape') {
			closeMobileNav();
			return;
		}

		// Focus trap: cycle focus within modal
		if (e.key === 'Tab') {
			const focusableElements =
				mobileNav.querySelectorAll('button, a[href]');
			const firstElement = focusableElements[0];
			const lastElement = focusableElements[focusableElements.length - 1];

			// If shift+tab on first element, go to last
			if (e.shiftKey && document.activeElement === firstElement) {
				e.preventDefault();
				lastElement.focus();
			}
			// If tab on last element, go to first
			else if (!e.shiftKey && document.activeElement === lastElement) {
				e.preventDefault();
				firstElement.focus();
			}
		}
	}

	// Open modal on hamburger click
	hamburger.addEventListener('click', openMobileNav);

	// Close modal on close button click
	closeBtn.addEventListener('click', closeMobileNav);

	// Close modal on link click (navigate to new page)
	const mobileNavLinks = mobileNav.querySelectorAll('a');
	mobileNavLinks.forEach(link => {
		link.addEventListener('click', closeMobileNav);
	});

	// Return cleanup function
	return function cleanup() {
		hamburger.removeEventListener('click', openMobileNav);
		closeBtn.removeEventListener('click', closeMobileNav);
		document.removeEventListener('keydown', handleKeyDown);
		mobileNavLinks.forEach(link => {
			link.removeEventListener('click', closeMobileNav);
		});
	};
}

/**
 * Initialize header and mobile navigation
 * Creates header and mobile nav, appends them to DOM, and sets up event handlers
 * @returns {Function|null} Cleanup function to remove event listeners, or null if header already exists
 */
export function initHeader() {
	// Prevent duplicate headers
	if (document.querySelector('header')) {
		return null;
	}

	const header = createHeader();
	appendHeader(header);

	const mobileNav = createMobileNav();
	appendMobileNav(mobileNav);

	const cleanup = setUpMobileNavHandlers(header, mobileNav);

	return cleanup;
}
