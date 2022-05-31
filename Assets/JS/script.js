// Assignment Code
// var minlength ()
// var maxlength ()
//after getting answers do some looping
var generateBtn = document.querySelector("#generate");

var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3" , "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26"];
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "@", "#", "$" , "%", "^" , "&", "*", "<", "(", ")", ",", "<", ",", ">", ".", "?", "/", ":", ";", "{", "[", "}", "]" ];
var miscWords = ["monkey", "peacock", "unicorn", "michigan", "missouri", "arizona", "sunrise", "sunset", "smile", "davidf", "joeyb", "funny", "hehe", "movies", "brick", "purple", "pink", "black", "singing", "tophits", "bootcamp", "developer", "income", "opportunity", "decision", "pizza"];

function generatePassword() {
  var generatedPassword = "generated password";
  console.log("clicked generate password");
  return generatedPassword;
  
//  input type="text" id = "password"
// if (promptUpper = yes) 
  //("Your password is: " + newPassword); 
  //console.log("Your password is: " + upperLetters[i]+numbers[i]+lowerLetters[i]+specialChar[i]+miscWords[i]);
}

for (var clickButton of
  document.getElementsByClassName("card-footer"))
  clickButton.addEventListener("click", alertMessage);
  function alertMessage() {
    alert ("To Create A Unique Password Click Ok To Answer The Criteria Questions:");
    gatheroptions ();
  }

  var options = ["Yes", "No"];
  var gatheroptions = function () {
    var promptUpper = window.prompt("Type Yes if you want upper case letters, type No if you do not.");
    var promptNumb = window.prompt("Type Yes if you want numbers, type No if you do not.");
    var promptLCase = window.prompt("Type Yes if you want lower case letters, type No if you do not.");
    var promptSpecial = window.prompt("Type Yes if you want special characters, type No if you do not.");
    var promptRandom = window.prompt("Type Yes if you want random words, type No if you do not.");
    if (!options === "No") { 
      window.alert ("You need to select yes to at least one yes option. Start over.");
      setminmax ();
  
  var setminmax = function () {
    var promptMinlength = window.prompt("What is your minimum length? Pick a number at 8 or above but less than 128")
    var promptMaxlength = window.prompt("What is your maximum length? Pick a number at 128 or below but more than 8")}
    if (promptMinlength < 8) {
      window.alert ("You need to select options above 8 - less than 128, start over");
    }  else if 
      (promptMaxlength > 128) {
      window.alert ("You need to select below 128 - more than 8, start over");
    }
  } 
  function setlength (min,max) {
    min = Math.ceil(promptMinlength)
    max = Math.floor(promptMaxlength)
    return "length"
  }
}
    
//  if (promptMinlength <=8 & promptMaxlength >= 128)
  var Array = [upperLetters+numbers+lowerLetters+specialChar+miscWords]
  //finalArray[Math.floor(Math.random()*arr.length)]
  //var passgenerator = [upperLetters, numbers, lowerLetters, specialChar, miscWords]
  //var array1 = [Math.floor(Math.random(upperLetters,numbers,lowerLetters,specialChar,miscWords))*]
  for(var i=0; i < Array; i++); {
    // This statement will run each time the loop is executed
    console.log("Here is your password: " + Array[i++]);
  }
 
  //for (let i = 0; i <arr.length; i++)
  //  console.log(arr[i]);
  
    // Write password to the #password input

  function writePassword() {
  var password = generatePassword(Array);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

//(promptUpper = "No" && promptNumb = "No" && promptLCase = "No" && promptSpecial = "No" && promptRandom = "No")

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//  if (randomPassword.isgenerated) {
//    console.log("Password is: " + generatedPassword);
//  }