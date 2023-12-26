//Control Login Section

const loginForm = document.getElementById("login__form");
const showLogin = document.getElementById("show-login");
const showSignUp = document.getElementById("show-signup");
const signUpMove = document.getElementById("signup-container-move");
const signupForm = document.getElementById("signup__form");
const footer = document.getElementById("login__footer");
const body = document.getElementById("body__element");

showLogin.addEventListener("click", function () {
  loginForm.classList.remove("signin__hide");
  signUpMove.classList.remove("signup__show");
  signupForm.classList.remove("signup__move");
  footer.classList.add("footer__move");
  setTimeout(() => {
    signupForm.style.display = "none";
  }, 200);

  //body.style.height = "400px";
  signupForm.classList.remove("signup__move");
});

showSignUp.addEventListener("click", function () {
  loginForm.classList.add("signin__hide");
  signUpMove.classList.add("signup__show");
  signupForm.style.display = "block";
  signupForm.classList.add("signup__move");
  //ooter.classList.remove("footer__move");
});

//Control SignUp Section
