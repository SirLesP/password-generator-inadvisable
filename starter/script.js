// Variables provided in starter files
// Array of special characters to be optionally included in password
var specialCharacters = [
  '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

// Array of numeric characters to be optionally included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be optionally included in password
var lowerCasedCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Array of uppercase characters to be optionally included in password
var upperCasedCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

// Variables added by me 

var password = ""
let n = 8 // default minimum length for password 
let combinedArray = [] ;


// Function to prompt user for password options 
function getPasswordOptions() {

  length = window.prompt("How long do you want your password to be?", "Enter a number between 8 and 128");

  // Need to catch cancel 
  if (length == null);

  n = parseInt(length);

  if ((n <=7 ) || (n >= 129) || (isNaN(n))) { alert("Please enter a number between 8 and 128.") ; return};
  


  useSpecial = window.confirm("Do you want your password to include special characters?" );
  useDigits = window.confirm("Do you want your password to include digits?" );
  useLower = window.confirm("Do you want your password to include lower case letters?" );
  useUpper = window.confirm("Do you want your password to include upper case letters?" );


 if (useSpecial || useDigits || useLower || useUpper) window.alert(`Your password will be ${n} characters long.`);
  else { window.alert("You need to choose at least one type of character") ; getPasswordOptions(); }

  combinedArray = [];

  if (useSpecial) combinedArray = specialCharacters;

  if (useDigits) combinedArray = combinedArray.concat(numericCharacters);

  if (useLower) combinedArray = combinedArray.concat(lowerCasedCharacters);

  if (useUpper) combinedArray = combinedArray.concat(upperCasedCharacters);


  
}

// Function for getting a pseudorandom string of length n from an array of characters
function getRandomFrom(arr,n) {

  let chars = ""
  let charCount = 1
  while (charCount <= n) {
    let index = Math.floor(Math.random() * arr.length); 
    chars += arr.at(index);
    ++charCount
  }
  return chars

}

// Main code 

//  Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password output field
function writePassword() { 
 
  getPasswordOptions()
  var password = getRandomFrom(combinedArray, n)         
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
  password = ""
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword); 