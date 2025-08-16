// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Social media icons - open in new tab
document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('click', function (e) {
        e.preventDefault();
        const url = this.getAttribute('href');
        window.open(url, '_blank');
    });
});

// Simple fade-in animation when page loads
window.addEventListener('load', () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "opacity 1.5s";
        document.body.style.opacity = 1;
    }, 100);
});
