const {expect} = require("chai");
const {caesar} = require("../src/caesar");

describe("encode a message", () => {
    it("should encode a message by shifting letters", () => {
        const message = "Hello";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "khoor";
        expect(actual).to.equal(expected);
    });
    it("should encode to the right when given a positive number", () => {
        const message = "Hello";
        const shift = 5;
        const actual = caesar(message, shift);
        const expected = "mjqqt";
        expect(actual).to.equal(expected);
    });
    it("should encode to the left when given a negative number", () => {
        const message = "Hello";
        const shift = -5;
        const actual = caesar(message, shift);
        const expected = "czggj";
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const message = "HELLO";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "khoor";
        expect(actual).to.equal(expected);
    });
    it("should wrap around to the beginning of the alphabet if the shifted letter goes past the end of the alphabet", () => {
        const message = "vwxyz";
        const shift = 5;
        const actual = caesar(message, shift);
        const expected = "abcde";
        expect(actual).to.equal(expected);
    });
    it("should wrap around to the end of the alphabet if the shifted letter goes past the beginning of the alphabet", () => {
        const message = "abcde";
        const shift = -5;
        const actual = caesar(message, shift);
        const expected = "vwxyz";
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces and other non-aplhabetic symbols", () => {
        const message = "Hello there!";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "khoor wkhuh!";
        expect(actual).to.equal(expected);
    });
});

describe("decode a message", () => {
    it("should decode a message by shifting letters the opposite way", () => {
        const message = "khoor";
        const shift = 3;
        const actual = caesar(message, shift, false);
        const expected = "hello";
        expect(actual).to.equal(expected);
    });
    it("should decode to the right when given a positive number", () => {
        const message = "mjqqt";
        const shift = 5;
        const actual = caesar(message, shift, false);
        const expected = "hello";
        expect(actual).to.equal(expected);
    });
    it("should decode a message to the left when given a negative number", () => {
        const message = "czggj";
        const shift = -5;
        const actual = caesar(message, shift, false);
        const expected = "hello";
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const message = "KHOOR";
        const shift = 3;
        const actual = caesar(message, shift, false);
        const expected = "hello";
        expect(actual).to.equal(expected);
    });
    it("should wrap around to the end of the alphabet when appropriate", () => {
        const message = "abcde";
        const shift = 5;
        const actual = caesar(message, shift, false);
        const expected = "vwxyz";
        expect(actual).to.equal(expected);
    });
    it("should wrap around to the beginning of the alphabet when appropriate", () => {
        const message = "vwxyz";
        const shift = -5;
        const actual = caesar(message, shift, false);
        const expected = "abcde";
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces and other non-alphabetic characters", () => {
        const message = "khoor wkhuh!";
        const shift = 3;
        const actual = caesar(message, shift, false);
        const expected = "hello there!";
        expect(actual).to.equal(expected);
    });
});

describe("error handling", () => {
    it("should return false when the shift value is undefinded", () => {
        const message = "hello";
        const shift = undefined;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    });
    it("should return false when the shift is < -25", () => {
        const message = "hello";
        const shift = -30;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    });
    it("should return false if the shift is > 25", () => {
        const message = "hello";
        const shift = 30;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    });
    it("should return false if the shift is 0", () => {
        const message = "hello";
        const shift = 0;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    });
})