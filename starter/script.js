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

var password = ""
let n = 8 // default minimum length for password 
var combinedArray = lowerCasedCharacters ;

// Variables added by me 


// Function to prompt user for password options
function getPasswordOptions() {


  length = window.prompt("How long do you want your password to be?", "Enter a number between 8 and 128");
  console.log(length);
  if (length === "") console.log("empty string " + n); // The third value...
  if (length === null) console.log("null " + n);


  // Check input validity - null on escape, string on input or default and OK . What on empty string?? Looks like a valid, but empty, string...

  if (length == null) console.log("null"); // Accidentally generates password with previous settings if valid
   // ! Bashed very roughly into shape! Doesn't do anything too stupid but not quite right - doesn't prompt for a numeric input if a string put in, just returns to start. Cancel, null string and non-null string that won't parse to number just fail silently, offering a restart. Out of range numbers do get the range prompt and a new entry box.

  n = parseInt(length);
  console.log(n)

  // if (n != 8) console.log("NAN or not " + n);
  // if (length = null) return; // Not really what I want...
 
  // console.log(n)
  if ((n <=7 ) || (n >= 129)) { alert("Please enter a number between 8 and 128.") ; getPasswordOptions()};


// Now generates password even if cancel button pressed.
// Inelegant, gets stuck with alerts showing in a loop until a valid entry, can't be simply cancelled after wrong entry. Also shows spurious values (previous pwd) or null sometimes.

// Need to pseudocode again... paying particualr attention to 



  // Password options selectable by user are password length, between 8 and 128 characters and password character set, which must be at least one of the four above. These inputs must be validated, the length must fall in the allowed range, and at least one character set must be selected.
  // User input can be gathered using a prompt box or boxes with explanatory text.
  // Alerts to invalid input could be given by alert box(es).
  // Valid input does not explicitly need confirmation according ot the brief. However a "You have selected <parameters> is this OK" confirm box could be added.
  // Keep this clean by just prompting and validating user input.
  combinedArray = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters)
}

// let length = 12

// let n = length


// getRandomFrom(combinedArray, n)

// Function for getting a random element from an array
function getRandomFrom(arr,n) {

  // This function will generate a series of pseudorandom selections from an array of the whole set of characters selected for password generation. It will take another parameter to allow it to perform the iteration locally. Local iteration means the function is not being set up and torn down repeatedly, so probably more efficient. 
  // Return should be a clean string of the results of picking enough random items from the master array passed in.

  /* Pseudocode starts here
  Parameters passed to function are the (master) array and the number of characters required to make the password string. The returned parameter is the password string.
  The pseudorandom generator uses the array length to generate values from 0 (inclusive) to array length exclusive (equivalent to -1), correct for indexing.
  The generator is called n times, the resulting characters being concatenated one by one onto the end of a string.
  When n = length of password required, return the completed password string.
  */

  let chars = ""
  let charCount = 1
  while (charCount <= n) {
    let index = Math.floor(Math.random() * arr.length); 
    chars += arr.at(index);
    ++charCount
  }
  return chars
}

// Function to generate password with user input
function generatePassword() {
  // Get parameters from user
if (getPasswordOptions() == null) return;
  // Build master array of allowable characters from the selected arrays.
  // Call the getRandomFrom(masterArray, n), returning a password string of length n.

 
  // * Pseudocode starts here

}

//  Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input (surely output?)
function writePassword() { // better called start password process or something - not really just a write
  generatePassword()
  var password = getRandomFrom(combinedArray, n)         // generatePassword();
  // ? test code var password = "Hello"
 var passwordText = document.querySelector('#password');

 passwordText.value = password;
 password = ""
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword); // Javascript triggered here,and only here.