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
 var uppercaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]
 var lowercaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
 var specials = [,'!','@','#','$','%','^','&','*','(',')']
 var numbers = ['0','1','2','3','4','5','6','7','8','9']
 var password = [] 
 var finalresult = ""; //final password result


// Generates passwords between 8 - 128 characters and prompts user to reenter if length requirement is not met. 
 function generatePassword (){
  var length = prompt("Choose length of password between 8 and 126")
  console.log(length)
  if (length < 8 || length > 126) {
    alert("Please choose length of password between 8 and 126!")
    return
  }
// Secondary varables for additional criteria
var lowercaseLetters2 = confirm ("Do you want lowercase letter?")
var uppercaseLetters2 = confirm ("Do you want uppercase letters?")
var specials2 = confirm ("Do you want special characters?")
var numbers2 = confirm ("Do you want numbers?")
console.log(uppercaseLetters, lowercaseLetters, numbers, specials);


  if (!lowercaseLetters && !numbers && !specials) {
    alert("Please enter value."); 
  }
  
  if (lowercaseLetters) {
    password = password.concat(uppercaseLetters);
  }

  if (uppercaseLetters) {
    password = password.concat(lowercaseLetters);
  }

  if (numbers) {
    password = password.concat(specials);
  }

  if (specials) {
    passowrd = password.concat(numbers);
  }

   for (var i = 0; i < length; i++) {
     finalresult += password[Math.floor(Math.random()*password.length)]
   }

   return finalresult 

   }