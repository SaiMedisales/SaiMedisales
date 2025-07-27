document.addEventListener('DOMContentLoaded', function() { // Ensure DOM is loaded
    const queryForm = document.getElementById('queryForm');
    const submitButton = queryForm.querySelector('button[type="submit"]');
    const successMessage = document.getElementById('form-message-success');
    const errorMessage = document.getElementById('form-message-error');
    const errorTextSpan = errorMessage.querySelector('span'); // Span to insert error text

    // Helper function to show messages
    function showMessage(type, message) {
        successMessage.classList.add('hidden');
        errorMessage.classList.add('hidden');

        if (type === 'success') {
            successMessage.classList.remove('hidden');
        } else if (type === 'error') {
            errorTextSpan.textContent = message;
            errorMessage.classList.remove('hidden');
        }
    }

    // Helper function to reset form state
    function resetFormState() {
        submitButton.textContent = 'Send Message';
        submitButton.disabled = false;
        submitButton.classList.remove('opacity-50', 'cursor-not-allowed'); // Remove loading styles
    }

    queryForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        showMessage('none'); // Hide any previous messages
        submitButton.textContent = 'Sending...'; // Change button text
        submitButton.disabled = true; // Disable button
        submitButton.classList.add('opacity-50', 'cursor-not-allowed'); // Add loading styles

        const formData = new FormData(queryForm);

        // Replace 'YOUR_BACKEND_ENDPOINT_HERE' with your actual backend endpoint
        fetch('YOUR_BACKEND_ENDPOINT_HERE', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                // Check for HTTP errors (e.g., 4xx or 5xx)
                // If backend sends specific error messages, parse them here
                return response.json().then(err => { throw err; }).catch(() => {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                });
            }
            return response.json(); // Assuming your backend returns JSON
        })
        .then(data => {
            if (data.success) { // Assuming your backend returns { success: true } on success
                showMessage('success', 'Your message has been sent.');
                queryForm.reset(); // Clear the form
            } else {
                // Handle backend-specific errors if any (e.g., { success: false, message: "Invalid input" })
                showMessage('error', data.message || 'Failed to send message.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Display a user-friendly error message
            showMessage('error', error.message || 'An unexpected error occurred. Please try again later.');
        })
        .finally(() => {
            resetFormState(); // Always reset button state
        });
    });
});

// This code is for the mobile menu toggle on index.html

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNav = document.getElementById('mobile-nav');

    // Check if both elements exist before adding event listeners
    if (mobileMenuButton && mobileNav) {
        mobileMenuButton.addEventListener('click', function() {
            // Toggle the 'hidden' class on the mobile navigation
            mobileNav.classList.toggle('hidden');
            
            // Optional: You might want to change the icon of the button
            // For example, if you have an X icon when open and hamburger when closed
            const icon = mobileMenuButton.querySelector('svg');
            if (mobileNav.classList.contains('hidden')) {
                // Menu is hidden, show hamburger icon
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>';
            } else {
                // Menu is open, show X icon
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
            }
        });
    }

    // Optional: Close mobile menu when a menu item is clicked (useful for single-page sites)
    // This makes the menu disappear after the user selects a link
    const mobileNavLinks = mobileNav ? mobileNav.querySelectorAll('a') : [];
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (!mobileNav.classList.contains('hidden')) {
                mobileNav.classList.add('hidden'); // Hide the menu
                
                // Reset the button icon if it was changed
                const icon = mobileMenuButton.querySelector('svg');
                if (icon) { // Check if icon exists
                   icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>';
                }
            }
        });
    });
});