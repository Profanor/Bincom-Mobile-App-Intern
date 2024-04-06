// Smooth scrolling behavior
document.querySelectorAll('.navbar-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Get the target id without the '#'
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

//scroll button script
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById('scrollToTopButton');

    window.addEventListener('scroll', function() {
        const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
        scrollToTopButton.style.display = isBottom ? 'block' : 'none';
    });

    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
