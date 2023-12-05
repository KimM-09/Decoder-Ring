const {expect} = require("chai");
const {substitution} = require("../src/substitution");

describe("encode a message", () => {
    it("should encode a message using the supplied substitution aplhabet", () => {
        const message = "hello";
        const substitute = "qwertyuiopasdfghjklzxcvbnm";
        const actual = substitution(message, substitute);
        const expected = "itssg";
        expect(actual).to.equal(expected);
    });

    it("should work with non-alphabetical characters", () => {
        const message = "hello";
        const substitute = "!@#$%qwertyuiasdfghjklzxcv";
        const actual = substitution(message, substitute);
        const expected = "e%uus";
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces in the message", () => {
        const message = "hello there";
        const substitute = "qwertyuiopasdfghjklzxcvbnm"; 
        const actual = substitution(message, substitute);
        const expected = "itssg zitkt";
        expect(actual).to.equal(expected);
    });
});

describe("decode a message", () => {
    it("should decode a message using the supplied substitution alphabet", () => {
        const message = "itssg";
        const substitute = "qwertyuiopasdfghjklzxcvbnm";
        const actual = substitution(message, substitute, false);
        const expected = "hello";
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces in the message", () => {
        const message = "itssg zitkt";
        const substitute = "qwertyuiopasdfghjklzxcvbnm"; 
        const actual = substitution(message, substitute, false);
        const expected = "hello there";
        expect(actual).to.equal(expected);
    });

    it("should work with non-alphabetical characters", () => {
        const message = "e%uus";
        const substitute = "!@#$%qwertyuiasdfghjklzxcv";
        const actual = substitution(message, substitute, false);
        const expected = "hello";
        expect(actual).to.equal(expected);
    });
});

describe("errors", () => {
    it("should return false if the supplied alphabet is not exactly 26 characters", () => {
        const message = "hello";
        const substitute = "qwertyuiopasdfghjklzxcvb";
        const actual = substitution(message, substitute);
        expect(actual).to.be.false;
    });
    it("should return false if the substitute alphabet has repeating characters", () => {
        const message = "hello";
        const substitute = "qwertyuiopqwertyuiopqwerty";
        const actual = substitution(message, substitute);
        expect(actual).to.be.false;
    });
})
