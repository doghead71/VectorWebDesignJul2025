console.log("loaded contact.js");
//alert("Contact page script loaded");

function validateForm() {
    //Get form elements
    const email = document.getElementById("email_input").value;
    const password = document.getElementById("password_input").value;

    console.log("Email:", email);
    console.log("Password:", password);

    //Simple validation
    if(email === "") {
        alert("Please fill in email.");
        return false;
    }

    if(password === "") {
        alert("Please fill in password.");
        return false;
    }
    
    if(password.length >7 && password.length <16){
        alert("Password is valid ✅");
        return true;
    }
    else {
        alert("Password must be at least 7 characters and less than 16 ❌");
        return false
    }
    return true

}