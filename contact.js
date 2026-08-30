document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const statusMessage = document.getElementById('successMessage');

    if (!contactForm || !statusMessage) return;

    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonContent = submitButton?.innerHTML;

    function showStatus(message, type) {
        statusMessage.textContent = message;
        statusMessage.classList.remove(
            'bg-green-100', 'border-green-400', 'text-green-700',
            'bg-red-100', 'border-red-400', 'text-red-700',
            'bg-blue-100', 'border-blue-400', 'text-blue-700'
        );

        const statusClasses = {
            success: ['bg-green-100', 'border-green-400', 'text-green-700'],
            error: ['bg-red-100', 'border-red-400', 'text-red-700'],
            sending: ['bg-blue-100', 'border-blue-400', 'text-blue-700']
        };
        statusMessage.classList.add(...statusClasses[type]);
        statusMessage.style.display = 'block';
    }

    contactForm.addEventListener('submit', async event => {
        event.preventDefault();
        showStatus('Sending your message…', 'sending');

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.classList.add('opacity-70', 'cursor-not-allowed');
            submitButton.textContent = 'Sending…';
        }

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { Accept: 'application/json' }
            });

            if (!response.ok) {
                let message = 'We could not send your message. Please try again or contact us by phone or WhatsApp.';
                try {
                    const data = await response.json();
                    if (data.errors?.length) message = data.errors.map(error => error.message).join(' ');
                } catch {
                    // Use the helpful fallback message when the response is not JSON.
                }
                throw new Error(message);
            }

            contactForm.reset();
            showStatus('Thank you! Your message has been sent. We will get back to you soon.', 'success');
        } catch (error) {
            console.error('Contact form submission error:', error);
            showStatus(error.message || 'A network error occurred. Please try again later.', 'error');
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.classList.remove('opacity-70', 'cursor-not-allowed');
                submitButton.innerHTML = originalButtonContent;
            }
        }
    });
});
