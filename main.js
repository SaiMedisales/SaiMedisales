document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNav = document.getElementById('mobile-nav');

    if (mobileMenuButton && mobileNav) {
        mobileMenuButton.addEventListener('click', function() {
            mobileNav.classList.toggle('hidden');
        });
    }

    // Header visibility on scroll logic
    let lastScrollTop = 0;
    const header = document.getElementById('header');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 50) {
            // Scrolling down
            header.classList.add('header-hidden');
            header.classList.remove('header-visible');
        } else {
            // Scrolling up
            header.classList.add('header-visible');
            header.classList.remove('header-hidden');
        }
        lastScrollTop = scrollTop;
    });

    // Handle initial header state on page load
    window.addEventListener('load', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 50) {
            header.classList.add('header-hidden');
        } else {
            header.classList.add('header-visible');
        }
    });

    // Fade-in animation for various elements
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Counter animation function
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.innerText = Math.floor(current).toLocaleString();
        }, 20);
    }

    const count1 = document.getElementById('count1');
    const count2 = document.getElementById('count2');
    const count3 = document.getElementById('count3');
    
    if (count1 && count2 && count3) {
        animateCounter(count1, 1000);
        animateCounter(count2, 250);
        animateCounter(count3, 25);
    }
});