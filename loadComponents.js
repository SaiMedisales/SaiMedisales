document.addEventListener('DOMContentLoaded', function() {
    async function loadHTML(url, elementId) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                console.error(`Error loading ${url}: HTTP status ${response.status}`);
                return;
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

    loadHTML('header.html', 'header-placeholder').then(() => {
        const header = document.getElementById('header');
        if (header) {
            // Show header initially if not at top
            if (window.scrollY > 10) {
                header.classList.remove('header-hidden');
            } else {
                header.classList.add('header-hidden');
            }

            // Scroll effect: Hide header at top, show on scroll down
            window.addEventListener('scroll', function() {
                if (window.scrollY > 10) {
                    header.classList.remove('header-hidden');
                } else {
                    header.classList.add('header-hidden');
                }
            });
        }

        // Setup mobile menu after header is loaded
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileNav = document.getElementById('mobile-nav');
        if (mobileMenuButton && mobileNav) {
            mobileMenuButton.addEventListener('click', () => {
                mobileNav.classList.toggle('hidden');
                mobileNav.classList.toggle('flex');
            });
        }
    }).catch(error => {
        console.error("Failed to set up header components:", error);
    });

    loadHTML('footer.html', 'footer-placeholder');
});
