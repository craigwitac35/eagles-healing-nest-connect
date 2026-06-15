// Navigation functionality for Eagles Healing Nest Connect

/**
 * Create responsive mobile menu functionality
 */
function initializeNavigation() {
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  
  if (!header || !nav) return;
  
  // Add mobile menu button
  const menuButton = document.createElement('button');
  menuButton.setAttribute('aria-label', 'Toggle mobile menu');
  menuButton.className = 'mobile-menu-toggle';
  menuButton.innerHTML = '<span></span><span></span><span></span>';
  menuButton.style.display = 'none';
  
  header.insertBefore(menuButton, nav);
  
  // Toggle menu on button click
  menuButton.addEventListener('click', function() {
    nav.classList.toggle('mobile-menu-active');
    menuButton.classList.toggle('active');
  });
  
  // Close menu when a link is clicked
  const navLinks = nav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      nav.classList.remove('mobile-menu-active');
      menuButton.classList.remove('active');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!header.contains(event.target)) {
      nav.classList.remove('mobile-menu-active');
      menuButton.classList.remove('active');
    }
  });
}

/**
 * Highlight current page in navigation
 */
function highlightCurrentPage() {
  const navLinks = document.querySelectorAll('nav a');
  const currentPath = window.location.pathname;
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || href === currentPath + '/') {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}

// Initialize navigation on page load
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  highlightCurrentPage();
});
