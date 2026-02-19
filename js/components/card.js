/**
 * Card Component
 * Creates a flexible card with optional media, title, and subtitle
 * Adapts to the layout of its container
 */

import { createMediaElement, getMediaHandlers } from './media-element.js';

/**
 * Create a card element
 * @param {Object} options - Card configuration options
 * @param {string} [options.mediaSrc] - URL of the card media (image or video)
 * @param {string} [options.imageAlt] - Alt text for the media
 * @param {string} [options.title] - Card title text
 * @param {string} [options.subtitle] - Card subtitle text
 * @param {string} [options.className] - Additional CSS class for the card
 * @param {string} [options.linkURL] - URL to link the card to
 * @returns {HTMLElement|HTMLAnchorElement} The card element (wrapped in link if linkURL provided)
 */
export function createCard(options = {}) {
	const {
		mediaSrc,
		imageAlt = '',
		title,
		subtitle,
		className = '',
		linkURL = '',
	} = options;

	// Check if all values are empty or blank
	const hasMedia = mediaSrc && mediaSrc.trim() !== '';
	const hasTitle = title && title.trim() !== '';
	const hasSubtitle = subtitle && subtitle.trim() !== '';
	const hasLinkURL = linkURL && linkURL.trim() !== '';

	if (!hasMedia && !hasTitle && !hasSubtitle) {
		throw new Error(
			'Card component requires at least one of: mediaSrc, title, or subtitle'
		);
	}

	// Create card container
	const card = document.createElement('div');
	card.className = `card ${className}`.trim();

	// Add media if src provided
	if (hasMedia) {
		const media = createMediaElement({
			mediaSrc,
			alt: imageAlt,
		});

		// If media has event handlers (video), attach them appropriately
		const handlers = getMediaHandlers(media);
		if (handlers) {
			// Desktop: attach hover handlers to card
			if (handlers.mouseenter) {
				card.addEventListener('mouseenter', handlers.mouseenter);
				card.addEventListener('mouseleave', handlers.mouseleave);
			}

			// Mobile: attach touch handlers to card for press-and-hold replay
			if (handlers.touchstart) {
				card.addEventListener('touchstart', handlers.touchstart);
				card.addEventListener('touchend', handlers.touchend);
				card.addEventListener('touchcancel', handlers.touchcancel);
			}

			// Start Intersection Observer if present
			if (handlers.observer) {
				handlers.observer.observe(media);
			}
		}

		card.appendChild(media);
	}

	// Add text content if title or subtitle provided
	if (hasTitle || hasSubtitle) {
		const content = document.createElement('div');
		content.className = 'card-content';

		if (hasTitle) {
			const titleElement = document.createElement('h3');
			titleElement.className = 'card-title';
			titleElement.textContent = title;
			content.appendChild(titleElement);
		}

		if (hasSubtitle) {
			const subtitleElement = document.createElement('p');
			subtitleElement.className = 'card-subtitle';
			subtitleElement.textContent = subtitle;
			content.appendChild(subtitleElement);
		}

		card.appendChild(content);
	}

	// Wrap card in link if linkURL provided
	if (hasLinkURL) {
		const link = document.createElement('a');
		link.href = linkURL;

		// Add title attribute for tooltip
		if (imageAlt) {
			link.title = imageAlt;
		}

		// Add target="_blank" for external links
		const isExternal =
			linkURL.startsWith('http://') || linkURL.startsWith('https://');
		if (isExternal) {
			link.target = '_blank';
			link.rel = 'noopener noreferrer';
		}

		link.appendChild(card);
		return link;
	}

	return card;
}
