const { calculate } = require("./index");

describe("calculate", () => {
    it("100 { x: 1, y: 1 } { x: 2, y: 2 } 2", () => {
        expect(calculate(100, { x: 1, y: 1 }, { x: 2, y: 2 }, 2)).toBe(2);
    });

    it("100 { x: 1, y: 1 } { x: 2, y: 2 } 1", () => {
        expect(calculate(100, { x: 1, y: 1 }, { x: 2, y: 2 }, 1)).toBe(0);
    });

    it("100 { x: 1, y: 1 } { x: 2, y: 2 } 4", () => {
        expect(calculate(100, { x: 1, y: 1 }, { x: 2, y: 2 }, 4)).toBe(10);
    });

    it("100 { x: 1, y: 1 } { x: 5, y: 5 } 10", () => {
        expect(calculate(100, { x: 1, y: 1 }, { x: 5, y: 5 }, 10)).toBe(2520);
    })
})
