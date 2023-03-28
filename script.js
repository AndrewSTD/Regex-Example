// script.js

function matchPattern() {
    let input = document.getElementById("input").value;
    let pattern = document.getElementById("pattern").value;

    // check if pattern is valid
    try {
        new RegExp(pattern);
    } catch (error) {
        document.getElementById("result").innerHTML = error.message;
        return;
    }

    // match pattern against input
    let match = input.match(pattern);

    if (match) {
        document.getElementById("result").innerHTML = "Match found!";
    } else {
        document.getElementById("result").innerHTML = "No match found.";
    }
}

function register() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // check if email is valid
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("registerResult").innerHTML = "Invalid email format.";
        return;
    }

    // check if password is valid
    let passwordPattern = /^[a-zA-Z0-9]+$/;
    if (!passwordPattern.test(password)) {
        document.getElementById("registerResult").innerHTML = "Invalid password format.";
        return;
    }

    // registration successful
    document.getElementById("registerResult").innerHTML = "Registration successful.";
}
