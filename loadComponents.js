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

    // Load header and then set up its mobile menu logic
    loadHTML('header.html', 'header-placeholder').then(() => {
        // This code now runs *only* after header.html is loaded
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileNav = document.getElementById('mobile-nav');

        // Check if the elements exist before trying to use them
        if (mobileMenuButton && mobileNav) {
            mobileMenuButton.addEventListener('click', () => {
                mobileNav.classList.toggle('hidden');
                mobileNav.classList.toggle('flex');
            });
        }
    }).catch(error => {
        console.error("Failed to set up header components:", error);
    });

    // Load footer
    loadHTML('footer.html', 'footer-placeholder');
});
