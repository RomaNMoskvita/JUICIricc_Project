import { cracowSkatePark } from "./dataBaseSimul.js";
import { currentSlideSpot } from "./index.js";

const column1 = document.getElementById("stat--col1");
const column2 = document.getElementById("stat--col2");
const column3 = document.getElementById("stat--col3");
const column4 = document.getElementById("stat--col4");
const column5 = document.getElementById("stat--col5");
const column6 = document.getElementById("stat--col6");
const column7 = document.getElementById("stat--col7");
const column8 = document.getElementById("stat--col8");
const column9 = document.getElementById("stat--col9");
const column10 = document.getElementById("stat--col10");

document
  .getElementById("city__select")
  .addEventListener("change", handleChange);
document
  .getElementById("spot-type__select")
  .addEventListener("change", handleChange);
document
  .getElementById("target__select")
  .addEventListener("change", handleChange);

export function handleChange() {
  const cityM = document.getElementById("city__select").value;
  const typeM = document.getElementById("spot-type__select").value;
  const filtrM = document.getElementById("target__select").value;
  statisticChange(cityM, typeM, filtrM);
}

let SkateParkFill = [];

function statisticChange(cityP, typeP, filtrP) {
  function filterFun(skateParkItem) {
    return skateParkItem.city === cityP && skateParkItem.typeS === typeP;
  }

  function shuffleArray(SkateParkFill) {
    for (let i = SkateParkFill.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [SkateParkFill[i], SkateParkFill[j]] = [
        SkateParkFill[j],
        SkateParkFill[i],
      ];
    }
    return SkateParkFill;
  }

  switch (true) {
    case filtrP === "Opinion":
      SkateParkFill = cracowSkatePark
        .filter(filterFun)
        .sort(function (a, b) {
          return b.opinion - a.opinion;
        })
        .slice(0, 10);
      shuffleArray(SkateParkFill);
      column1.style.height = `${SkateParkFill[0].opinion}`;
      column2.style.height = `${SkateParkFill[1].opinion}`;
      column3.style.height = `${SkateParkFill[2].opinion}`;
      column4.style.height = `${SkateParkFill[3].opinion}`;
      column5.style.height = `${SkateParkFill[4].opinion}`;
      column6.style.height = `${SkateParkFill[5].opinion}`;
      column7.style.height = `${SkateParkFill[6].opinion}`;
      column8.style.height = `${SkateParkFill[7].opinion}`;
      column9.style.height = `${SkateParkFill[8].opinion}`;
      column10.style.height = `${SkateParkFill[9].opinion}`;

      const { maxOpinionSkatePark, maxOpinionIndex } = SkateParkFill.reduce(
        (acc, current, index) => {
          const currentOpinion = parseInt(current.opinion);
          if (currentOpinion > acc.maxOpinion) {
            return {
              maxOpinion: currentOpinion,
              maxOpinionSkatePark: current,
              maxOpinionIndex: index,
            };
          }
          return acc;
        },
        {
          maxOpinion: -Infinity,
          maxOpinionSkatePark: null,
          maxOpinionIndex: -1,
        }
      );

      currentColumnSpot(maxOpinionIndex + 1);
      currentObjSpot(maxOpinionSkatePark);
      break;
    case filtrP === "Rate":
      SkateParkFill = cracowSkatePark
        .filter(filterFun)
        .sort(function (a, b) {
          return b.rate - a.rate;
        })
        .slice(0, 10);
      shuffleArray(SkateParkFill);
      column1.style.height = `${SkateParkFill[0].rate}`;
      column2.style.height = `${SkateParkFill[1].rate}`;
      column3.style.height = `${SkateParkFill[2].rate}`;
      column4.style.height = `${SkateParkFill[3].rate}`;
      column5.style.height = `${SkateParkFill[4].rate}`;
      column6.style.height = `${SkateParkFill[5].rate}`;
      column7.style.height = `${SkateParkFill[6].rate}`;
      column8.style.height = `${SkateParkFill[7].rate}`;
      column9.style.height = `${SkateParkFill[8].rate}`;
      column10.style.height = `${SkateParkFill[9].rate}`;

      const { maxRateSkatePark, maxRateIndex } = SkateParkFill.reduce(
        (acc, current, index) => {
          const currentRate = parseInt(current.rate);
          if (currentRate > acc.maxRate) {
            return {
              maxRate: currentRate,
              maxRateSkatePark: current,
              maxRateIndex: index,
            };
          }
          return acc;
        },
        {
          maxRate: -Infinity,
          maxRateSkatePark: null,
          maxRateIndex: -1,
        }
      );
      currentColumnSpot(maxRateIndex + 1);
      currentObjSpot(maxRateSkatePark);
      break;

    case filtrP === "Quality":
      SkateParkFill = cracowSkatePark
        .filter(filterFun)
        .sort(function (a, b) {
          return b.quality - a.quality;
        })
        .slice(0, 10);
      shuffleArray(SkateParkFill);
      column1.style.height = `${SkateParkFill[0].quality}`;
      column2.style.height = `${SkateParkFill[1].quality}`;
      column3.style.height = `${SkateParkFill[2].quality}`;
      column4.style.height = `${SkateParkFill[3].quality}`;
      column5.style.height = `${SkateParkFill[4].quality}`;
      column6.style.height = `${SkateParkFill[5].quality}`;
      column7.style.height = `${SkateParkFill[6].quality}`;
      column8.style.height = `${SkateParkFill[7].quality}`;
      column9.style.height = `${SkateParkFill[8].quality}`;
      column10.style.height = `${SkateParkFill[9].quality}`;

      const { maxQualitySkatePark, maxQualityIndex } = SkateParkFill.reduce(
        (acc, current, index) => {
          const currentQuality = parseInt(current.quality);
          if (currentQuality > acc.maxQuality) {
            return {
              maxQuality: currentQuality,
              maxQualitySkatePark: current,
              maxQualityIndex: index,
            };
          }
          return acc;
        },
        {
          maxQuality: -Infinity,
          maxQualitySkatePark: null,
          maxQualityIndex: -1,
        }
      );

      currentColumnSpot(maxQualityIndex + 1);
      currentObjSpot(maxQualitySkatePark);
      break;
  }
}

//Target column
function currentColumnSpot(index) {
  let i;
  let columns = document.getElementsByClassName("statistic__column__container");
  for (i = 0; i < columns.length; i++) {
    columns[i].className = columns[i].className.replace(
      " stat__col--active",
      ""
    );
  }
  columns[index - 1].className += " stat__col--active";
}

//Code for searching the actual object
function actColumn(event) {
  const index = this.getAttribute("data-index");
  currentColumnSpot(index);
  currentObjSpot(SkateParkFill[actualactual()]);
}

//Get back index actual object
function actualactual() {
  let actObj;
  for (let i = 0; i < containers.length; i++) {
    if (
      containers[i].className ===
      "statistic__column__container stat__col--active"
    ) {
      actObj = containers[i].getAttribute("data-index") - 1;
      return actObj;
    }
  }
}

const containers = document.querySelectorAll(".statistic__column__container");
containers.forEach((container) => {
  container.addEventListener("click", actColumn);
});

//Shows Location
const locationButton = document.getElementById("button__location");
const slideshowSpot = document.getElementById("slideshow__contener");
let slideshowBackup = [];
locationButton.addEventListener("click", function () {
  locationButton.classList.toggle("spot__left--button--act");
  if (
    locationButton.className === "spot__left--button spot__left--button--act"
  ) {
    slideshowBackup = Array.from(slideshowSpot.children);
    for (let i = slideshowSpot.children.length - 1; i >= 0; i--) {
      slideshowSpot.children[i].remove();
    }

    const locatioEl = document.createElement("iframe");
    locatioEl.src = SkateParkFill[actualactual()].location; // Set the source URL
    locatioEl.width = "564"; // Set the width
    locatioEl.height = "322"; // Set the height
    locatioEl.allowfullscreen = ""; //
    locatioEl.loading = "lazy"; //
    locatioEl.loading = "lazy"; //
    locatioEl.referrerpolicy = "no-referrer-when-downgrade"; //
    locatioEl.style.borderRadius = "20px"; //
    locatioEl.style.width = "100%"; //
    locatioEl.style.maxHeight = "308px"; //

    slideshowSpot.appendChild(locatioEl);
  } else {
    slideshowSpot.firstChild.nextElementSibling.remove();
    slideshowBackup.forEach((child) => slideshowSpot.appendChild(child));
  }
});

// Delete map from page when click on statistic column
const slideshowBackupCol = Array.from(slideshowSpot.children);

//Display information about obj on page
function currentObjSpot(obj) {
  //Delete map element when click on another column spot
  function columnControlMap() {
    if (
      slideshowSpot.firstChild.nextElementSibling instanceof HTMLIFrameElement
    ) {
      slideshowSpot.firstChild.nextElementSibling.remove();
      slideshowBackupCol.forEach((child) => slideshowSpot.appendChild(child));
      locationButton.classList.toggle("spot__left--button--act");
    }
  }
  columnControlMap();

  //Set the img for spots list
  const spotImg = document.getElementsByClassName("spot__slideshow--card");
  for (let i = 0; i < spotImg.length; i++) {
    spotImg[i].firstChild.nextSibling.setAttribute("src", `${obj.srcimg[i]}`);
  }

  //Set the first slide when obj changing
  currentSlideSpot(1);

  //Set the statistic header obj
  const spotHeaderStat = document.getElementById("actual__header--spot");
  spotHeaderStat.textContent = obj.name + " Statistic";

  //Set the spot header obj
  const spotHeader = document.getElementById("spot__header_right");
  spotHeader.textContent = obj.name;

  //Set the value statistic circle 1
  const circleLevel = document.getElementById("circle__level");
  circleLevel.setAttribute("stroke-dasharray", `${obj.level}, 100`);
  circleLevel.nextSibling.nextSibling.textContent = `${obj.level}`;

  //Set the value statistic circle 2
  const circleCommunity = document.getElementById("circle__community");
  circleCommunity.setAttribute("stroke-dasharray", `${obj.community}, 100`);
  circleCommunity.nextSibling.nextSibling.textContent = `${obj.community}`;

  //Set the value statistic circle 3
  const circleEvent = document.getElementById("circle__event");
  circleEvent.setAttribute("stroke-dasharray", `${obj.eventS}, 100`);
  circleEvent.nextSibling.nextSibling.textContent = `${obj.eventS}`;
}
