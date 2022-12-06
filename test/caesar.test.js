const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() tests", () => {
    it("return false if shift is 0", () => {
      const message = "green apple";
      const shift = 0;
      const actual = caesar(message, shift);
      expect(actual).to.be.false;
    });

    it("return false if shift is above 25", () => {
      const message = "green apple";
      const shift = 26;
      const actual = caesar(message, shift);
      expect(actual).to.be.false;
    });

    it("return false if shift is less than -25", () => {
      const message = "green apple";
      const shift = -26;
      const actual = caesar(message, shift);
      expect(actual).to.be.false;
    });

    it("encodes message by shifting letters", () => {
      const message = "green apple";
      const shift = 1;
      const actual = caesar(message, shift);
      const expected = "hsffo bqqmf";
      expect(actual).to.equal(expected);
    });

    it("does not alter spaces or special symbols", () => {
      const message = "green apple!";
      const shift = 1;
      const actual = caesar(message, shift);
      const expected = "hsffo bqqmf!";
      expect(actual).to.equal(expected);
    });

    it("ignores capital letters", () => {
      const message = "GrEeN aPpLe";
      const shift = 1;
      const actual = caesar(message, shift);
      const expected = "hsffo bqqmf";
      expect(actual).to.equal(expected);
    });
    it("wraps alphabet around itself when encoding", () => {
        const message = "zerox printer";
        const shift = 1;
        const actual = caesar(message, shift);
        const expected = "afspy qsjoufs";
        expect(actual).to.equal(expected);
      });
    it("decodes message", () => {
        const message = "hsffo bqqmf";
        const shift = 1;
        const actual = caesar(message, shift, false);
        const expected = "green apple";
        expect(actual).to.equal(expected);
      });
      it("wraps alphabet when decoding", () => {
        const message = "afspy qsjoufs";
        const shift = 1;
        const actual = caesar(message, shift, false);
        const expected = "zerox printer";
        expect(actual).to.equal(expected);
      });

})