// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  let lookup ="abcdefghijklmnopqrstuvwxyz";
  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25 || !shift) return false;
    let caeserOutput="";
    for (let i=0; i<input.length;i++){
      const letter =input[i];
      if (!lookup.includes(input[i].toLowerCase())) {
        caeserOutput += input[i];
      } else{
        let lookupIndex;
        if (encode===true) {
          lookupIndex = lookup.indexOf(input[i].toLowerCase())+shift;
        } else {
          lookupIndex = lookup.indexOf(input[i].toLowerCase())-shift;
        }
  
        if (lookupIndex >25) lookupIndex -=26; 
        if (lookupIndex<0) lookupIndex +=26;
          caeserOutput += lookup.charAt(lookupIndex);
      }
    }
    return caeserOutput;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
