// Assignment Code

//Targets the button password generator
var generateBtn = document.querySelector("#generate");

//random integer between x & y
function randomChoice(min, max) {
    if (!max) {
        max = min
        min = 0
    }
var random = Math.random()
return Math.floor(min*(1 - random) + random*max)
}

//this allow for random positioning in the list 
function getRandomItem(list) {
return list[randomChoice(list.length)]

}

function generatePassword() {
    
    var userInput = window.prompt ("Hello! Please chose a secure password length!")

    var passwordLength = parseInt(userInput)

    if (isNaN(passwordLength)) {
        window.alert("Incorrect value. Input a number!")
        return
    
    }
        //if password length is less than 8 or greater than 128 then the user will see the alert pop up below
    if(passwordLength <8 || passwordLength > 128) {
        window.alert("Please choose a password with a minimum length of 8 characters and no longer than 128 characters")
        return
    }
    //user confirms the following prompts in their password : lowercases, uppercases, numbers, and special characters
    var lowerCases = confirm("Would you like lowercases in your password?"); 
    var upperCases = confirm("Would you like uppercases in your password?");
    var numbers = confirm("Would you like numbers in your password?");
    var special = confirm("Would you like special characters in your password?")

    //Array of lists that are included for password prompts/choices 

    var lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m" ,"n", "o", "p", "q", "r", "s", "t", "u", "v", "w","y", "z"]
    var upperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "Z"]
    var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    var specialcharacterList= ["!", "$", "%", "^", "&", "#", "*", "@", "'", "(", ")", "-"]

    //Array for password options //Storage Container 
    var passwordoptions = []

if (lowerCases === true){
    passwordoptions.push(lowerCaseList)
}

if (upperCases === true){
    passwordoptions.push(upperCaseList)
}

if (numbers === true){
    passwordoptions.push(numberList)
}

if (special === true){
    passwordoptions.push(specialcharacterList)
}

if (passwordoptions.length === 0) {
   passwordoptions.push(upperCaseList) 
}

//this generates random password from the user choices above
var generatePassword = ""
    
for (var i=0; i <passwordLength; i++) {
    var randomChoice = getRandomItem(passwordoptions)
    var randomcharacter = getRandomItem(randomChoice)
    generatePassword += randomcharacter
}

//Return the genterated password to where it was originally called
return generatePassword
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //Displays password values on the screen 
passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

