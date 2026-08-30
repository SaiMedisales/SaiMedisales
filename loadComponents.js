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
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileNav = document.getElementById('mobile-nav');

        function closeMobileMenu() {
            if (!mobileMenuButton || !mobileNav) return;
            mobileNav.classList.add('hidden');
            mobileNav.classList.remove('flex');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
        }

        function setHeaderVisibility(isVisible) {
            if (!header) return;
            header.classList.toggle('header-hidden', !isVisible);
            header.classList.toggle('header-visible', isVisible);
            header.setAttribute('aria-hidden', String(!isVisible));
            header.inert = !isVisible;

            if (!isVisible) closeMobileMenu();
        }

        if (header) {
            const revealHeader = () => setHeaderVisibility(window.scrollY > 50);
            revealHeader();
            window.addEventListener('scroll', revealHeader, { passive: true });
        }

        if (mobileMenuButton && mobileNav) {
            mobileMenuButton.addEventListener('click', () => {
                const isOpen = mobileMenuButton.getAttribute('aria-expanded') === 'true';
                mobileNav.classList.toggle('hidden', isOpen);
                mobileNav.classList.toggle('flex', !isOpen);
                mobileMenuButton.setAttribute('aria-expanded', String(!isOpen));
            });
            mobileNav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', closeMobileMenu);
            });
        }
    }).catch(error => {
        console.error("Failed to set up header components:", error);
    });

    loadHTML('footer.html', 'footer-placeholder');
});
