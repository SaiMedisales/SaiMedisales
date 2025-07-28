document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNav = document.getElementById('mobile-nav');

    if (mobileMenuButton && mobileNav) {
        mobileMenuButton.addEventListener('click', function() {
            mobileNav.classList.toggle('hidden');
        });

        // Optional: Hide mobile menu when a link inside it is clicked
        const mobileNavLinks = mobileNav.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.add('hidden');
            });
        });
    }
});
