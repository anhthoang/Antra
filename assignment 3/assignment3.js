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
  return arrayChar.split("").sort().join("");
}

console.log(sortLetter("webmaster"));

//5. . Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

function convertUpperCase(str) {
  //split the string into array of string
  let arrayString = str.split(" ");
  //console.log(arrayString);
  const result = [];
  for (let i = 0; i < arrayString.length; i++) {
    result.push(
      arrayString[i].charAt(0).toUpperCase() + arrayString[i].slice(1)
    );
  }
  return console.log(result.join(" "));
}
convertUpperCase("the quick brown fox");

//6.Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function longestString(str) {
  let arrayString = str.split(" ");
  //console.log(arrayString);
  let maxLength = arrayString[0].length;
  let index = 0;
  for (let i = 1; i < arrayString.length; i++) {
    if (arrayString[i].length > maxLength) {
      maxLength = arrayString[i].length;
      index = i;
    }
  }
  return console.log(arrayString[index]);
}

longestString("Web Development Tutorial");

//7.Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string

function vowelCount(str) {
  //clean up the string and split into an array ofcharacters
  let arrayChar = str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+/g, "")
    .split("");
  //console.log(arrayString);
  let count = 0;
  //loop through array and count the vowels
  for (const element of arrayChar) {
    if (
      element === "a" ||
      element === "e" ||
      element === "i" ||
      element === "o" ||
      element === "u"
    ) {
      count++;
    }
  }

  return console.log(count);
}
vowelCount("The quick brown fox");

//8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

function isPrime(number) {
  //base case
  if (number === 1) {
    return false;
  }
  //base case
  if (number === 2) {
    return true;
  }
  for (let i = 2; i < number; i++) {
    return number % i === 0 ? false : true;
  }
}
console.log(isPrime(2));

//9. Write a JavaScript function which accepts an argument and returns the type.

function findType(argument) {
  return typeof argument;
}
console.log(findType(1));
console.log(findType(function () {}));
console.log(findType(false));

//10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function createIdentityMatrix(size) {
  let matrix = new Array(size);
  for (let i = 0; i < size; i++) {
    matrix[i] = new Array(size).fill(0);
    matrix[i][i] = 1;
  }
  return matrix;
}
console.log(createIdentityMatrix(4));

//11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
function secondLowestGreatestNumber(array) {
  //sort array
  let sortedArray = array.sort(function (a, b) {
    return a - b;
  });
  //console.log(newArray);
  let newArray = [sortedArray[0]];
  console.log(newArray);
  //loop through sorted array and delete duplicate element
  for (let i = 1; i < sortedArray.length; i++) {
    if (sortedArray[i - 1] !== sortedArray[i]) {
      newArray.push(sortedArray[i]);
    }
  }
  return console.log(newArray[1], newArray[newArray.length - 2]);
}
secondLowestGreatestNumber([1, 5, 2, 2, 4, 3]);

//12.Write a JavaScript function which says whether a number is perfect.
function isPerFectNumber(number) {
  let temp = 0;
  //add all the positive divisors
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      temp += i;
    }
  }

  return temp === number && temp !== 0 ? true : false;
}

console.log(isPerFectNumber(28));

//13. Write a JavaScript function to compute the factors of a positive integer.

function computeFactor(n) {
  const arr = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(computeFactor(17));

//14. Write a JavaScript function to convert an amount to coins.
function amountToCoins(num, arr) {
  const coins = [];

  for (let i = 0; i < arr.length; i++) {
    while (num >= arr[i]) {
      coins.push(arr[i]);
      num = num - arr[i];
    }
  }

  return coins;
}

console.log(amountToCoins(46, [25, 10, 5, 2, 1]));

//15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
function calExp(b, n) {
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans *= b;
  }
  return ans;
}
console.log(calExp(2, 3));

//16. Write a JavaScript function to extract unique characters from a string.

function extractUniqueChar(str) {
  const copyString = str;
  let answer = "";
  for (let i = 0; i < copyString.length; i++) {
    //console.log(copyString[i]);
    if (answer.indexOf(copyString[i]) == -1) {
      answer += copyString[i];
    }
  }
  return answer;
}
console.log(extractUniqueChar("thequickbrownfoxjumpsoverthelazydog"));

//17. Write a JavaScript function to get the number of occurrences of each letter in specified string.

function countOccurence(str) {
  let answer = {};

  const array = str.split("").sort();
  array.forEach((e) => {
    //console.log(answer[e]);
    if (answer[e]) answer[e] += answer[e];
    else answer[e] = 1;
  });
  return answer;
}
console.log(countOccurence("thequickbrownfoxjumpsoverthelazydog"));

//18. Write a function for searching JavaScript arrays with a binary search.

function binarySearch(arr, x) {
  let start = 0,
    end = arr.length - 1;

  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    let mid = Math.floor((start + end) / 2);

    // If element is present at mid, return position of x
    if (arr[mid] === x) return mid;
    // Else look in left or right half accordingly
    else if (arr[mid] < x) start = mid + 1;
    else end = mid - 1;
  }

  return "number is not found";
}

console.log(
  binarySearch([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 3)
);

//19. Write a JavaScript function that returns array elements larger than a number.
function getBigNumber(arr, val) {
  let newArr = [];
  for (let i of arr) {
    if (i >= val) newArr.push(i);
  }
  return newArr;
}

console.log(getBigNumber([11, 45, 4, 31, 64, 10], 10));

//20. Write a JavaScript function that generates a string id (specified length) of random characters.
function createId(length) {
  let text = "";
  const char_list =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    text += char_list.charAt(Math.floor(Math.random() * char_list.length));
  }
  return text;
}
console.log(createId(8));

//21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
function createSubset(arr) {
  let sub = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      sub.push([arr[j], arr[i]]);
    }
  }
  return sub;
}

console.log(createSubset([1, 2, 3]));

//22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
function countOccurenceII(str, letter) {
  const arr = str.split("");
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (letter === arr[i]) {
      count++;
    }
  }
  return count;
}

console.log(countOccurenceII("microsoft.com", "o"));

//23. Write a JavaScript function to find the first not repeated character.

function firstNotRepeatChar(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (str.indexOf(char) === str.lastIndexOf(char)) return char; //compare the index of unique character
  }
}
console.log(firstNotRepeatChar("abacddbec"));

//24. Write a JavaScript function to apply Bubble Sort algorithm.

function bubbleSort(arr) {
  let needNextPass = true;
  for (let k = 1; k < arr.length && needNextPass; k++) {
    // Array may be sorted and next pass not needed
    needNextPass = false;
    for (let i = 0; i < arr.length - k; i++) {
      if (arr[i] < arr[i + 1]) {
        // Swap list[i] with list[i + 1]
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        needNextPass = true; // Next pass still needed
      }
    }
  }
  return arr;
}

console.log(
  bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
);

//25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
function Longest_Country_Name(array_country) {
  //sort the array of country
  array_country.sort((a, b) => {
    return a.length - b.length;
  });
  return console.log(array_country.pop()); //pop the last item which is the longest country name
}

Longest_Country_Name(["Australia", "Germany", "United States of America"]);

//26.Write a JavaScript function to find longest substring in a given a string without repeating characters.
function lengthOfLongestSubstring(s) {
  let set = new Set();
  let maxLength = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    // sliding window, if char is in the set, remove the duplicate element
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]); //add char to the set , expand the set
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));


//27. Write a JavaScript function that returns the longest palindrome in a given string.

function longestPalindrome(str){
  let palindrome_arr = [];
    let substr = "";
    //check each substring if it is palindrome. 
    for (let i = 0; i < str.length; i++) {
        for (let j = 1; j < str.length; j++) {
            substr = str.substring(i, j);
            if (isPalindrome(substr) && substr != "" && substr.length != 1) palindrome_arr.push(substr);
        }
    }
    //sort palindrome array, then pop the last item which is the longest palindrome substring
     palindrome_arr.sort(function (a, b) {
       return a.length - b.length;
    });
    return console.log(palindrome_arr.pop());
}

longestPalindrome("cbbd");

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
function greeting(callback) {
  callback();
}

function callback() {
  console.log("hello");
}

greeting(callback);

//29. Write a JavaScript function to get the function name.
function getFunctionName() {
  console.log( arguments.callee.name );
}
getFunctionName();