/**
 * Video Card Component
 * Creates a card with a video that plays on hover
 * Video starts frozen on first frame, plays after 0.5s hover, freezes on last frame
 */

/**
 * Create a video card element
 * @param {Object} options - Card configuration options
 * @param {string} [options.videoSrc] - URL of the card video
 * @param {string} [options.imageAlt] - Alt text for accessibility
 * @param {string} [options.title] - Card title text
 * @param {string} [options.subtitle] - Card subtitle text
 * @param {string} [options.className] - Additional CSS class for the card
 * @param {string} [options.linkURL] - URL to link the card to
 * @returns {HTMLElement|string} The card element (wrapped in link if linkURL provided) or empty string if no content provided
 */
export function createVideoCard(options = {}) {
	try {
		const {
			videoSrc,
			imageAlt = '',
			title,
			subtitle,
			className = '',
			linkURL = '',
		} = options;

		// Check if all values are empty or blank
		const hasVideo = videoSrc && videoSrc.trim() !== '';
		const hasTitle = title && title.trim() !== '';
		const hasSubtitle = subtitle && subtitle.trim() !== '';
		const hasLinkURL = linkURL && linkURL.trim() !== '';

		if (!hasVideo && !hasTitle && !hasSubtitle) {
			throw new Error(
				'Video card component requires at least one of: videoSrc, title, or subtitle',
			);
		}

		// Create card container
		const card = document.createElement('div');
		card.className = `card ${className}`.trim();

		// Add video if src provided
		if (hasVideo) {
			const video = document.createElement('video');
			video.className = 'card-image';
			video.src = videoSrc;
			video.muted = true;
			video.playsInline = true;
			video.preload = 'auto';

			if (imageAlt) {
				video.setAttribute('aria-label', imageAlt);
			}

			let hoverTimer = null;
			let hasPlayed = false;

			// Reset to first frame
			const resetVideo = () => {
				video.currentTime = 0;
				video.pause();
				hasPlayed = false;
			};

			// Handle hover start
			const handleMouseEnter = () => {
				if (hasPlayed) return;

				hoverTimer = setTimeout(() => {
					if (!hasPlayed) {
						video.play();
						hasPlayed = true;
					}
				}, 300);
			};

			// Handle hover end
			const handleMouseLeave = () => {
				if (hoverTimer) {
					clearTimeout(hoverTimer);
					hoverTimer = null;
				}
				resetVideo();
			};

			// Freeze on last frame when video ends
			video.addEventListener('ended', () => {
				// Video naturally pauses on last frame
			});

			card.addEventListener('mouseenter', handleMouseEnter);
			card.addEventListener('mouseleave', handleMouseLeave);

			card.appendChild(video);
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
	} catch (error) {
		console.error('Error creating video card:', error.message);
		return '';
	}
}
