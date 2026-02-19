/**
 * Card Grid Component
 * Creates a responsive grid container for cards
 */

/**
 * Create a card grid element
 * @param {Array<HTMLElement>} cards - Array of card elements to add to the grid
 * @returns {HTMLElement} The card grid container
 */
export function createCardGrid(cards = []) {
	if (!Array.isArray(cards)) {
		throw new Error('createCardGrid requires an array of cards');
	}

	const cardGrid = document.createElement('div');
	cardGrid.className = 'card-grid';

	cards.forEach(card => {
		if (card && card instanceof HTMLElement) {
			cardGrid.appendChild(card);
		}
	});

	return cardGrid;
}
