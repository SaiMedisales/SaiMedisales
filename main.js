// main.js - Mobile Menu Logic
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNav = document.getElementById('mobile-nav'); // The ul for mobile

    if (mobileMenuButton && mobileNav) {
        mobileMenuButton.addEventListener('click', function() {
            mobileNav.classList.toggle('hidden');
            // You might need to adjust these classes based on how you want your menu to appear/disappear.
            // The key is toggling 'hidden' to make it visible/invisible.
            // If you want a slide-down effect, Tailwind's transition classes would go on mobileNav itself.
        });

        // Optional: Close mobile menu when a link is clicked
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (!mobileNav.classList.contains('hidden')) {
                    mobileNav.classList.add('hidden');
                }
            });
        });
    }
});