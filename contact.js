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
        submitButton.textContent = 'Send Query'; // Changed from Send Message to Send Query
        submitButton.disabled = false;
        submitButton.classList.remove('opacity-50', 'cursor-not-allowed'); // Remove loading styles
    }

    queryForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Basic client-side validation using HTML5 validity
        if (!queryForm.checkValidity()) {
            // Trigger browser's default validation messages
            queryForm.reportValidity();
            showMessage('error', 'Please fill in all required fields correctly.');
            return; // Stop the submission
        }

        showMessage('none'); // Hide any previous messages
        submitButton.textContent = 'Sending...'; // Change button text
        submitButton.disabled = true; // Disable button
        submitButton.classList.add('opacity-50', 'cursor-not-allowed'); // Add loading styles

        const formData = new FormData(queryForm);

        fetch('https://formspree.io/f/xjkrlejp', { // Updated to your Formspree endpoint
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json' // Essential for Formspree to return JSON
            }
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => { throw err; }).catch(() => {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                });
            }
            return response.json(); // Assuming your backend returns JSON
        })
        .then(data => {
            if (data.ok) { // Formspree returns { ok: true } on success
                showMessage('success', 'Your query has been sent successfully!');
                queryForm.reset(); // Clear the form
            } else { //
                showMessage('error', data.errors ? data.errors.map(e => e.message).join(', ') : 'Failed to send query.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showMessage('error', error.message || 'An unexpected error occurred. Please try again later.');
        })
        .finally(() => {
            resetFormState(); // Always reset button state
        });
    });
});
