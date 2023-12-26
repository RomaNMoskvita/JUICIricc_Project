const loginForm = document.getElementById("login__form");
const showLogin = document.getElementById("show-login");
const showSignUp = document.getElementById("show-signup");
const signUpMove = document.getElementById("signup-container-move");
const signupForm = document.getElementById("signup__form");
const footer = document.getElementById("login__footer");
const body = document.getElementById("body__element");

//Control Login Section
showLogin.addEventListener("click", function () {
  loginForm.classList.remove("signin__hide");
  signUpMove.classList.remove("signup__show");
  signupForm.classList.remove("signup__move");
  footer.classList.add("footer__move");
  setTimeout(() => {
    signupForm.style.display = "none";
  }, 200);
  signupForm.classList.remove("signup__move");
});

//Control SignUp Section
showSignUp.addEventListener("click", function () {
  loginForm.classList.add("signin__hide");
  signUpMove.classList.add("signup__show");
  signupForm.style.display = "block";
  signupForm.classList.add("signup__move");
});

// Validate Password
// Password must contain at least one uppercase letter, one lowercase letter, and one numeric digit.

const passwordValidate = document.getElementById("password-validate");
const passwordValFeedback = document.getElementById(
  "password-validate-feedback"
);

passwordValidate.addEventListener("input", function (event) {
  let actPassword = passwordValidate.value;
  event.preventDefault();
  const commonSpecChar = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "(",
    ")",
    "_",
    "+",
    "-",
    "=",
    "{",
    "}",
    "[",
    "]",
    "|",
    ":",
    ".",
  ];
  const bannedSymbols = [
    ",",
    '"',
    "'",
    "/",
    "\\",
    "*",
    "?",
    "~",
    ";",
    "<",
    ">",
  ];
  let commonCharValid = false;
  let bannedCharValid = false;

  // Password must include at least one symbol.
  // Common special characters like (e.g., ! @ # $ % ^ & ( ) _ + - = { } [ ] | : , . ) are allowed.
  for (char of actPassword) {
    if (commonSpecChar.includes(char)) {
      commonCharValid = true;
      break;
    }
  }

  // Password cannot include certain symbols (e.g., ',', '"', "'", '\', '/', '*', '?', '~', ';', '<', '>').
  for (char of actPassword) {
    if (bannedSymbols.includes(char)) {
      bannedCharValid = true;
      break;
    }
  }

  // Password must have more than 8 characters.
  if (actPassword.length < 8 && actPassword.length != 0) {
    passwordValFeedback.innerText =
      " ⓘ Password must be longer than 8 characters.";
  } else if (commonCharValid === false && actPassword.length != 0) {
    passwordValFeedback.innerText =
      " ⓘ Password must include at least one symbol of ( ! @ # $ % ^ & ( ) _ + - = { } [ ] | : . )";
  } else if (bannedCharValid === true && actPassword.length != 0) {
    passwordValFeedback.innerText =
      " ⓘ Password cannot include certain symbols ( , \" ' \\ / * ? ~ ; < >)";
  } else {
    passwordValFeedback.innerText = "";
  }
});
