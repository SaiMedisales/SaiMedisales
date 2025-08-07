// Mobile menu toggle logic
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNav = document.getElementById('mobile-nav');

    if (mobileMenuButton && mobileNav) {
        mobileMenuButton.addEventListener('click', () => {
            mobileNav.classList.toggle('hidden');
        });
    }
});

// Header visibility on scroll logic
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.classList.remove('header-visible');
        header.classList.add('header-hidden');
    } else {
        // Scrolling up
        header.classList.remove('header-hidden');
        header.classList.add('header-visible');
    }
    lastScrollTop = scrollTop;
});

// Handle header on page load
window.addEventListener('load', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop === 0) {
        header.classList.add('header-visible');
    } else {
        header.classList.add('header-hidden');
    }
});