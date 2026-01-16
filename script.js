document.addEventListener('DOMContentLoaded', () => {
    // 1. Hero Image Reveal Animation
    const heroImages = document.querySelectorAll('.hero img');
    heroImages.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = '1';
        }, (index + 1) * 300);
    });


});
