/**
 * Section Component
 * Creates a section with heading, optional description, and card grid
 */

import { createCard } from './card.js';
import { createCardGrid } from './card-grid.js';

/**
 * Create a section element with heading, description, and cards
 * @param {Object} options - Section configuration options
 * @param {string} options.heading - Section heading text
 * @param {string} [options.description] - Optional description paragraph
 * @param {Array<{mediaSrc?: string, imageAlt?: string, title?: string, subtitle?: string, className?: string, linkURL?: string}>} options.cards - Array of card configuration objects
 * @returns {HTMLElement} The section element
 */
export function createSection(options = {}) {
	const { heading, description, cards = [] } = options;

	// Validate that section has content
	if (!heading && !description && cards.length === 0) {
		throw new Error(
			'Section requires at least heading, description, or cards'
		);
	}

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
		const cardElements = cards
			.map(cardData => {
				try {
					return createCard(cardData);
				} catch (error) {
					console.error('Error creating card:', error.message);
					return null;
				}
			})
			.filter(card => card !== null);

		if (cardElements.length > 0) {
			const cardGrid = createCardGrid(cardElements);
			section.appendChild(cardGrid);
		}
	}

	return section;
}
