

let slideIndex = 0;

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Auto-play the slideshow
setInterval(function() {
  plusSlides(1);
}, 5000); // Change 2000 to the desired interval in milliseconds