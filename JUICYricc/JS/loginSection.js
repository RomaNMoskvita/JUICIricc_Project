//Control Login Section

const loginForm = document.getElementById("login__form");
const showLogin = document.getElementById("show-login");
const showSignUp = document.getElementById("show-signup");
const signUpMove = document.getElementById("signup-container-move");

showLogin.addEventListener("click", function () {
  loginForm.classList.remove("signin__hide");
  signUpMove.classList.remove("signup__show");
});

showSignUp.addEventListener("click", function () {
  loginForm.classList.add("signin__hide");
  signUpMove.classList.add("signup__show");
});

//Control SignUp Section
