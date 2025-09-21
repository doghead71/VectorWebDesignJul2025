console.log("loaded contact.js");
//alert("contact page script loaded")

function validateForm() {
    //Get form elements
    const email = document.getElementById("email_input").value;
    const password = document.getElementById("password_input").value;

    console.log("Email:", email)
    console.log("Password:", password)

    //Simple valdation
     if (email === ""){
     alert("Please fill in all fields.");
     return false;
     }
    
     if (password === ""){
     alert("Please fill in all fields.");
     return false;
     }

     if(password.length < 7 )
        alert("password is too short");

     if(password.length > 16)
        alert("pass is too long")

     return true

}
