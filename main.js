document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNav = document.getElementById('mobile-nav');
    const header = document.getElementById('header');
    
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

    // FAQ toggle functionality
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // Close all other FAQs
            document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
                if (otherAnswer !== answer) {
                    otherAnswer.classList.add('hidden');
                    otherAnswer.previousElementSibling.querySelector('i').style.transform = 'rotate(0deg)';
                }
            });
            
            // Toggle current FAQ
            answer.classList.toggle('hidden');
            icon.style.transform = answer.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
        });
    });

    // Show map function
    window.showMap = function() {
        const mapContainer = document.getElementById('mapContainer');
        mapContainer.style.display = mapContainer.style.display === 'none' ? 'block' : 'none';
        
        if (mapContainer.style.display === 'block') {
            mapContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    // Mobile menu toggle logic
    if (mobileMenuButton && mobileNav) {
        mobileMenuButton.addEventListener('click', function() {
            mobileNav.classList.toggle('hidden');
        });
    }

    // Header visibility on scroll logic
    let lastScrollTop = 0;
    function handleHeaderScroll() {
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
    }
    
    // Event listeners
    window.addEventListener('scroll', () => {
        handleScrollAnimations();
        handleHeaderScroll();
    });

    window.addEventListener('load', () => {
        handleScrollAnimations();
        handleHeaderScroll();
        if (mobileMenuButton && mobileNav) {
            mobileMenuButton.addEventListener('click', function() {
                mobileNav.classList.toggle('hidden');
            });
        }
    });
});
