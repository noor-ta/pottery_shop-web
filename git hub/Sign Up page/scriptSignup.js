//  Conditionals (if-else statements)

var age = prompt("Please, Enter your age ... ");

if (age >= 18) {
  alert("You are eligible to sign up.");
} else {
  alert("You must be at least 18 years old to sign up.");
}

//  Form Validation

document.getElementById("signUpForm").addEventListener("submit", function (e) {
  var email = document.getElementById("email").value;

  if (email === "") {
    alert("Please fill in the email field.");
    e.preventDefault();
  }
});
