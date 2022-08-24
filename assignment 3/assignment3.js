//1. Write a JavaScript function that reverse a number
function reverseNumber(number) {
  //convert number to String
  const numberString = number.toString();
  return console.log(numberString.split("").reverse().join(""));
}

reverseNumber(32243);

//2.Write a JavaScript function that checks whether a passed string is palindrome or not?

function isPalindrome(str) {
  //Clean up the string
  const arrayChar = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
  //compare each character starting from 2 ends
  for (let i = 0, j = arrayChar.length - 1; i <= j; i++, j--) {
    return arrayChar.charAt(i) != arrayChar.charAt(j) ? false : true;
  }
}

console.log(isPalindrome("Racecar"));

//3. Write a JavaScript function that generates all combinations of a string.

function generateCombi(str) {
  let result = [];
  //convert the string to array of character
  const arrayChar = str.toString().split("");
  //nested loop to combine the characters
  for (let i = 0; i < arrayChar.length; i++) {
    result.push(arrayChar[i]);
    let temp = arrayChar[i];
    for (let j = arrayChar.length - 1; j > i; j--) {
      temp += arrayChar[j];
      result.push(temp);
    }
  }
  return result;
}

console.log(generateCombi("dog"));

//4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
function sortLetter(str) {
  let arrayChar = str.toLowerCase();
  return arrayChar.split('').sort().join('');
}

console.log(sortLetter('webmaster' ));

//5. . Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 

function convertUpperCase(str){
    //split the string into array of string
    let arrayString = str.split(' ');
    //console.log(arrayString);
    const result = [];
    for (let i = 0; i < arrayString.length; i++) {
         result.push(arrayString[i].charAt(0).toUpperCase() + arrayString[i].slice(1)) ;
        
    }
    return console.log(result.join(' '));
}
convertUpperCase('the quick brown fox' );
