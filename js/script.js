// Main JavaScript file for Eagles Healing Nest Connect

/**
 * Initialize the website
 */
function initializeWebsite() {
  console.log('Website initialized');
  
  // Add any global event listeners or initialization code here
  document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM is ready');
  });
}

/**
 * Smooth scroll behavior
 */
if ('scrollBehavior' in document.documentElement.style) {
  document.documentElement.style.scrollBehavior = 'smooth';
}

/**
 * Add skip to main content link functionality
 */
const skipLink = document.querySelector('.skip-link');
if (skipLink) {
  skipLink.addEventListener('click', function(e) {
    e.preventDefault();
    const main = document.querySelector('main');
    if (main) {
      main.focus();
      main.scrollIntoView();
    }
  });
}

// Initialize on page load
window.addEventListener('load', initializeWebsite);
