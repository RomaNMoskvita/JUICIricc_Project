console.log(userIcon);

function userIconBarControll() {
  const userIcon = document.getElementById("user--icon__container--controll");
  if (window.innerWidth < 1200) {
    let actualResize = window.innerWidth;
    userIcon.style.left = `calc(928px + ${actualResize - 1200}px)`;
  }
}

//window.onresize = userIconBarControll;
