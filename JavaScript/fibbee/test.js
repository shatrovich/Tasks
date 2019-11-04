const { calculate } = require("./index");

describe("calculate", () => {
    it("someOne", () => {
        expect(calculate(100, { x: 1, y: 1 }, { x: 2, y: 2 }, 2)).toBe(2);
    });

    it("someThreee", () => {
        expect(calculate(100, { x: 1, y: 1 }, { x: 2, y: 2 }, 1)).toBe(0);
    });

    it("someThree", () => {
        expect(calculate(100, { x: 1, y: 1 }, { x: 2, y: 2 }, 4)).toBe(8);
    });

    // it("someTwo", () => {
    //     expect(calculate(100, { x: 1, y: 1 }, { x: 5, y: 5 }, 8)).toBe(70);
    // })

    it("some", () => {
        expect(calculate(100, { x: 1, y: 1 }, { x: 5, y: 5 }, 10)).toBe(2520);
    })
})
