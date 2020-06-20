// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// characters that can be used in password are given a variable and defined
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var characters = ["!","@","#","$","%","^","&","*"];
var userPassword = [];
var password = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// for(var i = 0; i < upperCase.length; i++){
//   console.log(upperCase[i]);
// }

function generatePassword(){
// I choose a length of at least 8 characters and no more than 128 characters
var passwordLength = prompt("Choose a length between 8 characters and 128 characters.")

// if user chooses a number that is not between 8 and 128
while (passwordLength < 8 || passwordLength > 128){
  // user will see the prompt message 
  // this loop continues until the user inputs a valid number 
  passwordLength = prompt("Please enter a valid password length that is between 8 and 128.");
}

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
var userLowerCase = confirm("Do you want to include lowercase characters?");
var userUpperCase = confirm("Do you want to include uppercase characters?");
var userNumbers = confirm("Do you want to include numeric characters?");
var userCharacters = confirm("Do you want to include special characters?");

// if user clicks "OK" to var userLowerCase
if (userLowerCase === true){
  // var lowerCase will be included in randomly generated password
  // using "concat" will allow for var lowerCase to be added to "userPassword" array
  userPassword = userPassword.concat(lowerCase);
  console.log(userLowerCase);
}
// if user clicks "CANCEL" then var lowerCase will not be included in generated password
else {
  userPassword = userPassword;
}
  

// if user clicks "OK" to var userUpperCase
if (userUpperCase === true){
  // var upperCase will be included in randomly generated password
  // using "concat" will allow for var upperCase to be added to "userPassword" array
  userPassword = userPassword.concat(upperCase);
  console.log(userUpperCase);
}
// if user clicks "CANCEL" then var upperCase will not be included in generated password
else {
  userPassword = userPassword;
}
  

// if user clicks "OK" to var userNumbers
if (userNumbers === true){
  // var upperNumbers will be included in randomly generated password
  // using "concat" will allow for var numbers to be added to "userPassword" array
  userPassword = userPassword.concat(numbers);
  console.log(userNumbers);
}
// if user clicks "CANCEL" then var numbers will not be included in generated password
else {
  userPassword = userPassword;
}

// if user clicks "OK" to var userCharacters
if (userCharacters === true){
    // var upperCharacters will be included in randomly generated password
  // using "concat" will allow for var characters to be added to "userPassword" array
  userPassword = userPassword.concat(characters);
  console.log(userCharacters);
}
// if user clicks "CANCEL" then var characters will not be included in generated password
else {
  userPassword = userPassword;
}

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
for (var i = 0; i < passwordLength; i++){
var randomPassword = userPassword[Math.floor(Math.random() * userPassword.length)];
  password = password + randomPassword
  console.log(password);
}
return password;
}


