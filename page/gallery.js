// Add click event listener to gallery images
const galleryLinks = document.querySelectorAll('.gallery a');
const informationSections = document.querySelectorAll('.information section');

galleryLinks.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    // Get the target section index from the href attribute
    const targetIndex = parseInt(link.getAttribute('href').substring('#item-'.length)) - 1;

    // Hide all information sections
    informationSections.forEach(section => {
      section.style.display = 'none';
    });

    // Show the corresponding information section
    if (informationSections[targetIndex]) {
      informationSections[targetIndex].style.display = 'block';

      // Smooth scroll to the clicked section
      informationSections[targetIndex].scrollIntoView({ behavior: 'smooth' });
    }
  });
});
 //for slider
 let currentSlideIndex = 1;

// Function to show a specific slide
function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  if (index > slides.length) {
    currentSlideIndex = 1;
  } else if (index < 1) {
    currentSlideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }

  slides[currentSlideIndex - 1].style.display = 'block';
  dots[currentSlideIndex - 1].classList.add('active');
}

// Function to move to the next slide
function nextSlide(n) {
  showSlide(currentSlideIndex += n);
}

// Function to move to the previous slide
function prevSlide(n) {
  showSlide(currentSlideIndex -= n);
}

// Function to show a specific slide when a dot is clicked
function currentSlide(n) {
  showSlide(currentSlideIndex = n);
}

// Initial slide display
showSlide(currentSlideIndex);
