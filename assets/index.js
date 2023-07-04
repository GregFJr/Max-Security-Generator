// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  const length = parseInt(prompt('Enter the password length:'));
  const includeNumbers = confirm('Include numbers?');
  const includeCharacters = confirm('Include characters?');
  const includeSpecialCharacters = confirm('Include special characters?');
  const includeUpperCase = confirm('Include uppercase?');
  const includeLowerCase = confirm('Include lowercase?');
  

  const numbers = '0123456789';
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const specialCharacters = '!@#$%^&*()-_=+[]{}|:;,.<>?';

  let validChars = '';
  let password = '';

  if(isNaN(length) || length < 8 || length > 128) {
    alert('Invaild Password length. Please try again');
    return;
  }

  if (includeNumbers) {
    validChars += numbers;
    password += getRandomChar(numbers);
  } 

  if (includeCharacters) {
    validChars += characters;
    password += getRandomChar(characters);
  }

  if (includeSpecialCharacters) {
    validChars += specialCharacters;
    password += getRandomChar(specialCharacters);
  }

  if (includeUpperCase) {
    validChars += validChars.toUpperCase();
    password += getRandomChar(validChars.toUpperCase());
  }

  if (includeLowerCase) {
    validChars += validChars.toLowerCase();
    password += getRandomChar(validChars.toLowerCase());
  }

  while (password.length < length) {
    password += getRandomChar(validChars);
  }

  return password;
}

function getRandomChar(characters) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

// Example usage:
// document.getElementById('generateButton').addEventListener('click', function() {
//   const password = generatePassword();
//   console.log(password);
// });



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
