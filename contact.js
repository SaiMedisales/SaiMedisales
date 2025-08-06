document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Show a "submitting" message
        formStatus.textContent = 'Sending...';

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
                formStatus.textContent = 'Message sent successfully!';
                formStatus.style.color = 'green';
            } else {
                // Error case: show an error message from Formspree
                const data = await response.json();
                if (data.errors) {
                    formStatus.textContent = data.errors.map(error => error.message).join(', ');
                } else {
                    formStatus.textContent = 'An unknown error occurred.';
                }
                formStatus.style.color = 'red';
            }
        } catch (error) {
            // Network error case
            console.error('Submission error:', error);
            formStatus.textContent = 'Network error. Please try again later.';
            formStatus.style.color = 'red';
        }
    });
});
