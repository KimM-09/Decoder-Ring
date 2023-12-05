// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const dictionary = [
    { letter: "a", position: "11" },  { letter: "b", position: "21" },
    { letter: "c", position: "31" },  { letter: "d", position: "41" },
    { letter: "e", position: "51" },  { letter: "f", position: "12" },
    { letter: "g", position: "22" },  { letter: "h", position: "32" },
    { letter: "i", position: "42" },  { letter: "j", position: "42" },
    { letter: "k", position: "52" },  { letter: "l", position: "13" },
    { letter: "m", position: "23" },  { letter: "n", position: "33" },
    { letter: "o", position: "43" },  { letter: "p", position: "53" },
    { letter: "q", position: "14" },  { letter: "r", position: "24" },
    { letter: "s", position: "34" },  { letter: "t", position: "44" },
    { letter: "u", position: "54" },  { letter: "v", position: "15" },
    { letter: "w", position: "25" },  { letter: "x", position: "35" },
    { letter: "y", position: "45" },  { letter: "z", position: "55" },
  ];
 
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
];

const numerals = ["1", "2", "3", "4", "5",];

  function toEncode (input) {
    let result = "";
    let stringInput = input.toLowerCase();
    for (let i = 0; i < stringInput.length; i++) {
      const letters = stringInput[i];
      if (alphabet.includes(letters)) {
        const encoded = dictionary.find((element) => element.letter === letters).position;
        result += encoded
      } else {
        result += letters;
      }
    }
    return result;
  }


 function isItOdd (input) {
  let onlyNumbers = "";
    for (let i = 0; i < input.length; i++) {
      if (numerals.includes(input[i])) {
        onlyNumbers += input[i];
  }
  }
  return onlyNumbers.length % 2 !=0 ? false : true;
}



  function toDecode (input) {
    if(!isItOdd(input)) {return false;}
    let result = "";
    for (let i = 0; i < input.length; i++){
    if(numerals.includes(input[i])) {
      const numberOne = input[i];
      const numberTwo = input[i +1];
      i++;
      const check = String(numberOne) + String(numberTwo);
      if (check === "42") {
        result += "(i/j)";
      } else {
        const encoded = dictionary.find(( element ) => element.position === check).letter;
        result += encoded;
      }
     } else {
      result += " ";
    }
  } 
  return result;
    }


  function polybius(input, encode = true) {
    return encode ? toEncode(input) : toDecode(input);
  }

  return {
    polybius,
  };
})();

/*BITS OF CODE I THINK WILL GO SOMEWHERE:

for (let i = 0; i < input.length; i++);

*/

module.exports = { polybius: polybiusModule.polybius };
