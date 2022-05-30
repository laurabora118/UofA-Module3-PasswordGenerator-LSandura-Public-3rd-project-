// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3" , "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26"];
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "@", "#", "$" , "%", "^" , "&", "*", "<", "(", ")", ",", "<", ",", ">", ".", "?", "/", ":", ";", "{", "[", "}", "]" ];
var miscWords = ["monkey", "peacock", "unicorn", "michigan", "missouri", "arizona", "sunrise", "sunset", "smile", "davidf", "joeyb", "funny", "hehe", "movies", "brick", "purple", "pink", "black", "singing", "tophits", "bootcamp", "developer", "income", "opportunity", "decision", "pizza"];
var userAnswer = ["Yes", "No"];

function makePassword(){
  var makePassword = "makepassword";
  console.log("make the random password");
  return makePassword
  }
  // Write password to the #password input
function writePassword() {
  var password = makePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// arr[random];
// var arr = [0,]

//for (var i = 0; i < upperLetters.length + numbers.length + lowerLetters.length + specialCha.length + randomWords.length; i++){
//  console.log("Hello, your password is: " + [i])
//}

// possible way to write function 
//declarerandomPassword() { 
// console.log("Hello, your password is: " + specialChar + numbers + upperLetters + lowerLetters + randomWords);
// return;
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var askUser = function () {
  var userQuestion1 = window.prompt("Do you want to include special characters? Yes or No");

if (!userAnswer === yes)
  console.log("working");
else { (!userAnswer === no) 
  window.alert("Sorry you can only select yes to use this password generator.")
}
}
