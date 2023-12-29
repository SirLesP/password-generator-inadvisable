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
  if (length == null) ;

   // ! Bashed very roughly into shape! Doesn't do anything too stupid but not quite right - doesn't prompt for a numeric input if a string put in, just returns to start. Cancel, null string and non-null string that won't parse to number just fail silently, offering a restart. Out of range numbers do get the range prompt and a new entry box. Might look at dropping the test for empty string as that should surely come back as Nan but I'm having trouble with logical operators using that. So on to the other imputs, which are binary choices in a series of four alerts or a set of four boxes in one alert. Not quite catching invalid string input = still outputs pwd.

// console.log(length)
  n = parseInt(length);
//  console.log(n)
//  if (isNaN(n)) console.log(`n = Nan is truthy ${n}`)
  if ((n <=7 ) || (n >= 129) || (isNaN(n))) { alert("Please enter a number between 8 and 128.") ; return};
  // Not catching NaN. Apparently NaN is of type "number"


  useSpecial = window.confirm("Do you want your password to include special characters?" );
  useDigits = window.confirm("Do you want your password to include digits?" );
  useLower = window.confirm("Do you want your password to include lower case letters?" );
  useUpper = window.confirm("Do you want your password to include upper case letters?" );


 if (useSpecial || useDigits || useLower || useUpper) window.alert(`Your password will be ${n} characters long ${useDigits}`);
  else { window.alert("You need to choose at least one type of character") ; getPasswordOptions(); }

  combinedArray = [];

  if (useSpecial) combinedArray = specialCharacters;

  if (useDigits) combinedArray = combinedArray.concat(numericCharacters);

  if (useLower) combinedArray = combinedArray.concat(lowerCasedCharacters);

  if (useUpper) combinedArray = combinedArray.concat(upperCasedCharacters);


  
}



// Function for getting a random element from an array
function getRandomFrom(arr,n) {

 
  /* Pseudocode starts here
  Parameters passed to function are the (master) array and the number of characters required to make the password string. The returned parameter is the password string.
  The pseudorandom generator uses the array length to generate values from 0 (inclusive) to array length exclusive (equivalent to -1), correct for indexing.
  The generator is called n times, the resulting characters being concatenated one by one onto the end of a string.
  When n = length of password required, return the completed password string.
  */

  // ! Clear displayed (old) password when 'generate password is pressed for second time and on.

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
getPasswordOptions()
  // Build master array of allowable characters from the selected arrays.
  // Call the getRandomFrom(masterArray, n), returning a password string of length n.

 


}

//  Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input (surely output?)
function writePassword() { // better called start password process or something - not really just a write
 
  generatePassword()
  var password = getRandomFrom(combinedArray, n)         // generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
  password = ""
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword); // Javascript triggered here,and only here.