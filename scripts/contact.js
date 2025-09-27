console.log("loaded contacts.js")
alert("contact page script loaded")
// alert("Contact page script loaded");

function validateForm() {
    // Get form elements
    const email = document.getElementById("email_input").value;
    const password = document.getElementById("password_input").value;

    console.log("Email:", email);
    console.log("Password:", password);

    // Simple validation  if (email==="" || password==="") {
    if (email === "" || password === "") {
        alert("Please fill in all fields");
        return false;
    } 
    if (password.length > 7 && password.length < 17) {
        alert("Password is valid ✅");
        return true;
    } else {
        alert("Password must be at least 8 characters and less than 17 ❌");
        return false;
    }
}