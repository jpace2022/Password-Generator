// Assignment Code
console.log("Linked")
var generateBtn = document.querySelector("#generate");
var options = "abcdefghijklmnopqrstuwxyzAMBDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()"
var oneToOneTwentyEight = Array(128).fill(null).map((u, i) => i).map(i => i+1)
var choice = prompt []
//out global variable

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  //prompt user for lenght
  //check length
  //prompt/confim for type of characters
  //store the responses
  //based on the responses trim/build available poool of characters
  //build passowrk letter by letter
  //generate radonm int within range of availavle chars lenfth 
  //add char to results 
  //do until length  === desire passwords length

  return 'henry'
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

