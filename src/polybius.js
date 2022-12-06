// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const polySquare = [
      [" "],
      [, "a", "f", "l", "q", "v"],
      [, "b", "g", "m", "r", "w"],
      [, "c", "h", "n", "s", "x"],
      [, "d", "(i/j)", "o", "t", "y"],
      [, "e", "k", "p", "u", "z"],
    ];

    input = input.toLowerCase();
    let outputStr = "";
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        let inputFixed = input[i];
        if (inputFixed === "i" || inputFixed === "j") {
          inputFixed = "(i/j)";
        }
        if (inputFixed === " ") {
          outputStr += " ";
        } else {
          for (let j = 0; j < 6; j++) {
            for (let k = 0; k < 6; k++) {
              if (polySquare[j][k] === inputFixed) {
                outputStr += `${j}${k}`;
              }
            }
          }
        }
      }
    } else {
      const onlyNums = input.split(" ").join("");
      if (onlyNums.length % 2 === 1) {
        outputStr = false;
      } else {
        const iterations = input.length / 2;
        const numArr = [];
        for (let j = 0; j < input.length; ) {
          if (input.charAt(j) === " ") {
            numArr.push([[0], [0]]);
            j += 1;
          } else {
            numArr.push([[input.charAt(j)], [input.charAt(j + 1)]]);
            j += 2;
          }
        }
        numArr.forEach((letter) => {
          outputStr += polySquare[letter[0]][letter[1]];
        });
      }
    }

    return outputStr;
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
