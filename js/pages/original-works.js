/**
 * Original Works Page Module
 * Handles the content and functionality for the Original Works page
 */

import { initHeader } from '../components/header.js';

export function initOriginalWorksPage() {
  // Initialize header
  initHeader();
  
  // Create main content
  const main = document.createElement('main');
  
  const heading = document.createElement('h1');
  heading.textContent = 'Original Works';
  
  const paragraph1 = document.createElement('p');
  paragraph1.textContent = 'Explore our collection of one-of-a-kind original artworks.';
  
  const paragraph2 = document.createElement('p');
  paragraph2.textContent = 'Each piece is carefully crafted to bring the serenity of scenic landscapes into your space.';
  
  main.appendChild(heading);
  main.appendChild(paragraph1);
  main.appendChild(paragraph2);
  
  document.body.appendChild(main);
}

// Initialize page when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initOriginalWorksPage, { once: true });
} else {
  initOriginalWorksPage();
}
