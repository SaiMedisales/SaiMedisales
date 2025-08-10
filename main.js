document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNav = document.getElementById('mobile-nav');
    const header = document.getElementById('header');

    // Mobile menu toggle logic
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

    // Header visibility on scroll logic
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Only show/hide header if scrolling beyond a certain threshold (e.g., 50px)
        if (scrollTop > 50) {
            if (scrollTop > lastScrollTop) {
                // Scrolling down - hide header
                header.classList.remove('header-visible');
                header.classList.add('header-hidden');
            } else {
                // Scrolling up - show header
                header.classList.remove('header-hidden');
                header.classList.add('header-visible');
            }
        } else {
            // At the very top of the page, always show header
            header.classList.remove('header-hidden');
            header.classList.add('header-visible');
        }
        lastScrollTop = scrollTop;
    });

    // Handle initial header state on page load
    window.addEventListener('load', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop === 0) {
            header.classList.add('header-visible'); // Show header if at top on load
            header.classList.remove('header-hidden');
        } else {
            header.classList.add('header-hidden'); // Hide header if not at top on load
            header.classList.remove('header-visible');
        }
    });
});

// Contact form submission
// Note: This block is now redundant, you should already have this in contact.js.
// Make sure to remove this if it exists in your main.js after pasting.
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // ... simulated submission code ...
    });
}

// FAQ toggle functionality
document.querySelectorAll('.faq-question').forEach(question => {
    // ... function code ...
});

// Show map function
function showMap() {
    // ... function code ...
}

// Event listeners
window.addEventListener('scroll', () => {
    handleScrollAnimations();
    handleHeaderScroll();
});

window.addEventListener('load', () => {
    handleScrollAnimations();
    handleHeaderScroll();
    setupMobileMenu();
});
