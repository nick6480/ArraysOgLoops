let palindromeArray = ["a", "b", "c", "b", "a",];
console.log(palindromeArray)

let palindromeArrayBoolean = [];
let letter = 0;
let lastLetter = 1;

function palindrome(){
    for (var i = 0; i < palindromeArray.length; i++) {

      palindromeArrayBoolean.push(palindromeArray[letter] === palindromeArray[palindromeArray.length - lastLetter]);

      letter++
      lastLetter++

    };

return palindromeArrayBoolean.every(Boolean) === true;
};


document.write(`<p> Er arrayet: ${palindromeArray} et palindrom</p>`)
document.write(palindrome())
