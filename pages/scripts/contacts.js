console.log("loaded contact.js");
//alert("loaded contact.js");

function validateForm(){
    //Get form elements
    const email =document.getElementById("email_input").value;
    const password =document.getElementById("password_input").value;

    console.log("Email:", email);
    console.log("Password:", password);


    //Simple validation
    if (email ==="" ) {
        alert("Please enter an email address.");
        return false;
    }
    if((password.length < 7) || (password.length >15)){
        alert("Password not valid! Should be 7 to 15 characters");
        return false;
    }
    return true;

}