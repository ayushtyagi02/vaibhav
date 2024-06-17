document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');

    function cloneSlides() {
        slide.forEach(slide => {
            const clone = slide.cloneNode(true);
            slides.appendChild(clone);
        });
    }

    cloneSlides();
});
