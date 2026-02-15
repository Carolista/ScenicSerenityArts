/**
 * Header Component
 * Creates a reusable header with logo placeholder and navigation menu
 */

export function createHeader() {
  const header = document.createElement('header');
  
  // Create logo placeholder
  const logoPlaceholder = document.createElement('div');
  logoPlaceholder.className = 'logo-placeholder';
  logoPlaceholder.textContent = 'LOGO';
  
  // Create navigation
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  
  const navItems = [
    { text: 'About', href: 'about.html' },
    { text: 'Original Works', href: 'original-works.html' },
    { text: 'Art Prints', href: 'art-prints.html' },
    { text: 'Merchandise', href: 'merchandise.html' }
  ];
  
  navItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);
    ul.appendChild(li);
  });
  
  nav.appendChild(ul);
  header.appendChild(logoPlaceholder);
  header.appendChild(nav);
  
  return header;
}

/**
 * Initialize header on page load
 * Adds the header to the body as the first element
 */
export function initHeader() {
  const header = createHeader();
  document.body.insertBefore(header, document.body.firstChild);
}
