/**
 * Section Component
 * Creates a section with heading, optional description, and card grid
 */

import { createCard } from './card.js';

/**
 * Create a section element with heading, description, and cards
 * @param {Object} options - Section configuration options
 * @param {string} options.heading - Section heading text
 * @param {string} [options.description] - Optional description paragraph
 * @param {Array} options.cards - Array of card data objects
 * @returns {HTMLElement} The section element
 */
export function createSection(options = {}) {
	const { heading, description, cards = [] } = options;

	// Create section container
	const section = document.createElement('section');
	section.className = 'product-section';

	// Add heading if provided
	if (heading) {
		const h2 = document.createElement('h2');
		h2.textContent = heading;
		section.appendChild(h2);
	}

	// Add description if provided
	if (description) {
		const p = document.createElement('p');
		p.textContent = description;
		p.className = 'section-description';
		section.appendChild(p);
	}

	// Create card grid if cards provided
	if (cards.length > 0) {
		const cardGrid = document.createElement('div');
		cardGrid.className = 'card-grid';

		cards.forEach(cardData => {
			const card = createCard(cardData);
			if (card) {
				cardGrid.appendChild(card);
			}
		});

		section.appendChild(cardGrid);
	}

	return section;
}
