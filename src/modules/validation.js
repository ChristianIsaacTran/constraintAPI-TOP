function validation() {
    // email validation
    function checkEmail(emailVal) {
        const emailFormat = /^[\w-.]+@([\w-]+.)+[\w-]{2,}$/;

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

    // country 

    return { createEmailValidation };
}

export default validation;
