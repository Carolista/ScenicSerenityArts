/**
 * Media Element Component
 * Creates an image or video element based on file extension
 * Videos have device-appropriate interactions:
 * - Desktop: hover to play (250ms delay)
 * - Mobile: auto-play on scroll (50% visibility), press-and-hold to replay
 */

// Video interaction configuration constants
const VIDEO_CONFIG = {
	INTERSECTION_THRESHOLD: 0.5, // 50% visibility required to trigger playback
	LONG_PRESS_DURATION: 500, // milliseconds to hold before replay triggers
	HOVER_DELAY: 250, // milliseconds delay before hover playback
};

// Store media element handlers using WeakMap to avoid polluting DOM elements
const mediaHandlers = new WeakMap();

/**
 * Get event handlers for a media element
 * @param {HTMLElement} element - The media element
 * @returns {Object|null} The handlers object or null if none exist
 */
export function getMediaHandlers(element) {
	return mediaHandlers.get(element) || null;
}

/**
 * Create a media element (image or video)
 * @param {Object} options - Media configuration options
 * @param {string} options.mediaSrc - URL of the media file
 * @param {string} [options.alt] - Alt text for accessibility
 * @returns {HTMLImageElement|HTMLVideoElement} The image or video element
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
 * Create a video element with device-appropriate interaction
 * Desktop: hover to play
 * Mobile/Touch: auto-play on scroll into view (50% threshold), press-and-hold to replay
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

	// Detect touch device
	const isTouchDevice =
		'ontouchstart' in window || navigator.maxTouchPoints > 0;

	let hoverTimer = null;
	let hasPlayed = false;
	let hasEnded = false;

	// Reset to first frame
	const resetVideo = () => {
		video.currentTime = 0;
		video.pause();
		hasPlayed = false;
		hasEnded = false;
	};

	if (isTouchDevice) {
		// Mobile/Touch: Use Intersection Observer for scroll-based playback
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						// Video scrolled into view - play if hasn't played yet
						if (!hasPlayed) {
							video.play();
							hasPlayed = true;
						}
					} else {
						// Video scrolled out of view - reset
						resetVideo();
					}
				});
			},
			{ threshold: VIDEO_CONFIG.INTERSECTION_THRESHOLD }
		);

		// Track when video ends
		video.addEventListener('ended', () => {
			hasEnded = true;
		});

		// Press-and-hold to replay (triggers after 500ms while still pressing)
		let longPressTimer = null;
		let hasReplayed = false;
		const HOLD_THRESHOLD = VIDEO_CONFIG.LONG_PRESS_DURATION;

		const clearLongPressTimer = () => {
			if (longPressTimer) {
				clearTimeout(longPressTimer);
				longPressTimer = null;
			}
		};

		const handleTouchStart = e => {
			hasReplayed = false;

			// Only set timer if video has ended
			if (hasEnded) {
				longPressTimer = setTimeout(() => {
					// Replay immediately when threshold reached (while finger still down)
					e.preventDefault();
					video.currentTime = 0;
					video.play();
					hasEnded = false;
					hasReplayed = true;
				}, HOLD_THRESHOLD);
			}
		};

		const handleTouchEnd = e => {
			clearLongPressTimer();

			// Prevent navigation if we replayed the video
			if (hasReplayed) {
				e.preventDefault();
			}
		};

		const handleTouchCancel = () => {
			clearLongPressTimer();
		};

		// Store observer and handlers for parent card to use
		mediaHandlers.set(video, {
			touchstart: handleTouchStart,
			touchend: handleTouchEnd,
			touchcancel: handleTouchCancel,
			observer,
		});
	} else {
		// Desktop: Use hover behavior
		const handleMouseEnter = () => {
			if (hasPlayed) return;

			hoverTimer = setTimeout(() => {
				if (!hasPlayed) {
					video.play();
					hasPlayed = true;
				}
			}, VIDEO_CONFIG.HOVER_DELAY);
		};

		const handleMouseLeave = () => {
			if (hoverTimer) {
				clearTimeout(hoverTimer);
				hoverTimer = null;
			}
			resetVideo();
		};

		mediaHandlers.set(video, {
			mouseenter: handleMouseEnter,
			mouseleave: handleMouseLeave,
		});
	}

	return video;
}
