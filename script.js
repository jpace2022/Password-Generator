// Assignment Code
// Linked js code th html
console.log("Linked")
 
//out global variable
var passWord = confirm("Do you want to generate a passowrd?")
var result = "random";
//multiple arrays of numbers, specials, uppercase, lowercase
var uppercaseLetters = ["'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',"]
var lowercaseLetters = ["'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'"]
var specials = [",'!','@','#','$','%','^','&','*','(',')'"]
var numbers = ["'0','1','2','3','4','5','6','7','8','9'"]

var generateBtn = document.querySelector("#generate");

function main() {
  var options = window.prompt("Do you want to make a password?")
}


generatePassword = prompt("Would you like lowercase?").toAnyCase();
console.log(generatePassword)
var computerGeneratePassword = choose()
console.log(computerGeneratePassword)

if (lowercaseLetters = true) {
  while (lowercaseLetters = yes) {
    main();
  }
} else if {
  alert("Would you like uppercase?")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  //prompt user for length
  var passWord = confirm("How many characters do you need for your password. Please pick between 8 and 126")
  //check length
  var generatePassword = prompt("How many characters do you need for your password. Please pick between 8 and 126").toAnyCase();
console.log(generatePassword)
var computerGeneratePassword = choose()
console.log(computerGeneratePassword)
  //prompt/confim for type of characters
  //store the responses
  //based on the responses trim/build available poool of characters
  //build passowrk letter by letter
  //generate radonm int within range of availavle chars lenfth 
  //add char to results 
  //do until length  === desire passwords length

  return result
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

