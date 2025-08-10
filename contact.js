document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    if (contactForm && successMessage) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Display a "sending" message
            successMessage.textContent = 'Sending...';
            successMessage.style.display = 'block';
            successMessage.style.color = 'black';

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
                    contactForm.reset();
                    successMessage.textContent = 'Message sent successfully!';
                    successMessage.style.color = 'green';
                } else {
                    const data = await response.json();
                    if (data.errors) {
                        successMessage.textContent = data.errors.map(error => error.message).join(', ');
                    } else {
                        successMessage.textContent = 'An unknown error occurred.';
                    }
                    successMessage.style.color = 'red';
                }
            } catch (error) {
                console.error('Submission error:', error);
                successMessage.textContent = 'Network error. Please try again later.';
                successMessage.style.color = 'red';
            }
        });
    }
});
