console.log("loaded contact.js");
//alert("Contact page script loaded.");

function validateForm()
{
    // Get form elements
    const email = document.getElementById("email_input").value;
    const password = document.getElementById("password_input").value;

    console.log("Email:", email);
    console.log("Password:", password);

    /* Simple Validation */
    /* Checking if email and password being submitted are blank (i.e. Must have information.) */
    if(email === "")
    {
        alert("Please fill out email field.");
        return false;
    }
    if (password === "")
    {
        alert("Please fill out password field.");
        return false;
    }
    
    /* Checking password length --> must be greater than 7
    but less than 16. */

    if (password.length < 7)
    {
        alert("Password is too short");
    }
    if (password.length > 16)
    {
        alert("password is too long");
    }
    /*else if (email === "" || password === "")
    {
        alert("Please fill out all fields.");
        return false;
    }*/

    
    return true;
}