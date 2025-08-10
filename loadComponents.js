document.addEventListener('DOMContentLoaded', function() {

    // Function to load HTML content into a specified element
    async function loadHTML(url, elementId) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                console.error(`Error loading ${url}: HTTP status ${response.status}`);
                throw new Error('Network response was not ok');
            }
            const html = await response.text();
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = html;
            }
        } catch (error) {
            console.error(`Error loading ${url}:`, error);
        }
    }

    // Load header and then set up all other functionality
    loadHTML('header.html', 'header-placeholder').then(() => {
        // Only run these functions once the header is on the page
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileNav = document.getElementById('mobile-nav');
        const header = document.getElementById('header');

        // Mobile menu toggle logic
        if (mobileMenuButton && mobileNav) {
            mobileMenuButton.addEventListener('click', () => {
                mobileNav.classList.toggle('hidden');
                mobileNav.classList.toggle('flex');
            });

            mobileNav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileNav.classList.add('hidden');
                    mobileNav.classList.remove('flex');
                });
            });
        }
    }).catch(error => console.error("Failed to load header:", error));

    // Load footer
    loadHTML('footer.html', 'footer-placeholder').catch(error => console.error("Failed to load footer:", error));

    // Form submission logic
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    if (contactForm && successMessage) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            fetch(e.target.action, {
                method: contactForm.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    successMessage.style.display = 'block';
                    contactForm.reset();
                    setTimeout(() => {
                        successMessage.style.display = 'none';
                    }, 5000);
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            alert(data["errors"].map(error => error["message"]).join(", "));
                        } else {
                            alert("Oops! There was a problem submitting your form");
                        }
                    });
                }
            }).catch(error => {
                alert("Oops! There was a problem submitting your form: " + error.message);
            });
        });
    }

    // FAQ accordion logic
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const icon = question.querySelector('i');

            if (answer.classList.contains('hidden')) {
                // Hide all other open answers
                faqItems.forEach(otherItem => {
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherIcon = otherItem.querySelector('i');
                    if (!otherAnswer.classList.contains('hidden')) {
                        otherAnswer.classList.add('hidden');
                        otherIcon.classList.remove('rotate-180');
                    }
                });

                // Show the clicked answer
                answer.classList.remove('hidden');
                icon.classList.add('rotate-180');
            } else {
                // Hide the clicked answer
                answer.classList.add('hidden');
                icon.classList.remove('rotate-180');
            }
        });
    });
});
