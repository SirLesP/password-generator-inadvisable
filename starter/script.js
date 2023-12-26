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
  // Alerts to invalid input could be given by alert box(es).
  // Valid input does not explicitly need confirmation according ot the brief. However a "You have selected <parameters> is this OK" confirm box could be added.
  // Keep this clean by just prompting and validating user input.

}

// Function for getting a random element from an array
function getRandom(arr) {

  // This function will generate a series of pseudorandom selections from an array of the whole set of characters selected for password generation. It will either be called multiple times until the whole password length has been generated or will take another parameter to allow it to perform the iteration locally. Local iteration means the function is not being set up and torn down repeatedly, so probably more efficient. Notydifficult to code or understand, so o go for getRandomFrom(arr,passwordLength)
  // Return should be a clean string of the results of picking enough random items from the master array passed in.
  

}

// Function to generate password with user input
function generatePassword() {
  // Uses the parameters specified by the user to generate the password.
  // Build master array of allowable characters from the selected arrays.
  // Call the getRandomFrom(masterArray, n), returning a password string.
  // Or call getRandom function passing an additional character to allow it to iterate internally and return the whole string
  // ! Another possible method could be to not concatenate selected character arrays, but pick directly from them, calculating which array and position to pick from by using array length offsets to transform from the pick value (zero to culmulative array length of the selected arrays) to a corresponding local value in the correct array. A bit tricksy and would need careful testing to avoid off by on errors. No, too tricky - the big optimisation is to just pass the array to the getRandomFrom function.
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input (surely output?)
function writePassword() {
  var password = generatePassword();
  // ? test code var password = "Hello"
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);