'use strict';




// Dom elementer
const inputPalindrome = document.getElementById('inputPalindrome');
const buttonPalindrome = document.getElementById('buttonPalindrome');
const answerPalindrome = document.getElementById('answerPalindrome');


// Variabler
let first;
let last;
let string;
let inputValue;
let palindromeArray = [];
let palindromeArrayBoolean = [];
let letter = 0;


//jeg kunne ikke lige gennemskue hvordan jeg skulle lave en recursive function, så det har jeg ikke lavet


function startPalindrome() {
  inputValue = inputPalindrome.value;
  if (inputValue.length > 0) { // Checker om der er skrevet et ord.

    string = inputPalindrome.value.toLowerCase().replace(/\s/g,''); // fjernder alle mellemrum og gør det hele til små bogstaver.
    palindrome(string);

  } else {

    answerPalindrome.innerHTML = "Intast veligst et ord eller en setning";

  };

};



function palindrome(s){

  first = s.substring(0,1);
  last = s.substring(s.length - 1);

  if (first === last) { // hvis første og sidste bogstav er ens, tilføj alle bogstaver til et array og kald functionen palindromeInArray().
    for (var i = 0; i < s.length; i++) {

      palindromeArray.push( string.charAt(letter));
      letter++;

    };

    palindromeInArray();

  } else {

    answerPalindrome.innerHTML = "Det er ikke et palindrom";

  };
};



function palindromeInArray() {
  letter = 0;
  let lastLetter = 1;

  for (var i = 0; i < palindromeArray.length; i++) { // for hver iteration checker den om det første så næste, og sidste så forrige bogstav er ens, og tilføjer true eller false til et array

    palindromeArrayBoolean.push(palindromeArray[letter] === palindromeArray[palindromeArray.length - lastLetter]);
    letter++;
    lastLetter++;

  };

  letter = 0;
  lastLetter = 0;

  console.log(palindromeArray);
  console.log(palindromeArrayBoolean);

  if (palindromeArrayBoolean.every(Boolean) === true) { // Checker om alle booleans i arrayet er true eller false
    answerPalindrome.innerHTML = "Det er et palindrom";
  } else if (palindromeArrayBoolean.every(Boolean) === false) {
    answerPalindrome.innerHTML = "Det er ikke et palindrom";
  };

  palindromeArray = [];
  palindromeArrayBoolean = [];

};
