console.log("loaded contact.js");
//alert("Contact page script loaded");

function validateform() {
    // Get form elements 
    const email =document.getElementById("email_input").value;
    const password =document.getElementById("password_input").value;

    console.log("Email:",email)
    console.log("Password:",password)

    //simple validation
    if (email==="") {
        alert("Please fill in all fields.");
        return false;
    }

    //simple validation
    if (password==="") {
        alert("Password Required");
        return false;
    }

    //simple validation
    if (password > 16); {
        alert("7-16 characters")
    }

    //simple validation
    if (password < 7); {
        alert("7-16 characters")
    }
    return false;
  

}