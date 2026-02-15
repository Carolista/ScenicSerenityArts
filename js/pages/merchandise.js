/**
 * Merchandise Page Module
 * Handles the content and functionality for the Merchandise page
 */

import { initHeader } from '../components/header.js';

export function initMerchandisePage() {
  // Initialize header
  initHeader();
  
  // Create main content
  const main = document.createElement('main');
  
  const heading = document.createElement('h1');
  heading.textContent = 'Merchandise';
  
  const paragraph1 = document.createElement('p');
  paragraph1.textContent = 'Shop our unique merchandise collection.';
  
  const paragraph2 = document.createElement('p');
  paragraph2.textContent = 'From mugs to tote bags, find the perfect item featuring our scenic artwork.';
  
  main.appendChild(heading);
  main.appendChild(paragraph1);
  main.appendChild(paragraph2);
  
  document.body.appendChild(main);
}

// Initialize page when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMerchandisePage);
} else {
  initMerchandisePage();
}
