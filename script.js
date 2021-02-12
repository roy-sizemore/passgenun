// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare character arrays and password
const alfLowArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const alfUpArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const charNumArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const charSpecArr = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '}', '|', '~'];
let tempArr = [];
let totalPassArr = [];

// Class for password strength criteria set by the user
class userSettings {
  constructor(size, lower, upper, number, special) {
    size = 8,
    lower = false,
    upper = false,
    number = false,
    special = false
  };
};

// User input prompts and confirmation boxes
function userCriteria() {
  userSettings.size = prompt('Please input a password length between 8 - 128');
  while (userSettings.size < 8 || userSettings.size > 128) {
    userSettings.size = prompt('Please input a password length between 8 - 128');
  };

  userSettings.lower = confirm('Do you want to include lowercase letters?');
  userSettings.upper = confirm('Do you want to include uppercase letters?');
  userSettings.number = confirm('Do you want to include numbers?');
  userSettings.special = confirm('Do you want to include special characters?');

  if (userSettings.lower === false && userSettings.upper === false && userSettings.number === false && userSettings.special === false) {
    alert('Please press the "Generate Password" button again and select at least one criteria');
  };
};

// Populate password based on user input
function passPopulate() {
    if (userSettings.lower === true) {
      tempArr.push(alfLowArr[Math.floor(Math.random() * alfLowArr.length)]);
      alfLowArr.forEach(l => totalPassArr.push(l));
      };
    if (userSettings.upper === true) {
      tempArr.push(alfUpArr[Math.floor(Math.random() * alfUpArr.length)]);
      alfUpArr.forEach(u => totalPassArr.push(u));
    };
    if (userSettings.number === true) {
      tempArr.push(charNumArr[Math.floor(Math.random() * charNumArr.length)]);
      charNumArr.forEach(n => totalPassArr.push(n));
    };
    if (userSettings.special === true) {
      tempArr.push(charSpecArr[Math.floor(Math.random() * charSpecArr.length)]);
      charSpecArr.forEach(s => totalPassArr.push(s));
    };
  };

// Write password to the #password input
function writePassword() {
  var password = generatePassword(password);
  function generatePassword() {
    var passwordText = document.querySelector("#password");
      userCriteria();
      passPopulate();
      
      // Generate password from tempArr and totalPassArr
      password = tempArr.join('');

      for (i = 0; i < userSettings.size - tempArr.length; i++) {
        password += totalPassArr[Math.floor(Math.random() * (totalPassArr.length - tempArr.length - 1))];
      };
      
      // Clear tempArr and totalPassArr to fix bug
      tempArr = [];
      totalPassArr = [];

      passwordText.value = password;
  };
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

