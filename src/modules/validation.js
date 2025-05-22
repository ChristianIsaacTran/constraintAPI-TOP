function validation() {
    // email validation (email)
    function checkEmail(emailVal) {
        const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

        if (emailFormat.test(emailVal)) {
            return true;
        } 

        return false;
    }

    function createEmailValidation(emailInput) {
        emailInput.addEventListener("input", () => {
            console.log("fired");
            // if invalid email input, then mark invalid. Clear if valid
            if(!checkEmail(emailInput.value)) {
                emailInput.setCustomValidity("Enter a valid email address in format: something@company.com")
            } else { 
                emailInput.setCustomValidity("");
            }
            emailInput.reportValidity();
        });
    }

    // country validation 

    return { createEmailValidation };
}

export default validation;
