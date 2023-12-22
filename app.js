const sliderContainers = document.querySelectorAll('.slider-container');

sliderContainers.forEach(container => {
    const sliderWrapper = container.querySelector('.slider-wrapper');
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');

    let currentIndex = 0;

    function showSlide(index) {
        const itemWidth = document.querySelector('.slide').offsetWidth;
        sliderWrapper.style.transform = `translateX(-${index * itemWidth}px)`;
        currentIndex = index;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % (document.querySelectorAll('.slide').length);
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + document.querySelectorAll('.slide').length) % (document.querySelectorAll('.slide').length);
        showSlide(currentIndex);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
});