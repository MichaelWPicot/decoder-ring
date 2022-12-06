const { expect } = require("chai");
const { polybius } = require("../src/polybius");

  describe("polybius() tests", () => {
    it("encodes message by translating letters to number pairs", () => {
      const message = "green";
      const actual = polybius(message);
      const expected = "2224515133";
      expect(actual).to.equal(expected);
    });

    it("'i' and 'j' are translated to 42", () => {
      const message = "jigglypuff";
      const actual = polybius(message);
      const expected = "42422222134553541212";
      expect(actual).to.equal(expected);
    });

    it("preserves spaces while encoding message", () => {
      const message = "green apple";
      const actual = polybius(message);
      const expected = "2224515133 1153531351";
      expect(actual).to.equal(expected);
    });


    it("decodes messages by translating number pairs into a letter", () => {
      const message = "2224515133";
      const actual = polybius(message, false);
      const expected = "green";

      expect(actual).to.equal(expected);
    });

    it("decodes 42 into both 'i' and 'j'", () => {
      const message = "42422222134553541212";
      const actual = polybius(message, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("perserves spaces while decoding message", () => {
      const message = "2224515133 1153531351";
      const actual = polybius(message, false);
      const expected = "green apple";

      expect(actual).to.equal(expected);
    });

    it("returns false if the length of all numbers is odd", () => {
      const message = "2345 235134341122514";
      const actual = polybius(message, false);

      expect(actual).to.be.false;
    });
  });

