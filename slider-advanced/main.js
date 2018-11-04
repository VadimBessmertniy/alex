const slides = [
  {
    current: true,
    src: "../1.jpg",
  },
  {
    current: false,
    src: "../2.jpg",
  },
  {
    current: false,
    src: "../3.jpg",
  }
]

function renderSlides() {
  for (var i = 0; i < slides.length; i++) {
    const containerEl = document.querySelector('.container');
    const slideWrapperEl = document.createElement('div').classList.add('slide')
    slideWrapperEl.classList.add(slides[i].current ? "current" : "")
    const imgEl = document.createElement('img').setAttribute("src", slides[i].src)
    slideWrapperEl.appendChild(imgEl)
    containerEl.appendChild(slideWrapperEl)
  }
}

renderSlides()

const SLIDE_NUMBER = 3;
let currentSlide = 0;

function setCurrentSlide(slideNumber) {
  const previousSlide = slides.find(slide => slide.current === true);
  previousSlide.current = false;
  slides[slideNumber].current = true;
  renderSlides();
}

function nextSlide() {
  const previousSlideIndex = slides.findIndex(slide => slide.current === true);
  var currentSlideIndex = 0;

  if (previousSlideIndex !== SLIDE_NUMBER - 1) {
    currentSlideIndex = previousSlideIndex + 1;
  }
  else {
    currentSlideIndex = 0;
  }

  slides[previousSlideIndex].current = false;
  slides[currentSlideIndex].current = false;
  renderSlides();
}

function prevSlide() {
  const previousSlideIndex = slides.findIndex(slide => slide.current === true);
  var currentSlideIndex = 0;

  if (previousSlideIndex !== 0) {
    currentSlideIndex = previousSlideIndex + 1;
  }
  else {
    currentSlideIndex = SLIDE_NUMBER - 1;
  }

  slides[previousSlideIndex].current = false;
  slides[currentSlideIndex].current = false;
  renderSlides();
}
