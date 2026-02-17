/**
 * About Page Module
 * Handles the content and functionality for the About page
 */

import { setupHead } from '../utils/head.js';
import { initHeader } from '../components/header.js';
import { initFooter } from '../components/footer.js';

export function initAboutPage() {
	// Setup head elements
	setupHead({ title: 'About - Scenic Serenity Arts' });

	// Add page-specific class to body
	document.body.classList.add('about-page');

	// Initialize header
	initHeader();

	// Create main content
	const main = document.createElement('main');

	const heading = document.createElement('h1');
	heading.textContent = 'About the Artist';

	main.appendChild(heading);

	// About text paragraphs
	const paragraphs = [
		'Art is my late-night happy place.',
		'By day, I live in the world of logic and analysis as a software developer and instructor. By night, I trade syntax for salt-texture and code for color. My work is a bridge between these two worlds: the structured, mathematical patterns of geometry and the unpredictable, organic "blooms" of watercolor.',
		'Growing up near the ocean gave me a deep appreciation for the fluid rhythms of the coast, a theme that frequently resurfaces in my work even as I now find inspiration in the misty silhouettes of the Great Smoky Mountains in Chattanooga, Tennessee.',
		'In 2024, I made a major shift to turn my "occasional dabbling" into a daily practice. What began as a personal journey for the soul quickly grew into a prolific collection of paintings, fiber arts, and paper crafts. Scenic Serenity Arts was born out of a desire to share that joy with you.',
		'Every piece I create—from a hand-painted bookmark to a freeform knit scarf—is a celebration of the balance found when we plant our feet in both the analytical and the artistic.',
	];

	// Create and append paragraph elements
	paragraphs.forEach(text => {
		const p = document.createElement('p');
		p.textContent = text;
		main.appendChild(p);
	});

	const code = document.createElement('section');
	code.innerHTML = `<pre><code><span class="keyword">while</span> (world.isSpinning()) {
  me.codeByDay();
  me.paintByNight();
  me.createSerenity();
}</code></pre>`;
	main.appendChild(code);

	document.body.appendChild(main);

	// Initialize footer
	initFooter();
}

// Initialize page when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initAboutPage, { once: true });
} else {
	initAboutPage();
}

// <p>Software developer by trade, artist by soul. Finding the logic in the landscape.</p>
