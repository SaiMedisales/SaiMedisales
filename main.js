document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNav = document.getElementById('mobile-nav');
    const header = document.getElementById('header');

    // Mobile menu toggle logic
    function setupMobileMenu() {
        if (mobileMenuButton && mobileNav) {
            mobileMenuButton.addEventListener('click', function() {
                mobileNav.classList.toggle('hidden');
                mobileNav.classList.toggle('flex');
                mobileNav.classList.toggle('flex-col');
                mobileNav.classList.toggle('space-y-4');
            });

            // Close mobile nav when a link is clicked
            mobileNav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if (!mobileNav.classList.contains('hidden')) {
                        mobileNav.classList.add('hidden');
                        mobileNav.classList.remove('flex', 'flex-col', 'space-y-4');
                    }
                });
            });
        }
    }

    // Header visibility on scroll logic
    let lastScrollTop = 0;

    function handleHeaderScroll() {
        if (!header) return;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down - hide header
            header.classList.remove('header-visible');
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up or at the top - show header
            header.classList.add('header-visible');
            header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    }
    
    // Fade in animation on scroll
    function handleScrollAnimations() {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', () => {
        handleScrollAnimations();
        handleHeaderScroll();
    });

    // Handle initial state on page load
    window.addEventListener('load', () => {
        handleScrollAnimations();
        handleHeaderScroll();
        setupMobileMenu(); // Ensure mobile menu is set up after everything is loaded
    });
});
