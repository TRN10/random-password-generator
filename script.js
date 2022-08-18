
// Arrays for computer to choose from

var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '\\', '@', "[", ']', '^', '_', '`', '{', '|', '}', '~'];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbersZeroToNine = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var allCharacters = lowerCase.concat(upperCase).concat(specialCharacters).concat(numbersZeroToNine);


// Assignment Code

var generateBtn = document.querySelector("#generate");


function generatePassword() {

  var lengthOfPassword = window.prompt("How many characters would you like your password to contain? (min 8, max 128)");
  if (!lengthOfPassword) {
    return;
  }

  var lowerCaseResponse = window.confirm("Does your password require a lower-case letter?");
  if(lowerCaseResponse) {
    var index = Math.floor(Math.random() * lowerCase.length);
    var lowerCaseRandom = lowerCase[index];
  
  }



  var upperCaseResponse = window.confirm("Does your password require an upper-case letter?");


  var specialCharResponse = window.confirm("Does your password require a special character?");



}




// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
