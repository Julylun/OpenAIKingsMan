document.addEventListener("DOMContentLoaded", function() {
    const slideButtons = document.querySelectorAll('.slide_btn');
    const slideGroup = document.querySelector('.slide_group');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    function updateSlidePosition() {
        const slideWidth = slides[0].clientWidth;
        const moveDistance = -currentIndex * slideWidth;
        slideGroup.style.transform = `translateX(${moveDistance}px)`;
    }
    slideButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentIndex = index;
            updateSlidePosition();
            slideGroup.style.transition = 'transform 0.5s ease-in-out';
            slideButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
        });
    });
    window.addEventListener('resize', () => {
        slideGroup.style.transition = 'none'; // Disable transition during resize
        updateSlidePosition();
    });
    updateSlidePosition(); // Ensure correct position on load
});

document.addEventListener("DOMContentLoaded", function() {
    const slideButtons = document.querySelectorAll('.hover:text-btn-base--hover');
    slideButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const sliderGroup = button.closest('.img-gallery').querySelector('.slider-wrapper');
            const slides = sliderGroup.querySelectorAll('.slider-item');
            const slideWidth = slides[0].offsetWidth;
            if (button.getAttribute('aria-label') === 'Next slide') {
                sliderGroup.scrollLeft += slideWidth;
            } else if (button.getAttribute('aria-label') === 'Previous slide') {
                sliderGroup.scrollLeft -= slideWidth;
            }
        });
    });
    const sliders = document.querySelectorAll(".img-gallery");
    sliders.forEach(slider => {
        const sliderItems = slider.querySelector(".slider-wrapper");
        let isDown = false;
        let startX;
        let scrollLeft;
        sliderItems.addEventListener("mousedown", startDrag);
        sliderItems.addEventListener("touchstart", startDrag);
        function startDrag(e) {
            isDown = true;
            sliderItems.classList.add("active");
            startX = e.pageX || e.touches[0].pageX;
            scrollLeft = sliderItems.scrollLeft;
            document.addEventListener("mousemove", drag);
            document.addEventListener("touchmove", drag);
            document.addEventListener("mouseup", endDrag);
            document.addEventListener("touchend", endDrag);
        }
        function drag(e) {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX || e.touches[0].pageX;
            const walk = (x - startX) * 3; // Adjust scroll speed
            sliderItems.scrollLeft = scrollLeft - walk;
        }
        function endDrag() {
            isDown = false;
            sliderItems.classList.remove("active");
            document.removeEventListener("mousemove", drag);
            document.removeEventListener("touchmove", drag);
            document.removeEventListener("mouseup", endDrag);
            document.removeEventListener("touchend", endDrag);
        }
    });
});
