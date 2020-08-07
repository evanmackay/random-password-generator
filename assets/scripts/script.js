
// Variables defined to generate random password
let lowerCaseLtrs = "abcdefghijklmnopqrstuvwxyz"
let lowerCaseLtrsArr = lowerCaseLtrs.split("")
let upperCaseLtrs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let upperCaseLtrsArr = upperCaseLtrs.split("")
let numbers = "0123456789"
let numbersArr = numbers.split("")
let symbols =  "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
let symbolsArr = symbols.split("")
// alert informing user to select random password
window.onload = alert("Click the Genereate Password button to generate a new password!")
// Password generating function
function generatePass (){
  let allEl = []
  let completedPass = ""
// initial propmt for user to select character length
  let passwordPrompt = prompt("Select a character length between 8 and 128 characters.")
// pulls from the array values to select which random characters will be used.

// If statement makes sure that the users input meets the criteria to generate a proper password.
  if (passwordPrompt < 8 || passwordPrompt > 128) {
    alert("Password must be within 8 or 128 characters.")
  } else {
    if(confirm("Would you like to add uppercase letters?")) {
      allEl = allEl.concat(upperCaseLtrsArr)
    }
    if(confirm("Would you like to add lowercase letters?")) {
      allEl = allEl.concat(lowerCaseLtrsArr)
    }
    if(confirm("Would you like to add numbers?")) {
      allEl = allEl.concat(numbersArr)
    }
    if(confirm("Would you like to add symbols?")) {
      allEl = allEl.concat(symbolsArr)
    }
    // if user doesn't select any criteria, they will be alerted to select at least one criteria
    if(allEl.length === 0) {
      alert("You must select at least one type of character to generate a password. Press the Generate Password button to try again.")
      // runs a loop that pieces together the selected elements and creates a randomly generated password
    } else {
      for(let i = 0; i < passwordPrompt; i++) {
        let randomPass = Math.floor(Math.random() * allEl.length);
        completedPass += allEl[randomPass]
      }
    }
  }
  // grabs the resulting password and displays the completed password in the text area.
  document.getElementById("password").innerHTML = completedPass
  return completedPass
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePass();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
