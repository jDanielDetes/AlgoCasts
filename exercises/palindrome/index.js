// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed
}

module.exports = palindrome;



// MY solution

// function palindrome(str) {
//     const arr = str.split('')
//     arr.reverse()
//   const reversedString=  arr.join('')

//   if(reversedString === str){
//       return true
//   } else {
//       return false
//   }
// }


// solution #1 

// function palindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return str === reversed
// }
