//Simulation dataBase
const skatePark1 = {
  name: "Cracow Indoor Skatepark",
  city: "Cracow",
  street: "Sliwka 28",
  typeS: "Park",
  quality: 80,
  level: 45,
  opinion: 35,
  rate: 8,
  eventS: 8,
};

const skatePark2 = {
  name: "Skatepark im. Dominika Wiśniowskiego",
  city: "Cracow",
  street: "Nad Potokiem 2",
  typeS: "Park",
  quality: 30,
  level: 25,
  opinion: 25,
  rate: 4,
  eventS: 7,
};

const skatePark3 = {
  name: "Skatepark mini Bronowice Gallery",
  city: "Cracow",
  street: "Stawowa 61",
  typeS: "Park",
  quality: 60,
  level: 65,
  opinion: 65,
  rate: 4,
  eventS: 5,
};

const skatePark4 = {
  name: "Skatepark Swoszowice",
  city: "Cracow",
  street: "Kąpielowa",
  typeS: "Park",
  quality: 20,
  level: 75,
  opinion: 15,
  rate: 7,
  eventS: 2,
};

const skatePark5 = {
  name: "Vert Ramp",
  city: "Cracow",
  street: "Lipska",
  typeS: "Park",
  quality: 80,
  level: 55,
  opinion: 95,
  rate: 8,
  eventS: 15,
};

const skatePark6 = {
  name: "Skatepark Wieliczka",
  city: "Cracow",
  street: "Józefa Jedynaka 7",
  typeS: "Park",
  quality: 50,
  level: 70,
  opinion: 35,
  rate: 3,
  eventS: 1,
};

const skatePark7 = {
  name: "Waveparks",
  city: "Cracow",
  street: "Organki 2",
  typeS: "Park",
  quality: 90,
  level: 35,
  opinion: 130,
  rate: 9,
  eventS: 24,
};

const skatePark8 = {
  name: "Filip Kubisz Skate For All",
  city: "Cracow",
  street: "al. Jana Pawła II",
  typeS: "Park",
  quality: 60,
  level: 25,
  opinion: 24,
  rate: 4,
  eventS: 3,
};

const skatePark9 = {
  name: "Skatepark Strzelców",
  city: "Cracow",
  street: "Strzelców 5A",
  typeS: "Park",
  quality: 20,
  level: 75,
  opinion: 17,
  rate: 3,
  eventS: 3,
};

const skatePark10 = {
  name: "Skatepark Henryk Jordan",
  city: "Cracow",
  street: "al. 3 Maja 9",
  typeS: "Park",
  quality: 60,
  level: 65,
  opinion: 77,
  rate: 7,
  eventS: 14,
};

const cracowSkatePark = [
  skatePark1,
  skatePark2,
  skatePark3,
  skatePark4,
  skatePark5,
  skatePark6,
  skatePark7,
  skatePark8,
  skatePark9,
  skatePark10,
];

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

function statisticChange(cityP, typeP, filtrP) {
  function filterFun(skateParkItem) {
    console.log(skateParkItem.city);
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

  let SkateParkFill = [];

  switch (true) {
    case filtrP === "Opinion":
      SkateParkFill = cracowSkatePark
        .filter(filterFun)
        .sort(function (a, b) {
          return b.opinion - a.opinion;
        })
        .slice(0, 10);
      shuffleArray(SkateParkFill);
      break;
    case filtrP === "Rate":
      SkateParkFill = cracowSkatePark
        .filter(filterFun)
        .sort(function (a, b) {
          return b.rate - a.rate;
        })
        .slice(0, 10);
      shuffleArray(SkateParkFill);
      break;
    case filtrP === "Quality":
      SkateParkFill = cracowSkatePark
        .filter(filterFun)
        .sort(function (a, b) {
          return b.quality - a.quality;
        })
        .slice(0, 10);
      shuffleArray(SkateParkFill);
      break;
  }

  console.log(SkateParkFill);
}
