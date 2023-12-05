// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const standard = "abcdefghijklmnopqrstuvwxyz".split("");
  const coded = [];
  
  function substitution(input, alphabet, encode = true) {
    const noRepeats = new Set(alphabet);

    if( [...noRepeats].length < 26 || alphabet.length < 26 || alphabet === undefined) 
    return false;

    alphabet.split("");
    if(encode) {

      for (let i = 0; i < 26; i++) {
        coded[standard[i]] = alphabet[i];
      }

    } else {

      for (let i = 0; i < 26; i++) {
        coded[alphabet[i]] = standard[i];
      }
    }

    let result = input.toLowerCase().split("").map((letter) => {
      if (letter === " ") return " ";

      return coded[letter]
    })

    return result.join("");
  }

  return {
    substitution,
  };
})();
 


module.exports = { substitution: substitutionModule.substitution };
