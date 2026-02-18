/**
 * Media Element Component
 * Creates an image or video element based on file extension
 * Videos play on hover with a delay
 */

/**
 * Create a media element (image or video)
 * @param {Object} options - Media configuration options
 * @param {string} options.mediaSrc - URL of the media file
 * @param {string} [options.alt] - Alt text for accessibility
 * @returns {HTMLElement} The image or video element
 */
export function createMediaElement(options = {}) {
	const { mediaSrc, alt = '' } = options;

	if (!mediaSrc || mediaSrc.trim() === '') {
		throw new Error('Media element requires a mediaSrc');
	}

	// Determine media type from extension
	const extension = mediaSrc.split('.').pop().toLowerCase();
	const videoExtensions = ['mp4', 'webm', 'ogg', 'mov'];
	const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp'];

	if (videoExtensions.includes(extension)) {
		return createVideoElement(mediaSrc, alt);
	} else if (imageExtensions.includes(extension)) {
		return createImageElement(mediaSrc, alt);
	} else {
		// Default to image if unknown extension
		return createImageElement(mediaSrc, alt);
	}
}

/**
 * Create an image element
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text
 * @returns {HTMLImageElement}
 */
function createImageElement(src, alt) {
	const img = document.createElement('img');
	img.className = 'card-image';
	img.src = src;
	img.alt = alt;
	return img;
}

/**
 * Create a video element with hover behavior
 * @param {string} src - Video source URL
 * @param {string} alt - Accessibility label
 * @returns {HTMLVideoElement}
 */
function createVideoElement(src, alt) {
	const video = document.createElement('video');
	video.className = 'card-image';
	video.src = src;
	video.muted = true;
	video.playsInline = true;
	video.preload = 'auto';

	if (alt) {
		video.setAttribute('aria-label', alt);
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
		}, 250);
	};

	// Handle hover end
	const handleMouseLeave = () => {
		if (hoverTimer) {
			clearTimeout(hoverTimer);
			hoverTimer = null;
		}
		resetVideo();
	};

	// Store event handlers on the video element so parent can access them
	video._mediaHandlers = {
		mouseenter: handleMouseEnter,
		mouseleave: handleMouseLeave,
	};

	return video;
}
