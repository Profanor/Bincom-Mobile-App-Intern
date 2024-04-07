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

//carousel slider
document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    
    // Show the initial slide
    showSlide(currentIndex);

    function showSlide(index) {
        // Hide all slides
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });

        // Show the selected slide
        slides[index].style.display = 'block';
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }
    function startCarousel() {
        setInterval(nextSlide, 5000);
    }
    startCarousel();
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Event listeners for next and previous buttons
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', prevSlide);
});

// Get the button and the additional links container
const additionalLinksBtn = document.getElementById("additionalLinksBtn");
const additionalLinksContainer = document.getElementById("additionalLinksContainer");

// Add event listener to the button
additionalLinksBtn.addEventListener("click", function() {
    // Toggle the visibility of the additional links container
    additionalLinksContainer.classList.toggle("show");
});
