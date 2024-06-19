/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let start = 0;
    let end = str.length - 1;
    str = str.toLowerCase();
    const alphabetPattern = /^[a-zA-Z]+$/;

  while (start <= end) {
    if (str[start] == " " || !alphabetPattern.test(str[start])) {
        start++;
        break;
    }
    if (str[end] == " " || !alphabetPattern.test(str[end])) {
        end--;
        break;
    }
    if (str[start] != str[end]) {
        return false;
    }
    start++;
    end--;
}

  return true;
}

module.exports = isPalindrome;
