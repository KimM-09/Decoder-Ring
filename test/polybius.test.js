const {expect} = require("chai");
const {polybius} = require("../src/polybius");

describe("encode a message", () => {
    it("should encode a message by changing the letters to the corresponding number pair", () => {
        const message = "hello";
        const actual = polybius(message);
        const expected = "3251131343";
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces in the message", () => {
        const message = "hello there";
        const actual = polybius(message);
        const expected = "3251131343 4432512451";
        expect (actual).to.equal(expected);
    }); 
    it("should ignore capital letters", () => {
        const message = "HELLO";
        const actual = polybius(message);
        const expected = "3251131343";
        expect(actual).to.equal(expected);
    });
    it("should convert both i and j to 42", () => {
        const message = "jill";
        const actual = polybius(message);
        const expected = "42421313";
        expect(actual).to.equal(expected);
    })
});

describe("decode a message", () => {
    it("should decode a message by replacing numbers with the corresponding letters", () => {
        const message = "3251131343";
        const actual = polybius(message, false);
        const expected = "hello"; 
        expect(actual).to.equal(expected);
    });
    it("should show both i and j when decoding 42", () => {
        const message = "4251131343";
        const actual = polybius(message, false);
        const expected = "(i/j)ello";
        expect(actual).to.equal(expected);
    });
    it("should leave spaces as is", () => {
        const message = "3251131343 4432512451";
        const actual = polybius(message, false);
        const expected = "hello there";
        expect(actual).to.equal(expected);
    });
    it("should return false if the length of the number pairs is not even", () => {
        const message = "325113134";
        const actual = polybius(message, false);
        expect(actual).to.be.false;
    });
});