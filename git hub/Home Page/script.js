// Basic JavaScript Syntax

window.onload = function () {
  alert("Welcome to the pottery shop website ^_^ ");
};

// Variables and Data Types

var myName = "Noor El-telbani";
var myAge = 21;
var IsPotteryshopWebsite = true;

console.log(myName);
console.log(myAge);
console.log(IsPotteryshopWebsite);

// Arrays

var OurCollections = [
  "Dishes ",
  "Vases ",
  "Home Edition ",
  "Plant Pots ",
  "Candle Holders ",
];

for (var i = 0; i < OurCollections.length; i++) {
  console.log(OurCollections[i]);
}

// Basic Operators
var NUM1 = 50;
var NUM2 = 5;

document.write("<br>" + "Basic Operators : " + "<br>");
document.write("Addition    " + (NUM1 + NUM2) + "<br>");
document.write("Sudtraction    " + (NUM1 - NUM2) + "<br>");
document.write("Multiplication    " + NUM1 * NUM2 + "<br>");
document.write("Division    " + NUM1 / NUM2 + "<br>");

//  Loops (for or while loop)

for (var i = 1; i <= 10; i++) {
  console.log(i);
}

// Event Handling

document.getElementById("changeBackgroundColor").onclick = function () {
  document.body.style.backgroundColor = "#fff";
};
