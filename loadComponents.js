document.addEventListener('DOMContentLoaded', function() {
    // Function to load HTML content into a specified element
    async function loadHTML(url, elementId) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const html = await response.text();
            document.getElementById(elementId).innerHTML = html;
        } catch (error) {
            console.error(`Error loading ${url}:`, error);
        }
    }

    // Load header
    loadHTML('header.html', 'header-placeholder').then(() => {
        // After header is loaded, initialize mobile menu if needed
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileNav = document.getElementById('mobile-nav');

        if (mobileMenuButton && mobileNav) {
            mobileMenuButton.addEventListener('click', () => {
                mobileNav.classList.toggle('hidden');
            });
        }
    });


    // Load footer
    loadHTML('footer.html', 'footer-placeholder');
});