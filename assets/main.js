 // Animate skill bars when they come into view
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-bar');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('skill-bar');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));
};

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));
};

// Form validation and submission
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic form validation
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', { name, email, message });
        
        // Clear form
        contactForm.reset();
        alert('Thank you for your message! I will get back to you soon.');
    });
}

// Typing animation for the hero section
const typeWriter = (element, text, speed = 100) => {
    let i = 0;
    element.innerHTML = '';
    
    const type = () => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    
    type();
};

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    animateSkillBars();
    animateOnScroll();
    
    // Initialize typing animation
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        typeWriter(heroText, "I'm a Web Developer");
    }
});

// Smooth scroll behavior for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Theme toggle functionality (if needed)
const toggleTheme = () => {
    document.body.classList.toggle('light-theme');
    // Save theme preference
    const isDark = document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
};

// Initialize theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
}

// Language switcher functionality
const switchLanguage = (lang) => {
    // Here you would implement language switching logic
    console.log('Switching to language:', lang);
    // Update UI elements with new language
    // You would typically load language files and update text content
};

// Initialize tooltips and popovers if using them
const initializeTooltips = () => {
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseenter', (e) => {
            const tip = document.createElement('div');
            tip.className = 'tooltip';
            tip.textContent = e.target.dataset.tooltip;
            document.body.appendChild(tip);
            
            const rect = e.target.getBoundingClientRect();
            tip.style.top = `${rect.top - tip.offsetHeight - 10}px`;
            tip.style.left = `${rect.left + (rect.width - tip.offsetWidth) / 2}px`;
        });
        
        tooltip.addEventListener('mouseleave', () => {
            document.querySelector('.tooltip')?.remove();
        });
    });
};

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    initializeTooltips();
    // Add more initialization as needed
});