// Username script starts here

function sign_up(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;

    // var checkUser = docuemnt.getElementById("username").value;
    // var checkEmail = document.getElementById("email").value;

    // if (checkUser === localStorage.getItem("Username", username)) {
    //     username.setCustomValidity("Username was taken.");
    // } else {
    //     localStorage.setItem("Username", username)
    // }

    // if (email === checkEmail) {
    //     email.setCustomValidity("Email was taken.");
    // }

    localStorage.setItem("Username", username);
    localStorage.setItem("Email", email);
}

function remove_white_space(space) {
    var key = space.keyCode;
    if (key == 32) { // spacebar key value of the 32
        space.preventDefault();
    }
}


// Username script ends here


// Confirm password script starts here
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
// Confirm password script ends here
