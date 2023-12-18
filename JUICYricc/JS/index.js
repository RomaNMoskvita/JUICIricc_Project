/*Slideshow Script Section */

let slideIndex = 1;
showSlides(slideIndex);

const dotContener = document.querySelectorAll(".dot");
dotContener.forEach((container) => {
  container.addEventListener("click", function (event) {
    const index = this.getAttribute("data-index");
    showSlides((slideIndex = index));
  });
});

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
let cntrlImg = 1;
showSlidesFig(slideIndexFig);

const dotFigContener = document.querySelectorAll(".dot__figure");
dotFigContener.forEach((container) => {
  container.addEventListener("click", function (event) {
    const index = this.getAttribute("data-index");
    showSlidesFig((slideIndexFig = index));
  });
});

function showSlidesFig(m) {
  let control = false;
  let j;
  let slidesFig = document.getElementsByClassName("slideshow__figure--card");
  let dotsFig = document.getElementsByClassName("dot__figure");

  // Control variable cntrlImg
  if (m != cntrlImg) {
    control = true;
  } else {
    control = false;
  }
  cntrlImg = m;
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
    slidesFig[slideIndexFig - 1].style.transform = "translate(-510px, 0px)";
  }, 100);

  dotsFig[slideIndexFig - 1].className += " active";
}

/*Slideshow Script Section */

let slideIndexSpot = 1;
showSlidesSpot(slideIndexSpot);

const containers = document.querySelectorAll(".dot__spt");
containers.forEach((container) => {
  container.addEventListener("click", function (event) {
    const index = this.getAttribute("data-index");
    currentSlideSpot(index);
  });
});

export function currentSlideSpot(n) {
  showSlidesSpot((slideIndexSpot = n));
}

function showSlidesSpot(n) {
  let i;
  let slides = document.getElementsByClassName("spot__slideshow--card");
  let dots = document.getElementsByClassName("dot__spt");

  if (n > slides.length) {
    slideIndexSpot = 1;
  }
  if (n < 1) {
    slideIndexSpot = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexSpot - 1].style.display = "block";
  dots[slideIndexSpot - 1].className += " active";
}

const buttonLight = document.getElementById("button__light");
buttonLight.addEventListener("click", function () {
  buttonLight.classList.toggle("button__light--active");
  const navbar__one = document.getElementsByClassName(
    "navbar__logo--container--backround"
  );
  const navbar__two = document.getElementsByClassName(
    "navbar__navigation--container--backround"
  );
  const navbar__link = document.getElementsByClassName("navbar__link");
  const button__signin = document.getElementsByClassName("button__signin");
  const main__spot = document.getElementsByClassName("main__spot--section");
  const new_in__section = document.getElementsByClassName("new-in__section");
  const user__icon = document.getElementsByClassName("user--icon__container");
  const footer__one = document.getElementsByClassName("footer__one");
  const footer__two = document.getElementsByClassName("footer__two");
  const footer__item = document.getElementsByClassName("footer__one--item");
  const footer__item__content = document.getElementsByClassName(
    "footer__item--link--one"
  );
  const new_in__backgr = document.getElementsByClassName(
    "new-in__background--bot"
  );

  const traffic__banner = document.getElementsByClassName(
    "website__traffic--banner"
  );

  if (buttonLight.className === "button__light--toggle button__light--active") {
    for (let i = 0; i < navbar__link.length; i++) {
      navbar__link[i].style.color = "#fff";
    }
    navbar__one[0].style.backgroundColor = "#0C0032";
    navbar__two[0].style.backgroundColor = "#3500D3";
    traffic__banner[0].style.backgroundColor = "#0C0032";
    main__spot[0].style.backgroundColor = "#0C0032";
    new_in__section[0].style.backgroundColor = "#0C0032";
    new_in__backgr[0].style.display = "none";
    user__icon[0].style.backgroundColor = "#11004a";
    footer__one[0].style.backgroundColor = "#3500D3";
    footer__two[0].style.backgroundColor = "#0C0032";
    for (let i = 0; i < footer__item__content.length; i++) {
      footer__item__content[i].style.color = "#fff";
    }
    for (let i = 0; i < footer__item.length; i++) {
      footer__item[i].style.color = "#fff";
    }
  } else {
    for (let i = 0; i < navbar__link.length; i++) {
      navbar__link[i].style.color = "#131313";
    }
    navbar__one[0].style.backgroundColor = "#131313";
    navbar__two[0].style.backgroundColor = "aquamarine";
    traffic__banner[0].style.backgroundColor = "#131313";
    main__spot[0].style.backgroundColor = "#131313";
    new_in__section[0].style.backgroundColor = "#131313";
    new_in__backgr[0].style.display = "block";
    user__icon[0].style.backgroundColor = "#252525";
    footer__one[0].style.backgroundColor = "aquamarine";
    footer__two[0].style.backgroundColor = "#131313";
    for (let i = 0; i < footer__item__content.length; i++) {
      footer__item__content[i].style.color = "#131313";
    }
    for (let i = 0; i < footer__item.length; i++) {
      footer__item[i].style.color = "#131313";
    }
  }
});
