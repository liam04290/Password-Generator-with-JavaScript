var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  // Return null if user inupts nothing
  if (password === null) {
    alert("Please select at least one character set.");
  } else {
    passwordText.value = password;
  }
}

function generatePassword() {

  // Password option prompts
  var length;
  // Do-while loop ensures user's input is 8-128 characters
  do {
    length = parseInt(prompt("Enter password length (8-128 characters):"));
  } while (length < 8 || length > 128);
  var includeUppercase = confirm("Do you want uppercase letters?");
  var includeLowercase = confirm("Do you want lowercase letters?");
  var includeNumeric = confirm("Do you want numbers?");
  var includeSpecialChars = confirm("Do you want special characters?");

  // Character sets to use in password
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_-+=<>?";

  // Empty array to store the character sets
  var charSets = [];

  // Based on selected criteria, character sets will be pushed to empty array
  if (includeUppercase) {
    charSets.push(uppercaseChars);
  }
  if (includeLowercase) {
    charSets.push(lowercaseChars);
  }
  if (includeNumeric) {
    charSets.push(numericChars);
  }
  if (includeSpecialChars) {
    charSets.push(specialChars);
  }
  // Checks if user inputs at least one character set, if not, returns null
  if (charSets.length === 0) {
    return null;
  }


  // Generate password
  var password = "";
  for (var i = 0; i < length; i++) {
    // Picks random character set from array
    var randomCharSet = charSets[Math.floor(Math.random() * charSets.length)];

    // Picks random character from selected character set
    var randomChar = randomCharSet[Math.floor(Math.random() * randomCharSet.length)];

    // Add random character to password
    password += randomChar;
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
