// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  function generatePassword() {
    let passwordText = document.querySelector("#password");
    
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

    userSettings.lower = confirm('Do you want to include lowercase letters?');
    userSettings.upper = confirm('Do you want to include uppercase letters?');
    userSettings.number = confirm('Do you want to include numbers?');
    userSettings.special = confirm('Do you want to include special characters?');

    // Generate totalPassArr array based on user input
    if (userSettings.lower === true) {
      alfLowArr.forEach(l => totalPassArr.push(l));
      };
    if (userSettings.upper === true) {
      alfUpArr.forEach(u => totalPassArr.push(u));
    };
    if (userSettings.number === true) {
      charNumArr.forEach(n => totalPassArr.push(n));
    };
    if (userSettings.special === true) {
      charSpecArr.forEach(s => totalPassArr.push(s))
    };
    if (userSettings.lower === false && userSettings.upper === false && userSettings.number === false && userSettings.special === false) {
      alert('Please press the "Generate Password" button again and select at least one criteria');
    };

    // Generate password from totalPassArr
    let password = '';

    for (i = 0; i < userSettings.size; i++) {
      password += totalPassArr[Math.floor(Math.random() * totalPassArr.length)];
    };

    // Validate whether password contains all user criteria
    // if (userSettings.lower === true) {
    //   if (password === alfLowArr.some(w => !password.includes(w))) {
    //     password = notValid;
    //   };
    // };
    // if (userSettings.upper === true) {
    //   if (password === alfUpArr.some(x => !password.includes(x))) {
    //     password = notValid;
    //   };
    // };
    // if (userSettings.number === true) {
    //   if (password === charNumArr.some(y => !password.includes(y))) {
    //     password = notValid;
    //   };
    // };
    // if (userSettings.special === true) {
    //   if (password === charSpecArr.some(z => !password.includes(z))) {
    //     password = notValid;
    //   };
    // };
    // while (password === notValid) {
    //   finalPass();
    // };
      // Pass to textarea in html
      passwordText.value = password;
  };
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

