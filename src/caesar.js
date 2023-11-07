// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift > 25 || shift < -25 || shift === 0) {
      return false
    }
    
    //if decoding switch shift direction
    if (encode === false) {
      shift = shift * -1;
    }    

    const letters = "abcdefghijklmnopqrstuvwxyz".split("");
    let shiftedWord = "";
    
    //loop through all the characters
    for (i = 0; i < input.length; i++) {
      const character = input[i]

      // ignore capital letters
      const indexOfEachLetter = letters.indexOf(character.toLowerCase())
      
      // if letterIndex is negative just add og character
      if(indexOfEachLetter === -1) {
        shiftedWord += character
      }
        // shift etc.
        else {
      
          let shiftedIndex = (indexOfEachLetter + shift) % 26;
          if(shiftedIndex < 0) {
            shiftedIndex += 26
          }
          
          const newCharacter = letters[shiftedIndex]
      
          shiftedWord += newCharacter
        }
    
    }
    return shiftedWord
  }
  return {
    caesar,
  };
})();


module.exports = { caesar: caesarModule.caesar };
