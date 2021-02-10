// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  function generatePassword() {
    let passwordText = document.querySelector("#password");
    
    // passwordText.value = password;
    // Declare arrays containing upper and lower case letters, numbers and the special characters listed in the assignment readme w/empty array for all characters to be included in the new password based on user input
    const alfLowArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const alfUpArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const charNumArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const charSpecArr = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '}', '|', '~'];
    let totalPassArr = [];

    // Class for password strength characteristics set by the user. Defaults to minimum requirements
    class userSettings {
      constructor(lower, upper, number, special) {
        size = 8,
        lower = false,
        upper = false,
        number = false,
        special = false
      };
    };

    // User input prompts and confirmation boxes
    userSettings.size = prompt('Please input a password length between 8 - 128');
    while (userSettings.size < 8 || userSettings.size > 128) {
      userSettings.size = prompt('Please input a password length between 8 - 128');
    };
    console.log(userSettings.size);

    userSettings.lower = confirm('Do you want to include lowercase letters?');
    userSettings.upper = confirm('Do you want to include uppercase letters?');
    userSettings.number = confirm('Do you want to include numbers?');
    userSettings.special = confirm('Do you want to include special characters?');

    // Generate totalPassArr array based on user input
    if (userSettings.lower === true) {
      alfLowArr.forEach(lett => totalPassArr.push(lett))
      };
    if (userSettings.upper === true) {
      alfUpArr.forEach(letter => totalPassArr.push(letter))
    };
    if (userSettings.number === true) {
      charNumArr.forEach(numero => totalPassArr.push(numero))
    };
    if (userSettings.special === true) {
      charSpecArr.forEach(spec => totalPassArr.push(spec))
    };

    // Generate password from totalPassArr
    // totalPassArr += 
    console.log(totalPassArr[Math.floor(Math.random() * totalPassArr.length)] * userSettings.size);
    // console.log(totalPassArr);
  };
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

