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

  if (window.innerWidth <= 1424) {
    //styleLinkIndex.href = "../CSS/indexResponsive.css";
    styleLinkHeader.href = "../CSS/headerResponsive.css";
    //styleLinkFooter.href = "../CSS/footerResponsive.css";
  } else if (hrefAtr === "../CSS/headerResponsive.css") {
    //styleLinkIndex.href = "../CSS/index.css";
    styleLinkHeader.href = "../CSS/header.css";
    //styleLinkFooter.href = "../CSS/footer.css";
  }
}

window.onload = updateStylesheet;
window.onresize = updateStylesheet;
