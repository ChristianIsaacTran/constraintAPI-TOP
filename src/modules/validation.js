function validation() {
    // email validation (email)
    function checkEmail(emailVal) {
        // detects correct email format
        const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

        if (emailFormat.test(emailVal)) {
            return true;
        }

        return false;
    }

    function createEmailValidation(emailInput) {
        emailInput.addEventListener("input", () => {
            // if invalid email input, then mark invalid. Clear if valid
            if (!checkEmail(emailInput.value)) {
                emailInput.setCustomValidity(
                    "Enter a valid email address in format: something@company.com",
                );
            } else {
                emailInput.setCustomValidity("");
            }
            emailInput.reportValidity();
        });
    }

    // country validation
    function checkCountry(countryVal) {
        // detects whitespace only strings and empty strings
        const onlyWhitespace = /^\s*$/;

        // if the given string is empty or only contains whitespaces, return false
        if (onlyWhitespace.test(countryVal)) {
            return false;
        }

        return true;
    }

    function createCountryValidation(countryInput) {
        countryInput.addEventListener("input", () => {
            // if the country is whitespaces or empty, flag for error
            if (!checkCountry(countryInput.value)) {
                countryInput.setCustomValidity(
                    "Cannot have empty string or string of only whitespaces",
                );
            } else {
                countryInput.setCustomValidity("");
            }

            countryInput.reportValidity();
        });
    }

    // postal code validation
    function checkPostal(postalValue) {
        const zipCodeFormatUS = /^\d{5}(-\d{4})?$/;

        // if value matches the US zip code format, return true
        if (zipCodeFormatUS.test(postalValue)) {
            return true;
        }

        return false;
    }

    function createPostalCodeValidation(postalInput) {
        postalInput.addEventListener("input", () => {

            // if the postal code value isn't in correct format, flag error
            if (!checkPostal(postalInput.value)) {
                postalInput.setCustomValidity(
                    "Needs to be in US postal code format: 12345 or 12345-1234",
                );
            } else {
                postalInput.setCustomValidity("");
            }

            postalInput.reportValidity();
        });
    }

    // password validation
    function checkPassword(passwordVal) {
        // password requires: 1 capital letter, 1 number, 1 special character
        const passwordFormat = /^(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])\S+$/;

        // if the password is valid, return true
        if (passwordFormat.test(passwordVal)) {
            return true;
        }

        return false;
    }

    function createPasswordValidation(passwordInput) {
        passwordInput.addEventListener("input", () => {
            // if the password is in invalid format, flag error
            if (!checkPassword(passwordInput.value)) {
                passwordInput.setCustomValidity(
                    "Password needs: 1 capital letter, 1 number, and 1 special character. No whitespace",
                );
            } else {
                passwordInput.setCustomValidity("");
            }

            passwordInput.reportValidity();
        });
    }

    // password confirm validation
    function checkConfirm(confirmVal, passwordVal) {
        // if the confirmation value matches the password in the password field, then return true.
        if (confirmVal === passwordVal) {
            return true;
        }

        return false;
    }

    function createConfirmValidation(confirmInput, passwordInput) {

        // check for validity as user types input
        confirmInput.addEventListener("input", () => {
            // if the passwords are not the same, flag error
            if (!checkConfirm(confirmInput.value, passwordInput.value)) {
                confirmInput.setCustomValidity(
                    "Password and password confirmation do not match",
                );
            } else {
                confirmInput.setCustomValidity("");
            }

            confirmInput.reportValidity();
        });

        // check validity if user refocuses onto the input element
        confirmInput.addEventListener("focus", () => {
            // if the passwords are not the same, flag error
            if (!checkConfirm(confirmInput.value, passwordInput.value)) {
                confirmInput.setCustomValidity(
                    "Password and password confirmation do not match",
                );
            } else {
                confirmInput.setCustomValidity("");
            }

            confirmInput.reportValidity();
        });

        // add a check to the passwordInput if the user changes password again
        passwordInput.addEventListener("input", () => {
            // if the passwords are not the same, flag error
            if (!checkConfirm(confirmInput.value, passwordInput.value)) {
                confirmInput.setCustomValidity(
                    "Password and password confirmation do not match",
                );
            } else {
                confirmInput.setCustomValidity("");
            }
        });

        /*
        note: calling .reportValidity() forces the user to focus on the 
        HTML element for the error, so when we type into the regular 
        passwordInput, we want to flag the error but not report it to 
        not break focus on the passwordInput element in HTML.
        */
    }

    // submit button/submit event validation
    function createSubmitValidation(form) {
        form.addEventListener("submit", (e) => {
            if(!form.reportValidity()) {
                e.preventDefault();
                return;
            }
            
            // in this case, still prevent default and display high five message
            e.preventDefault();
            const modal = document.querySelector("dialog");
            modal.setAttribute("class", "visible");
            modal.showModal();
        });
    }

    return {
        createEmailValidation,
        createCountryValidation,
        createPostalCodeValidation,
        createPasswordValidation,
        createConfirmValidation,
        createSubmitValidation
    };
}

export default validation;
