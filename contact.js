document.addEventListener('DOMContentLoaded', function() { // Ensure DOM is loaded [cite: 30]
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
            successMessage.classList.remove('hidden'); [cite: 31]
        } else if (type === 'error') {
            errorTextSpan.textContent = message;
            errorMessage.classList.remove('hidden');
        }
    }

    // Helper function to reset form state
    function resetFormState() {
        submitButton.textContent = 'Send Query'; // Changed from Send Message to Send Query
        submitButton.disabled = false; [cite: 32]
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
        fetch('https://formspree.io/f/xjkrlejp', { // Updated to your Formspree endpoint
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                // Check for HTTP errors (e.g., 4xx or 5xx) [cite: 34]
                // If backend sends specific error messages, parse them here
                return response.json().then(err => { throw err; }).catch(() => {
                    throw new Error(`HTTP error! Status: ${response.status}`); [cite: 35]
                });
            }
            return response.json(); // Assuming your backend returns JSON [cite: 36]
        })
        .then(data => {
            if (data.success) { // Assuming your backend returns { success: true } on success
                showMessage('success', 'Your message has been sent.');
                queryForm.reset(); // Clear the form
            } else { [cite: 37]
                // Handle backend-specific errors if any (e.g., { success: false, message: "Invalid input" })
                showMessage('error', data.message || 'Failed to send message.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Display a user-friendly error message [cite: 38]
            showMessage('error', error.message || 'An unexpected error occurred. Please try again later.');
        })
        .finally(() => {
            resetFormState(); // Always reset button state [cite: 39]
        });
    });
});
