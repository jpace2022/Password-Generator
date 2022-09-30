// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
   var passwordText = document.querySelector("#password");
    passwordText.value = password
  }

  generatePassword
  console.log(generatePassword)

  writePassword
  console.log(writePassword)

  generateBtn.addEventListener("click", writePassword);
 
 //out global variable
  //multiple arrays of numbers, specials, uppercase, lowercase
 var uppercaseLetters = ["'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',"]
 var lowercaseLetters = ["'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'"]
 var specials = [",'!','@','#','$','%','^','&','*','(',')'"]
 var numbers = ["'0','1','2','3','4','5','6','7','8','9'"]
 var password = "" 
 var finalresult = ""; //final password result



 function generatePassword (){
  var length = prompt("Choose length of password between 8 and 126")
  console.log(length)
  if (length < 8 || length > 126) {
    alert("Please choose length of password between 8 and 126!")
    return
  }

var lowercaseLetters = confirm ("Do you want lowercase letter?")
var uppercaseLetters = confirm ("Do you want uppercase letters?")
var specials = confirm ("Do you want special characters?")
var numbers = confirm ("Do you want numbers?")
console.log(uppercaseLetters, lowercaseLetters, numbers, specials);


  if (!lowercaseLetters && !uppercaseLetters && !numbers && !specials) {
    alert("Please enter value."); 
  }
  
  if (lowercaseLetters) {
    password += lowercaseLetters
  }

  if (uppercaseLetters) {
    password += uppercaseLetters
  }

  if (numbers) {
    password += numbers
  }

  if (specials) {
    password += specials
  }

   for (var i = 0; i < length; i++) {
     finalresult += (password.charAt(Math.floor(Math.random()*password.length)))
   }

   return finalresult 

   }


