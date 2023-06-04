var passwords = ['umat', 'umaMMar', 'UMATFATaaa4E', 'umarUMar217', '234565678'];
var newPassword = passwords.map((element) => {
  var isNumber = false;
  var isUpperCase = false;
  var isLowerCase = false;
  var isValid = true;

  for (let index = 0; index < element.length; index++) {
    const char = element[index];

    if (char >= 'a' && char <= 'z') {
      isLowerCase = true;
    } else if (char >= 'A' && char <= 'Z') {
      isUpperCase = true;
    } else if (char >= '0' && char <= '9') {
      isNumber = true;
    } else {
      isValid = false; // Invalid character encountered
      break; // Exit the loop since the password is already invalid
    }
  }

  if (!isLowerCase || !isNumber || !isUpperCase || element.length <= 8) {
    isValid = false; // Additional conditions to check for validity
  }

  return isValid;
});

console.log(newPassword);


