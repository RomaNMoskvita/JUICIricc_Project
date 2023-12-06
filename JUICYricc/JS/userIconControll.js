function userIconControll() {
  const userIconForward = document.getElementById(
    "user--icon__container--controll"
  );
  setTimeout(function () {
    userIconForward.classList.toggle("userIconForward");
  }, 100);
}
