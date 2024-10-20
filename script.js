document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll to sections
    const arrows = document.querySelectorAll('.arrow');
    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const targetId = arrow.getAttribute('data-target');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Optional: Smooth scrolling for navbar links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor click behavior
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}); 
document.getElementById('us-audio').addEventListener('play', function() {
    console.log('Mussu audio is playing');
});

document.getElementById('bestdays-audio').addEventListener('play', function() {
    console.log('Best Days audio is playing');
});
