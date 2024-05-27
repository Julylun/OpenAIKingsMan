document.addEventListener("DOMContentLoaded", function () {
  const slideButtons = document.querySelectorAll(".slide_btn");
  const slideGroup = document.querySelector(".slide_group");
  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;
  function updateSlidePosition() {
    const slideWidth = slides[0].clientWidth;
    const moveDistance = -currentIndex * slideWidth;
    slideGroup.style.transform = `translateX(${moveDistance}px)`;
  }
  slideButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      currentIndex = index;
      updateSlidePosition();
      slideGroup.style.transition = "transform 0.5s ease-in-out";
      slideButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      slides.forEach((slide) => slide.classList.remove("active"));
      slides[index].classList.add("active");
    });
  });
  window.addEventListener("resize", () => {
    slideGroup.style.transition = "none"; // Disable transition during resize
    updateSlidePosition();
  });
  updateSlidePosition(); // Ensure correct position on load
});
document.addEventListener("DOMContentLoaded", function () {
  const slideButtons = document.querySelectorAll(".slider-header button");
  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const sliderGroup = button
        .closest(".img-gallery")
        .querySelector(".slider-wrapper");
      const slides = sliderGroup.querySelectorAll(
        ".slider-item, .slider-item4"
      );
      const slideWidth = slides[0].offsetWidth;
      if (button.getAttribute("aria-label") === "Next slide") {
        sliderGroup.scrollBy({ left: slideWidth, behavior: "smooth" });
      } else if (button.getAttribute("aria-label") === "Previous slide") {
        sliderGroup.scrollBy({ left: -slideWidth, behavior: "smooth" });
      }
    });
  });
});
