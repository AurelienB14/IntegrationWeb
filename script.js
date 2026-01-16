document.addEventListener('DOMContentLoaded', () => {
    // 1. Hero Image Reveal Animation
    const heroImages = document.querySelectorAll('.hero img');
    heroImages.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = '1';
        }, (index + 1) * 300);
    });

    // 2. Burger Menu Toggle
    const burgerMenu = document.getElementById('burger-menu');
    const navMenu = document.querySelector('.headermenudiv');

    if (burgerMenu && navMenu) {
        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                burgerMenu.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

});
