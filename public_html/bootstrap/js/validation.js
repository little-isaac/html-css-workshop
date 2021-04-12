function validate(form) {
    /* Validation code */
    debugger;
    var usernameValue = form.username.value;
    var emailaddressValue = form.emailaddress.value;
    var passwordValue = form.password.value;
    var confirm_passwordValue = form.confirm_password.value;

    form.username.classList.remove("is-invalid");
    form.emailaddress.classList.remove("is-invalid");
    form.password.classList.remove("is-invalid");
    form.confirm_password.classList.remove("is-invalid");

    var usernamePatt = /^[a-zA-Z _-]+$/g;
    var passwordPatt = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    if (usernameValue == "") {
        form.username.classList.add("is-invalid");
        document.querySelector('.username-error-div').innerHTML = 'Please Enter username First';
        return false;
    } else {
        if (!usernamePatt.test(usernameValue)) {
            form.username.classList.add("is-invalid");
            document.querySelector('.username-error-div').innerHTML = 'Enter Valid Username';
            return false;
        } else {
            form.username.classList.add("is-valid");
        }

    }

    if (emailaddressValue == "") {
        form.emailaddress.classList.add("is-invalid");
        document.querySelector('.emailaddress-error-div').innerHTML = 'Please Enter email First';
        return false;
    }

    if (passwordValue == "") {
        form.password.classList.add("is-invalid");
        document.querySelector('.password-error-div').innerHTML = 'Please Enter password First';
        return false;
    } else {
        if (!passwordPatt.test(passwordValue)) {
            form.password.classList.add("is-invalid");
            document.querySelector('.password-error-div').innerHTML = 'Passwords must contain at least eight characters, including uppercase, lowercase letters and numbers.';
            return false;
        } else {
            form.password.classList.add("is-valid");
        }
    }

    if (confirm_passwordValue == "") {
        form.confirm_password.classList.add("is-invalid");
        document.querySelector('.confirm-password-error-div').innerHTML = 'Please Enter confirm password First';
        return false;
    }

    if (passwordValue != confirm_passwordValue) {
        form.confirm_password.classList.add("is-invalid");
        document.querySelector('.confirm-password-error-div').innerHTML = 'your confirm password should be same as password';
        return false;
    }


    return true;
}


function confirmPasswordValidation(confirmPasswordValue) {
    var passwordValue = document.querySelector('.password-value').value;
    if (confirmPasswordValue == "") {
        document.querySelector('.confirm-password-value').classList.add("is-invalid");
        document.querySelector('.confirm-password-error-div').innerHTML = 'Please Enter confirm password First';
    } else {
        if (passwordValue != confirmPasswordValue) {
            document.querySelector('.confirm-password-value').classList.remove("is-valid");
            document.querySelector('.confirm-password-value').classList.add("is-invalid");
            document.querySelector('.confirm-password-error-div').innerHTML = 'confirm password should be = password';

        } else {
            document.querySelector('.confirm-password-value').classList.remove("is-invalid");
            document.querySelector('.confirm-password-value').classList.add("is-valid");
        }
    }
}