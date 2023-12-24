// Array of special characters to be optionally included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be optionally included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be optionally included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be optionally included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  // Password options selectable by user are password length, between 8 and 128 characters and password character set, which must be at least one of the four above. These inputs must be validated, the length must fall in the allowed range, and at least one character set must be selected.
  // User input can be gathered using a prompt box or boxes with explanatory text.
  // Alerts to invalid input could be given by alert box or boxes.
  // Valid input does not explicitly need confirmation according ot the brief. However a "You have selected <parameters> is this OK" confirm box could be added.

}

// Function for getting a random element from an array
function getRandom(arr) {

  // This function will generate a series of pseudorandom selections from an array of the whole set of characters selected for password generation. It will either be called multiple times until the whole password length has been generated or will take another parameter to allow it to perform the iteration locally.

}

// Function to generate password with user input
function generatePassword() {
  // Uses the parameters specified to generate the password.
  // Build master array of allowable characters from the selected arrays.
  // Call the getRandom function n = password length times and put the results in a string.
  // Or call getRandom functin passing an additional character to allow it to iterate internally and return the whole string
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input (surely output?)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);