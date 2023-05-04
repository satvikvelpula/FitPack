let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm_password");

function checkPassword() {
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Password doesn't match.");
    } else {
        confirm_password.setCustomValidity("");
    }
}

password.onchange = checkPassword;
confirm_password.onkeyup = checkPassword;
