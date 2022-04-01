function isPalindrome(string){
  return string == string.split('').reverse().join('')
}




/*
  Create isPalindrome function
  Parameter "argument" of string
  return the string if string is a palindrome "mom", "racecar", etc.
  string will loosely "==" to the another string that is flipped
*/

/*
  So we passed the string as a parameter,
  returns string as true if it's comparison equals to the reveresed string:
  So The string value is initially 'split' into an array
  then we 'reverse' the value inside the array and lastly 'join' the array back into a nre string for our compariosn
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
