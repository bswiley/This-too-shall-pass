
//create function that is referred to down below by the original code
function generatePassword(){

  //set up variabls and arrays (Coming from Python I still think in terms of "lists" rather than "arrays")
var passBuild = ["word"]
var finalList = ["word"]
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numbers = ['1','2','3','4','5','6','7','8','9','0']
var symbols = ['!','@','#','$','%','^','&','*','(',')']
var wrongNumber = true

//Get the user to chose the number of characters and not accept a wrong answer or 
//text.
while (wrongNumber) {
  var characters = prompt("How many characters do you want in your password?\nYou can have any number between 8 and 128")
if ((characters > 128)||(characters <8)){
wrongNumber = true;
alert ("You're number is not within range.\nPlease try again.")}
else if (isNaN(characters)){
  wrongNumber = true;
  alert ("Sorry, you didn't type a number..\nPlease try again.")}
else {
  wrongNumber = false
}}
var wrongParts = true

//Do the same with the kind of characters to use, again making sure the User answers "correctly"
while (wrongParts){
  var lowerCaseQ = confirm("Click 'OK' if you would like lowercase letters in your password.")
  var upperCaseQ = confirm("Click 'OK' if you would like Uppercase letters in your password.")
  var numbersQ = confirm ("Click 'OK' if you would like numbers in your password.")
  var symbolsQ = confirm ("Click 'OK' if you would like symbols in your password.")
  if ((!lowerCaseQ)&&(!upperCaseQ)&&(!numbersQ)&&(!symbolsQ)){
   alert("Sorry, you're password needs lowercase letters, uppercase letters, numbers or symbols.\nTry again.")
   wrongParts = true}
  else {
    wrongParts = false
    console.log(lowerCaseQ, upperCaseQ, numbersQ, symbolsQ)}}

  //Build an array from the foundational arrays based on the User's wishes. 
  //Not knowing how to use undefined array's if possible, I created an array with a 
  //value to us it and then clean it up later
 if(symbolsQ){
  finalList = finalList.concat(symbols)
 } 

 if (numbersQ){
  finalList = finalList.concat(numbers)
 }

 if(upperCaseQ){
  finalList = finalList.concat(upperCase)
 }

 if(lowerCaseQ){
  finalList = finalList.concat(lowerCase)
 }

 //After cleaning the array, I rearrange it with a random order
 //(I got the technic to do this somewhere online, but don't remember where, so I can't)
 //cite it's author. 
 finalList.shift();
 console.log (finalList)
 for (let i = finalList.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = finalList[i];
  finalList[i] = finalList[j];
  finalList[j] = k;
 }
 console.log (finalList)


//I create the password array and clean it up for use futher on
 for (let i=0;i<characters;i++){
  var index = Math.floor(Math.random()*finalList.length);
  passBuild.push(finalList[index])
  console.log(passBuild,finalList[index])
} 
passBuild.shift();

//I reorder the password array to further randomize it
console.log(passBuild)
  for (let i = passBuild.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = passBuild[i];
  passBuild[i] = passBuild[j];
  passBuild[j] = k;
}
console.log (passBuild)

//convert the array to a string and remove the commas that are passed along
let text = passBuild.join();
let password =text.replaceAll(",","")
console.log (password)

//The two options for displaying the password (I believe) were to show it in a window and the provided blank
//I do both below.  It's an alert and returned to the original code that was provided
alert (password)
return password
}








// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
console.log(generateBtn)

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
