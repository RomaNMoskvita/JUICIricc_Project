//Temporary traffic value generator
function updateRandomValueOnline() {
  //Generate a random value
  const randomValue = Math.floor(Math.random() * 1000);
  //Update the content of the element
  document.getElementById("online__traffic").textContent = randomValue;
  const trafficElement = document.getElementById("online__traffic");
  trafficElement.classList.add("traffic__value--animatio");
  setTimeout(() => {
    removeAnimation();
  }, 2000);
  function removeAnimation() {
    const trafficElement = document.getElementById("online__traffic");
    trafficElement.classList.remove("traffic__value--animatio");
  }
}

function updateRandomValueSignup() {
  const randomValue = Math.floor(Math.random() * 1000);
  document.getElementById("signup__traffic").textContent = randomValue;
  const trafficElement = document.getElementById("signup__traffic");
  trafficElement.classList.add("traffic__value--animatio");
  setTimeout(() => {
    removeAnimation();
  }, 2000);
  function removeAnimation() {
    const trafficElement = document.getElementById("signup__traffic");
    trafficElement.classList.remove("traffic__value--animatio");
  }
}

function updateRandomValueSpots() {
  const randomValue = Math.floor(Math.random() * 1000);
  document.getElementById("spots__traffic").textContent = randomValue;
  const trafficElement = document.getElementById("spots__traffic");
  trafficElement.classList.add("traffic__value--animatio");
  setTimeout(() => {
    removeAnimation();
  }, 2000);
  function removeAnimation() {
    const trafficElement = document.getElementById("spots__traffic");
    trafficElement.classList.remove("traffic__value--animatio");
  }
}

// Initial update
updateRandomValueOnline();
updateRandomValueSignup();
updateRandomValueSpots();

// Set interval
setInterval(updateRandomValueOnline, 3000);
setInterval(updateRandomValueSignup, 6000);
setInterval(updateRandomValueSpots, 8000);
