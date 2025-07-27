// --- Start of existing Form Submission Logic ---
document.addEventListener('DOMContentLoaded', function() {
    const queryForm = document.getElementById('queryForm');
    const submitButton = queryForm ? queryForm.querySelector('button[type="submit"]') : null;
    const successMessage = document.getElementById('form-message-success');
    const errorMessage = document.getElementById('form-message-error');
    const errorTextSpan = errorMessage ? errorMessage.querySelector('span') : null;

    function showMessage(type, message) {
        if (successMessage) successMessage.classList.add('hidden');
        if (errorMessage) errorMessage.classList.add('hidden');

        if (type === 'success' && successMessage) {
            successMessage.classList.remove('hidden');
        } else if (type === 'error' && errorMessage && errorTextSpan) {
            errorTextSpan.textContent = message;
            errorMessage.classList.remove('hidden');
        }
    }

    function resetFormState() {
        if (submitButton) {
            submitButton.textContent = 'Send Message';
            submitButton.disabled = false;
            submitButton.classList.remove('opacity-50', 'cursor-not-allowed');
        }
    }

    if (queryForm && submitButton) { // Ensure elements exist for the form
        queryForm.addEventListener('submit', function(event) {
            event.preventDefault();
            showMessage('none');
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            submitButton.classList.add('opacity-50', 'cursor-not-allowed');

            const formData = new FormData(queryForm);

            fetch('YOUR_BACKEND_ENDPOINT_HERE', { // Remember to replace this with your actual backend endpoint
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(err => { throw err; }).catch(() => {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    });
                }
                return response.json();
            })
            .then(data => {
                if (data.success) {
                    showMessage('success', 'Your message has been sent.');
                    queryForm.reset();
                } else {
                    showMessage('error', data.message || 'Failed to send message.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                showMessage('error', error.message || 'An unexpected error occurred. Please try again later.');
            })
            .finally(() => {
                resetFormState();
            });
        });
    }
});
// --- End of Form Submission Logic ---


// --- Start of Mobile Menu Toggle Logic ---
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNav = document.getElementById('mobile-nav');

    if (mobileMenuButton && mobileNav) {
        mobileMenuButton.addEventListener('click', function() {
            // ONLY toggle the 'hidden' class. Tailwind handles the rest.
            mobileNav.classList.toggle('hidden');
            
            // Optional: Toggle SVG icon for open/close state
            const iconPath = mobileMenuButton.querySelector('svg path');
            if (iconPath) {
                if (mobileNav.classList.contains('hidden')) {
                    iconPath.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7'); // Hamburger icon
                } else {
                    iconPath.setAttribute('d', 'M6 18L18 6M6 6l12 12'); // X icon
                }
            }
        });

        // Optional: Close mobile menu when a menu item is clicked
        const mobileNavLinks = mobileNav.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (!mobileNav.classList.contains('hidden')) {
                    mobileNav.classList.add('hidden');
                    // Reset button icon
                    const iconPath = mobileMenuButton.querySelector('svg path');
                    if (iconPath) {
                       iconPath.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
                    }
                }
            });
        });
    }
});
// --- End of Mobile Menu Toggle Logic ---