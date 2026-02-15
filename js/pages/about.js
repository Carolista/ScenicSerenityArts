/**
 * About Page Module
 * Handles the content and functionality for the About page
 */

import { initHeader } from '../components/header.js';

export function initAboutPage() {
  // Initialize header
  initHeader();
  
  // Create main content
  const main = document.createElement('main');
  
  const heading = document.createElement('h1');
  heading.textContent = 'About Scenic Serenity Arts';
  
  const paragraph1 = document.createElement('p');
  paragraph1.textContent = 'Welcome to Scenic Serenity Arts, where creativity meets tranquility.';
  
  const paragraph2 = document.createElement('p');
  paragraph2.textContent = 'Discover our collection of original artwork, prints, and unique merchandise inspired by the beauty of nature and serene landscapes.';
  
  main.appendChild(heading);
  main.appendChild(paragraph1);
  main.appendChild(paragraph2);
  
  document.body.appendChild(main);
}

// Initialize page when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAboutPage);
} else {
  initAboutPage();
}
