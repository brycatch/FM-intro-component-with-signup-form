const form = document.getElementById("form");

const inputName = document.getElementById("name");
const imgName = document.getElementById("img-name");
const labelName = document.getElementById("label-name");

const inputLastName = document.getElementById("last-name");
const imgLastName = document.getElementById("img-last-name");
const labelLastName = document.getElementById("label-last-name");

const inputEmail = document.getElementById("email");
const imgEmail = document.getElementById("img-email");
const labelEmail = document.getElementById("label-email");

const inputPassword = document.getElementById("password");
const imgPassword = document.getElementById("img-password");
const labelPassword = document.getElementById("label-password");

const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

form.addEventListener("submit", () => {
  validateInput(inputName, imgName, labelName);
  validateInput(inputLastName, imgLastName, labelLastName);
  validateInput(inputEmail, imgEmail, labelEmail);
  validateEmail(inputEmail, imgEmail, labelEmail);
  validateInput(inputPassword, imgPassword, labelPassword);
});

function validateInput(input, img, label) {
  if (!input.value.length) {
    setError(input, img, label);
  } else {
    removeError(input, img, label);
  }
}

function validateEmail(input, img, label) {
  if (!emailRegex.test(input.value)) {
    setError(input, img, label);
  } else {
    removeError(input, img, label);
  }
}

function setError(input, img, label) {
  if (!input.classList.contains("input-error")) {
    input.classList.add("input-error");
    img.style.visibility = "visible";
    label.style.visibility = "visible";
  }
}

function removeError(input, img, label) {
  if (input.classList.contains("input-error")) {
    input.classList.remove("input-error");
    img.style.visibility = "hidden";
    label.style.visibility = "hidden";
  }
}
