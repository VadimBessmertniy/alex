const SLIDE_NUMBER = 3;
let currentSlide = 0;

function setCurrentSlide(slideNumber) {
  removeCurrentClass()
  currentSlide = slideNumber;
  addCurrentClass()

}

function nextSlide() {
  removeCurrentClass()
  if (currentSlide !== SLIDE_NUMBER - 1) {
    currentSlide = currentSlide + 1;
  }
  else {
    currentSlide = 0;
  }
  addCurrentClass()

}

function prevSlide() {
  removeCurrentClass()
  if (currentSlide !== 0) {
    currentSlide = currentSlide - 1;
  }
  else {
    currentSlide = SLIDE_NUMBER;
  }
  addCurrentClass()
}

function removeCurrentClass() {
  const previousSlideEl = document.getElementsByClassName("slide")[currentSlide];
  previousSlideEl.classList.remove("current");
}

function addCurrentClass() {
  const currentSlideEl = document.getElementsByClassName("slide")[currentSlide];
  currentSlideEl.classList.add("current");
}
