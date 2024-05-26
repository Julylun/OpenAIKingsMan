window.addEventListener("scroll", reveal);

function reveal() {
  let features = document.querySelectorAll(".product-features");
  // get viewport height
  let windowHeight = window.innerHeight;

  features.forEach((feature) => {
    // get the distance between the top of the element and the top of the viewport
    let featureTop = feature.getBoundingClientRect().top;

    if (featureTop < windowHeight - 50) {
      feature.classList.add("reveal");
    } else {
      feature.classList.remove("reveal");
    }
  });
}
