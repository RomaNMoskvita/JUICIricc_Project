/*Slideshow Script Section */

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide__card");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

/*Slideshow Script Section */

let slideIndexFig = 1;
let temp = 1;
showSlidesFig(slideIndexFig);

function currentSlideFig(m) {
  showSlidesFig((slideIndexFig = m));
}

function showSlidesFig(m) {
  let control = false;
  let j;
  let slidesFig = document.getElementsByClassName("slideshow__figure--card");
  let dotsFig = document.getElementsByClassName("dot__figure");

  // Control variable temp
  if (m != temp) {
    control = true;
  } else {
    control = false;
  }
  temp = m;
  console.log(control);
  console.log(m);

  for (j = 0; j < dotsFig.length; j++) {
    dotsFig[j].className = dotsFig[j].className.replace(" active", "");
  }

  for (j = 0; j < slidesFig.length; j++) {
    console.log("i am here");
    slidesFig[j].style.display = "none";
    slidesFig[j].style.transform = "translate(0px, 0px)";
  }

  slidesFig[slideIndexFig - 1].style.display = "block";
  setTimeout(function () {
    slidesFig[slideIndexFig - 1].style.transform = "translate(-560px, 0px)";
  }, 100);

  dotsFig[slideIndexFig - 1].className += " active";
}
