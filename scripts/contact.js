console.log("loaded contact.js");
// alert("Contact page script loaded");

function validateForm() {
    // Get form elements
    const email = document.getElementById("email_input").value;
    const password = document.getElementById("password_input").value;

    console.log("Email:", email);
    console.log("Password:", password);

    // Simple validation
    if (email === "") {
        alert("Please fill in email.");
        return false;
    }

    if (password === "") {
        alert("Please fill in password.");
        return false;
    }

    if (password.length < 7 || password.length > 15) {
        alert("Password must be between 7 and 15 characters.");
        return false;
    }

    return true;
}