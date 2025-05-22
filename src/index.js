import "./style.css";
import validation from "./modules/validation.js";

const formValidation = validation();

const emailInput = document.querySelector("#email");

formValidation.createEmailValidation(emailInput);