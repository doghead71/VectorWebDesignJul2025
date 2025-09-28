console.log("contacts.js loaded");

function validateForm() {
  const email = document.getElementById("email_input").value;
  const password = document.getElementById("password_input").value;

  if (email === "" || password === "") {
    alert("Please fill in all fields");
    return false;
  }

  if (password.length >= 8 && password.length <= 16) {
    alert("Password is valid ✅");
    return true;
  } else {
    alert("Password must be between 8–16 characters ❌");
    return false;
  }
}
