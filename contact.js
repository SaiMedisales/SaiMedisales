document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    if (contactForm && successMessage) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Display a "sending" message
            successMessage.textContent = 'Sending...';
            successMessage.style.display = 'block';
            successMessage.style.color = 'black'; // Or any color you prefer for "sending"

            const formData = new FormData(e.target);

            try {
                const response = await fetch(e.target.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Success case: clear the form and show a success message
                    contactForm.reset();
                    successMessage.textContent = 'Message sent successfully!';
                    successMessage.style.color = 'green';
                } else {
                    // Error case: show an error message from Formspree
                    const data = await response.json();
                    if (data.errors) {
                        successMessage.textContent = data.errors.map(error => error.message).join(', ');
                    } else {
                        successMessage.textContent = 'An unknown error occurred.';
                    }
                    successMessage.style.color = 'red';
                }
            } catch (error) {
                // Network error case
                console.error('Submission error:', error);
                successMessage.textContent = 'Network error. Please try again later.';
                successMessage.style.color = 'red';
            }
        });
    }
});
