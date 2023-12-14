//Simulation dataBase
const skatePark1 = {
  name: "Cracow Indoor Skatepark",
  city: "Cracow",
  street: "Sliwka 28",
  typeS: "Park",
  quality: "80%",
  level: 45,
  opinion: "35%",
  rate: 8,
  eventS: 8,
};

const skatePark2 = {
  name: "Skatepark im. Dominika Wiśniowskiego",
  city: "Cracow",
  street: "Nad Potokiem 2",
  typeS: "Park",
  quality: "30%",
  level: 25,
  opinion: "25%",
  rate: "40%",
  eventS: 7,
};

const skatePark3 = {
  name: "Skatepark mini Bronowice Gallery",
  city: "Cracow",
  street: "Stawowa 61",
  typeS: "Park",
  quality: "60%",
  level: 65,
  opinion: "65%",
  rate: "40%",
  eventS: 5,
};

const skatePark4 = {
  name: "Skatepark Swoszowice",
  city: "Cracow",
  street: "Kąpielowa",
  typeS: "Park",
  quality: "20%",
  level: 75,
  opinion: "15%",
  rate: "70%",
  eventS: 2,
};

const skatePark5 = {
  name: "Vert Ramp",
  city: "Cracow",
  street: "Lipska",
  typeS: "Park",
  quality: "80%",
  level: 55,
  opinion: "95%",
  rate: "80%",
  eventS: 15,
};

const skatePark6 = {
  name: "Skatepark Wieliczka",
  city: "Cracow",
  street: "Józefa Jedynaka 7",
  typeS: "Park",
  quality: "50%",
  level: 70,
  opinion: "35%",
  rate: "30%",
  eventS: 1,
};

const skatePark7 = {
  name: "Waveparks",
  city: "Cracow",
  street: "Organki 2",
  typeS: "Park",
  quality: "90%",
  level: 35,
  opinion: "98%",
  rate: "90%",
  eventS: 24,
};

const skatePark8 = {
  name: "Filip Kubisz Skate For All",
  city: "Cracow",
  street: "al. Jana Pawła II",
  typeS: "Park",
  quality: "60%",
  level: 25,
  opinion: "24%",
  rate: "40%",
  eventS: 3,
};

const skatePark9 = {
  name: "Skatepark Strzelców",
  city: "Cracow",
  street: "Strzelców 5A",
  typeS: "Park",
  quality: "20%",
  level: 75,
  opinion: "17%",
  rate: "30%",
  eventS: 3,
};

const skatePark10 = {
  name: "Skatepark Henryk Jordan",
  city: "Cracow",
  street: "al. 3 Maja 9",
  typeS: "Park",
  quality: "60%",
  level: 65,
  opinion: "77%",
  rate: "70%",
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
      break;
  }

  console.log(SkateParkFill);
}
