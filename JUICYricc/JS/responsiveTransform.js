//This script exchanges my CSS file for a responsive CSS file
function updateStylesheet() {
  const styleLinkIndex = document.getElementById("responsive__index--section");
  const styleLinkHeader = document.getElementById(
    "responsive__header--section"
  );
  const styleLinkFooter = document.getElementById(
    "responsive__footer--section"
  );

  let hrefAtr = styleLinkHeader.getAttribute("href");

  if (window.innerWidth <= 1424 && hrefAtr === "../CSS/header.css") {
    console.log("lol");
    styleLinkIndex.href = "../CSS/indexResponsive.css";
    styleLinkHeader.href = "../CSS/headerResponsive.css";
    styleLinkFooter.href = "../CSS/footerResponsive.css";
  } else if (
    window.innerWidth > 1424 &&
    hrefAtr === "../CSS/headerResponsive.css"
  ) {
    styleLinkIndex.href = "../CSS/index.css";
    styleLinkHeader.href = "../CSS/header.css";
    styleLinkFooter.href = "../CSS/footer.css";
  }

  //
  const userIcon = document.getElementById("user--icon__container--controll");
  if (window.innerWidth < 1200) {
    let actualResize = window.innerWidth;
    userIcon.style.left = `calc(1180px + ${actualResize - 1200}px)`;
  }
}

window.onload = updateStylesheet;
window.onresize = updateStylesheet;
