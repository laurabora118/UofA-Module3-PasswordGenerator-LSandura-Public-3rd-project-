// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChar = ["!", "@", "#", "$" , "%", "^" , "&", "*", "<", "(", ")", ",", "<", ">", "?", "/", ":"];
var numbers = ["0", "1", "2", "3" , "4", "5", "6", "7", "8", "9"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomWords = ["Monkey", "Peacock", "Unicorn", "Michigan", "Missouri", "Arizona", "Sunrise", "Sunset", "Funny", "Smile", "DavidF", "JoeyB", "Hehe"];

function makePassword(){
  var makePassword = "makepassword";
  console.log("click make password");
  return makePassword
  }
  
// Write password to the #password input
function writePassword() {
  var password = makePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
