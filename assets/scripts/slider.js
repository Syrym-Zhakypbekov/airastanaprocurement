function changeSlide(direction, sliderElement) {
    let slides = sliderElement.querySelectorAll('.slide');
    let currentSlide = parseInt(sliderElement.getAttribute('data-current-slide')) || 0;

    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');

    sliderElement.setAttribute('data-current-slide', currentSlide);
}

window.onload = function () {
    let sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
        let slides = slider.querySelectorAll('.slide');
        if (slides.length > 0) {
            slides[0].classList.add('active');
            slider.setAttribute('data-current-slide', '0');
        }

        let prevButton = slider.querySelector('.control_previeous');
        let nextButton = slider.querySelector('.control_next');

        prevButton.addEventListener('click', function () { changeSlide(-1, slider) });
        nextButton.addEventListener('click', function () { changeSlide(1, slider) });
    });
};
