// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // standard alphabet for encoding and decoding
  const lookupAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    let output = "";
    input = input.toLowerCase();
    // error handling
    if (!alphabet || alphabet.length !== 26) return false;
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet.split(alphabet[i]).length > 2) return false;
    }
    //Encoding message
    if (encode) {
      for (j of input) {
        if (j === " ") {
          output += " ";
        } else {
          output += alphabet[lookupAlphabet.indexOf(j)];
        }
      }
    }
    // Decoding message
    else {
      for (let i of input) {
        if (i === " ") {
          output += " ";
        } else {
          output += lookupAlphabet[alphabet.indexOf(i)];
        }
      }
    }

    return output;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
