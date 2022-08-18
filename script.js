
// Arrays for computer to choose from

var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '\\', '@', "[", ']', '^', '_', '`', '{', '|', '}', '~'];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbersZeroToNine = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var combinedCharacters = [];

var finalPassword = []


// Assignment Code

var generateBtn = document.querySelector("#generate");

// Function

function generatePassword() {

  var lengthOfPassword = window.prompt("How many characters would you like your password to contain? (minimum 8, maximum 128)");
  
  if (!lengthOfPassword) {
    return;
  }

  if (lengthOfPassword <= 7) {
    window.alert("password must be at least 8 characters")
    return;
  }

  if (lengthOfPassword >= 129) {
    window.alert("password must be no more than 128 characters")
    return;
  }

  // Change string input to number

  lengthOfPassword = parseInt(lengthOfPassword);

  
  // add lower case array to combinedCharacters array if selected by user

  var lowerCaseResponse = window.confirm("Does your password require a lower-case letter?");

  if(lowerCaseResponse) {
    combinedCharacters = combinedCharacters.concat(lowerCase);
  }


  // add upper case array to combinedCharacters array if selected by user

  var upperCaseResponse = window.confirm("Does your password require an upper-case letter?");

  if(upperCaseResponse) {
    combinedCharacters = combinedCharacters.concat(upperCase);
  }

  // add specialCharacters array to combinedCharacters array if selected by user

  var specialCharResponse = window.confirm("Does your password require a special character?");

  if(specialCharResponse) {
    combinedCharacters = combinedCharacters.concat(specialCharacters);
  }

  // add numbersZeroToNine array to combinedCharacters array if selected by user

  var numberResponse = window.confirm("Does your password require a number?");

  if(numberResponse) {
    combinedCharacters = combinedCharacters.concat(numbersZeroToNine);
  }

  // randomly select from combinedCharacters times by the password lenght specified by user input

 for (let i = 0; i < lengthOfPassword; i++) {
 
  var index = Math.floor(Math.random() * combinedCharacters.length);
  var combinedCharactersRandom = combinedCharacters[index];
  finalPassword.push(combinedCharactersRandom)
}
 
return finalPassword.join("");

}



// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
