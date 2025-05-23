import "./style.css";
import validation from "./modules/validation.js";

const formValidation = validation();
const countryInput = document.querySelector("#country");
const emailInput = document.querySelector("#email");
const postalInput = document.querySelector("#postal-code");
const passwordInput = document.querySelector("#password");
const confirmInput = document.querySelector("#password-confirm");
const form = document.querySelector("form");

// email field validation
formValidation.createEmailValidation(emailInput);

// country field validation
formValidation.createCountryValidation(countryInput);

// postal code validation
formValidation.createPostalCodeValidation(postalInput);

// password field validation
formValidation.createPasswordValidation(passwordInput);

// confirm password field validation
formValidation.createConfirmValidation(confirmInput, passwordInput);

// submission event/form validation
formValidation.createSubmitValidation(form);
