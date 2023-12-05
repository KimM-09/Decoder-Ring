// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alpha = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {
    if (shift === undefined || shift === 0 || shift < -25 || shift > 25) 
    {
      return false;
    }
    let result = "";

    if (encode === false)  
    {
      shift = shift * -1;
    }

    for (let i = 0; i < input.length; i++)
    {
      const message = input[i].toLowerCase()
      if (alpha.includes(message))
      {
        const messageIndex = alpha.indexOf(message);
        let shifted = messageIndex + shift;

        if ( shifted > 25) 
        {
          shifted += -26;
        }
        if ( shifted < 0 && shifted > -25) 
        {
          shifted += 26;
        }
        const shiftedAlpha = alpha[shifted];
        result += shiftedAlpha;
        } else 
        {
          result += message;
        }
      }
      return result
    }
    
  return {
    caesar,
  };
})();


/*BITS OF CODE I THINK WILL GO SOMEWHERE:



if (alpha.includes(message)) {
  **then i need to shift the letters of the message the number input into shift**
    how do I tell it to move the shift number?
      1. I need the number value of each letter in the input message; 
        how do you get the number value of letters? 
          characters in a string have index values just like an array, starting at 0, and moves left to right. the word HELLO has the index of 0,1,2,3,4.
            
            if (shift < 0)...
            if (shift > 0)...
}

if encode === false {
    **then it needs to decode the message by shifting the letters the opposite way**
      **this will probably be the inverse of encoding the message, so once you figure that out, you should be able to get this**
};


*/

module.exports = { caesar: caesarModule.caesar };
