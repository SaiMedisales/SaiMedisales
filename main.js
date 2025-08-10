document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNav = document.getElementById('mobile-nav');
    const header = document.getElementById('header');

    // --- Mobile Menu Logic ---
    function setupMobileMenu() {
        if (mobileMenuButton && mobileNav) {
            mobileMenuButton.addEventListener('click', function() {
                mobileNav.classList.toggle('hidden');
                mobileNav.classList.toggle('flex');
                mobileNav.classList.toggle('flex-col');
                mobileNav.classList.toggle('space-y-2');
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
    }

    // --- Fade-in Animations on Scroll ---
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

    // --- FAQ Toggle Functionality ---
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');

            document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
                if (otherAnswer !== answer) {
                    otherAnswer.classList.add('hidden');
                    otherAnswer.previousElementSibling.querySelector('i').style.transform = 'rotate(0deg)';
                }
            });

            answer.classList.toggle('hidden');
            icon.style.transform = answer.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
        });
    });

    // --- Show Map Functionality ---
    window.showMap = function() { // Attach to window to make it globally accessible from HTML onclick
        const mapContainer = document.getElementById('mapContainer');
        mapContainer.style.display = mapContainer.style.display === 'none' ? 'block' : 'none';
        if (mapContainer.style.display === 'block') {
            mapContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };
    
    // Call functions on initial page load
    setupMobileMenu();
    handleScrollAnimations();
});

// --- Header Visibility on Scroll ---
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (!header) return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
        if (scrollTop > lastScrollTop) {
            header.classList.remove('header-visible');
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
            header.classList.add('header-visible');
        }
    } else {
        header.classList.remove('header-hidden');
        header.classList.add('header-visible');
    }
    lastScrollTop = scrollTop;
});
