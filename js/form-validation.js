// Form validation for Eagles Healing Nest Connect

/**
 * Initialize form validation
 */
function initializeFormValidation() {
  const contactForm = document.getElementById('contactForm');
  
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (validateForm(this)) {
      submitForm(this);
    }
  });
}

/**
 * Validate form inputs
 */
function validateForm(form) {
  const inputs = form.querySelectorAll('input, textarea');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!validateInput(input)) {
      isValid = false;
      showError(input, 'This field is required');
    } else {
      clearError(input);
    }
  });
  
  // Validate email format
  const emailInput = form.querySelector('input[type="email"]');
  if (emailInput && emailInput.value) {
    if (!isValidEmail(emailInput.value)) {
      isValid = false;
      showError(emailInput, 'Please enter a valid email address');
    }
  }
  
  return isValid;
}

/**
 * Validate individual input
 */
function validateInput(input) {
  const value = input.value.trim();
  
  if (input.hasAttribute('required')) {
    return value.length > 0;
  }
  
  return true;
}

/**
 * Check if email format is valid
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Display error message
 */
function showError(input, message) {
  clearError(input);
  
  const formGroup = input.closest('.form-group');
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.setAttribute('role', 'alert');
  errorDiv.textContent = message;
  
  formGroup.appendChild(errorDiv);
  input.setAttribute('aria-invalid', 'true');
  input.classList.add('error');
}

/**
 * Clear error message
 */
function clearError(input) {
  const formGroup = input.closest('.form-group');
  const errorDiv = formGroup.querySelector('.error-message');
  
  if (errorDiv) {
    errorDiv.remove();
  }
  
  input.setAttribute('aria-invalid', 'false');
  input.classList.remove('error');
}

/**
 * Submit form (placeholder)
 */
function submitForm(form) {
  // In a real application, this would send the form data to a server
  console.log('Form submitted with data:', Object.fromEntries(new FormData(form)));
  
  // Show success message
  alert('Thank you for your message! We will get back to you soon.');
  
  // Reset form
  form.reset();
}

// Initialize form validation on page load
document.addEventListener('DOMContentLoaded', function() {
  initializeFormValidation();
});
