// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const theAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  
  function translation(input, fromKey, toKey) {
    if (input.match(/\s/)) return input 
    const index = fromKey.indexOf(input)
    return toKey[index]
  }
  
  function substitution(input, alphabet, encode = true) {
    
    //check each character is unique
    const unique = new Set(alphabet);
    if (!alphabet || alphabet.length !== 26 || [...unique].length < 26) {
      return false
    }
      const codeAlphabet = alphabet.toLowerCase().split("");
      return input
        .toLowerCase()
        .split("")
        .map(
          (word) =>
            encode
              //switch from regular alphabet to coded one
              ? translation(word, theAlphabet, codeAlphabet)
              //switch from coded alphabet to regular one
              : translation(word, codeAlphabet, theAlphabet)
         )
        .join("")
    
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
