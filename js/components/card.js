/**
 * Card Component
 * Creates a flexible card with optional image, title, and subtitle
 * Adapts to the layout of its container
 */

/**
 * Create a card element
 * @param {Object} options - Card configuration options
 * @param {string} [options.imageSrc] - URL of the card image
 * @param {string} [options.imageAlt] - Alt text for the image
 * @param {string} [options.title] - Card title text
 * @param {string} [options.subtitle] - Card subtitle text
 * @param {string} [options.className] - Additional CSS class for the card
 * @returns {HTMLElement|string} The card element or empty string if no content provided
 */
export function createCard(options = {}) {
	try {
		const {
			imageSrc,
			imageAlt = '',
			title,
			subtitle,
			className = '',
		} = options;

		// Check if all values are empty or blank
		const hasImage = imageSrc && imageSrc.trim() !== '';
		const hasTitle = title && title.trim() !== '';
		const hasSubtitle = subtitle && subtitle.trim() !== '';

		if (!hasImage && !hasTitle && !hasSubtitle) {
			throw new Error(
				'Card component requires at least one of: imageSrc, title, or subtitle',
			);
		}

		// Create card container
		const card = document.createElement('div');
		card.className = `card ${className}`.trim();

		// Add image if src provided
		if (hasImage) {
			const img = document.createElement('img');
			img.className = 'card-image';
			img.src = imageSrc;
			img.alt = imageAlt;
			card.appendChild(img);
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

		return card;
	} catch (error) {
		console.error('Error creating card:', error.message);
		return '';
	}
}
