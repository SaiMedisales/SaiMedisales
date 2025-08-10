document.addEventListener('DOMContentLoaded', function() {
    // Function to load HTML content into a specified element
    async function loadHTML(url, elementId) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
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

    // Load header and then initialize its scripts
    loadHTML('header.html', 'header-placeholder').then(() => {
        // After the header is loaded, run the setup logic from main.js
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
        const headerHeight = header ? header.offsetHeight : 0;
        function handleHeaderScroll() {
            if (!header) return;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
                header.style.transform = `translateY(-${headerHeight}px)`;
            } else {
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
        
        // Setup event listeners after header is loaded
        window.addEventListener('scroll', () => {
            handleScrollAnimations();
            handleHeaderScroll();
        });
        window.addEventListener('load', () => {
            handleScrollAnimations();
            handleHeaderScroll();
            setupMobileMenu();
        });

    });

    // Load footer separately
    loadHTML('footer.html', 'footer-placeholder');
});
