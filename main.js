document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNav = document.getElementById('mobile-nav');

    if (mobileMenuButton && mobileNav) {
        mobileMenuButton.addEventListener('click', function() {
            mobileNav.classList.toggle('hidden');
            mobileNav.classList.toggle('flex'); // Add flex to make it a column
            mobileNav.classList.toggle('flex-col'); // Stack items vertically
            mobileNav.classList.toggle('space-y-2'); // Add spacing between items
        });

        // Close mobile nav when a link is clicked
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (!mobileNav.classList.contains('hidden')) {
                    mobileNav.classList.add('hidden');
                    mobileNav.classList.remove('flex', 'flex-col', 'space-y-2');
                }
            });
        });
    }

    // No specific JavaScript for logo animation needed if using CSS 'hover'
    // For more complex animations (e.g., on-scroll, subtle entrance), JS would be needed here.
});
