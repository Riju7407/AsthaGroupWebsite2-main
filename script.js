document.querySelector('.dropbtn').addEventListener('click', function () {
  this.parentElement.classList.toggle('open');
});


// ================= MULTIPLE IMAGE SLIDER =================//
document.querySelectorAll('.slider').forEach(slider => {

  const slides = slider.querySelector('.slides');
  const images = slider.querySelectorAll('.slides img');
  const prev = slider.querySelector('.prev');
  const next = slider.querySelector('.next');

  let index = 0;

  function showSlide() {
    slides.style.transform = `translateX(${-index * 100}%)`;
  }

  next.addEventListener('click', () => {
    index = (index + 1) % images.length;
    showSlide();
  });

  prev.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    showSlide();
  });

});


//  const slider = document.querySelector(".slider");
//   const next = document.querySelector(".next");
//   const prev = document.querySelector(".prev");

//   let scrollAmount = 0;

//   next.addEventListener("click", () => {
//     slider.scrollBy({ left: 280, behavior: "smooth" });
//   });

//   prev.addEventListener("click", () => {
//     slider.scrollBy({ left: -280, behavior: "smooth" });
//   });


// ================= HERO CAROUSEL =================//
const heroCarousel = document.getElementById('heroCarousel');
if (heroCarousel) {
  const indicators = document.querySelectorAll('.carousel-indicators .indicator');
  const slides = document.querySelectorAll('.carousel-slide');
  let currentSlide = 0;
  const totalSlides = slides.length;
  
  // Function to update active indicator
  function updateIndicators() {
    indicators.forEach((indicator, index) => {
      indicator.classList.remove('active');
      if (index === currentSlide) {
        indicator.classList.add('active');
      }
    });
  }
  
  // Initialize first indicator as active
  updateIndicators();
  
  // Auto-rotate carousel every 8 seconds
  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateIndicators();
  }, 8000);
  
  // Click on indicators to go to specific slide
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentSlide = index;
      updateIndicators();
    });
  });
}