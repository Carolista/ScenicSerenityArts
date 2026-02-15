/**
 * Art Prints Page Module
 * Handles the content and functionality for the Art Prints page
 */

import { initHeader } from '../components/header.js';

export function initArtPrintsPage() {
  // Initialize header
  initHeader();
  
  // Create main content
  const main = document.createElement('main');
  
  const heading = document.createElement('h1');
  heading.textContent = 'Art Prints';
  
  const paragraph1 = document.createElement('p');
  paragraph1.textContent = 'Browse our selection of high-quality art prints.';
  
  const paragraph2 = document.createElement('p');
  paragraph2.textContent = 'Bring the beauty of scenic landscapes to your home with our professionally printed reproductions.';
  
  main.appendChild(heading);
  main.appendChild(paragraph1);
  main.appendChild(paragraph2);
  
  document.body.appendChild(main);
}

// Initialize page when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initArtPrintsPage, { once: true });
} else {
  initArtPrintsPage();
}
