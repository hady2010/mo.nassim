document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        body.setAttribute('data-theme', 'dark');
        themeToggle.checked = true;
        mobileThemeToggle.checked = true;
    }
    
    // Theme toggle event listeners
    function toggleTheme() {
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeToggle.checked = false;
            mobileThemeToggle.checked = false;
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.checked = true;
            mobileThemeToggle.checked = true;
        }
    }
    
    themeToggle.addEventListener('change', toggleTheme);
    mobileThemeToggle.addEventListener('change', toggleTheme);
    
    // Language toggle functionality
    const langToggle = document.getElementById('lang-toggle');
    const mobileLangToggle = document.getElementById('mobile-lang-toggle');
    
    // Check for saved language preference
    const savedLang = localStorage.getItem('language');
    if (savedLang === 'ar') {
        body.classList.add('rtl');
    }
    
    // Language toggle event listeners
    function toggleLanguage() {
        body.classList.toggle('rtl');
        localStorage.setItem('language', body.classList.contains('rtl') ? 'ar' : 'en');
    }
    
    langToggle.addEventListener('click', toggleLanguage);
    mobileLangToggle.addEventListener('click', toggleLanguage);
    
    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        if (mobileMenu.style.display === 'block') {
            mobileMenu.style.display = 'none';
        } else {
            mobileMenu.style.display = 'block';
        }
    });
    
    // Close mobile menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.style.display = 'none';
        });
    });
    
    // Close mobile menu when window is resized to desktop size
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            mobileMenu.style.display = 'none';
        }
    });
});