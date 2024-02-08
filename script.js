const form = document.querySelector("form");

const email = document.getElementById("email");
const emailError = document.querySelector(".emailError");

const country = document.getElementById("country");

const zip = document.getElementById("zip");
const zipError = document.querySelector(".zipError");

const pass = document.getElementById("pass");
const confPass = document.getElementById("confPass");
const passError = document.querySelector(".passError");

form.addEventListener("submit", (event) => {
  if (email.validity.valid && zip.validity.valid && pass.validity.valid) {
    alert("High Five!");
    console.log("High five");
  } else {
    alert("Nope");
    console.log("Nope");

    event.preventDefault();
  }
});

email.addEventListener("input", () => {
  if (email.validity.valid) {
    emailError.textContent = "";
    zip.setCustomValidity("Value needs to be an email address");
  } else if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an email address!";
    zip.setCustomValidity("You need to enter an email address!");
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Value needs to be an email address";
    zip.setCustomValidity("Value needs to be an email address");
  }
});

zip.addEventListener("input", () => {
  let reg = null;
  let mesg = null;

  if (country.value === "af") {
    reg = /^\d{4}$/;
    mesg = "Afghanistan must have exactly 4 digits in its postal code!";
  } else if (country.value === "by") {
    reg = /^\d{6}$/;
    mesg = "Belarus must have exactly 6 digits in its postal code!";
  } else if (country.value === "ba") {
    reg = /^\d{5}$/;
    mesg =
      "Bosnia and Herzegovina must have exactly 5 digits in its postal code!";
  }

  let constraint = new RegExp(reg, "");

  if (constraint.test(zip.value)) {
    zip.setCustomValidity("");
    zipError.innerHTML = "";
  } else {
    zip.setCustomValidity(mesg);
    zipError.innerHTML = mesg;
  }
});

pass.addEventListener("input", () => {
  let reg = /^.{8,}$/;
  let constraint = new RegExp(reg, "");

  if (constraint.test(pass.value)) {
    passError.innerHTML = "";
  } else {
    passError.innerHTML = "Password need to be atleast 8 characters long!";
  }
});

confPass.addEventListener("input", () => {
  if (pass.value !== confPass.value) {
    passError.innerHTML = "Passwords do not match!";
  } else {
    passError.innerHTML = "";
  }
});
