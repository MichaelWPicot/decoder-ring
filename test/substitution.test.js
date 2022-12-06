const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution tests()", () => {
  it("return falses if missing substituiton alphabet", () => {
    const message = "green apple";
    const actual = substitution(message);
    expect(actual).to.be.false;
  });

  it("returns false if the substitution alphabet is not 26 characters", () => {
    const message = "green apple";
    const alphabet = "dsbert";
    const actual = substitution(message, alphabet);
    expect(actual).to.be.false;
  });

  it("returns false if the substitution alphabet is not completely unique", () => {
    const message = "green apple";
    const alphabet = "eeiponcmktbuhxqvglsrjyfdwa";
    const actual = substitution(message, alphabet);
    expect(actual).to.be.false;
  });

  it("encodes message with provided substitution alphabet", () => {
    const message = "green";
    const alphabet = "eiponcmktbuhxqvglsrjyfdwaz";
    const actual = substitution(message, alphabet);
    const expected = "msnnq";

    expect(actual).to.equal(expected);
  });

  it("encodes message with unique characters", () => {
    const message = "green";
    const alphabet = "eipo!cmktbuhxqvglsrjyfdwaz";
    const actual = substitution(message, alphabet);
    const expected = "ms!!q";

    expect(actual).to.equal(expected);
  });

  it("encoding preserves spaces", () => {
    const message = "green apple";
    const alphabet = "eipo!cmktbuhxqvglsrjyfdwaz";
    const actual = substitution(message, alphabet);
    const expected = "ms!!q eggh!";

    expect(actual).to.equal(expected);
  });

  it("decodes message with given substitution alphabet", () => {
    const message = "msnnq";
    const alphabet = "eiponcmktbuhxqvglsrjyfdwaz";
    const actual = substitution(message, alphabet, false);
    const expected = "green";

    expect(actual).to.equal(expected);
  });

  it("decoding works with unique characters", () => {
    const message = "ms!!q";
    const alphabet = "eipo!cmktbuhxqvglsrjyfdwaz";
    const actual = substitution(message, alphabet, false);
    const expected = "green";

    expect(actual).to.equal(expected);
  });

  it("descoding preserves spaces", () => {
    const message = "ms!!q eggh!";
    const alphabet = "eipo!cmktbuhxqvglsrjyfdwaz";
    const actual = substitution(message, alphabet, false);
    const expected = "green apple";

    expect(actual).to.equal(expected);
  });
});
