const { createPitch, _getNextCoordinates, calculate, isEqual } = require("./index");

describe("createPitch", () => {
    test("return pitch", () => {
        expect(createPitch(6)).toEqual([
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]);
    });
});

describe("isEqual", () => {
    test("is true", () => {
        expect(isEqual([1, 1], [1, 1])).toBe(true);
    });

    test("is false", () => {
        expect(isEqual([1, 2], [1, 1])).toBe(false);
    });
});

describe("getNextCoordinates", () => {
    test("x = 0, y = 0", () => {
        expect(_getNextCoordinates(6, [0, 0])).toEqual([[1, 0], [0, 1]]);
    });

    test("x = 0, y = 5", () => {
        expect(_getNextCoordinates(6, [0, 5])).toEqual([[0, 4], [1, 5]]);
    });

    test("x = 1, y = 0", () => {
        expect(_getNextCoordinates(6, [1, 0])).toEqual([[2, 0], [1, 1], [0, 0]]);
    });

    test("x = 1, y = 1", () => {
        expect(_getNextCoordinates(6, [1, 1])).toEqual([[1, 0], [2, 1], [1, 2], [0, 1]]);
    });

    test("x = 5, y = 0", () => {
        expect(_getNextCoordinates(6, [5, 0])).toEqual([[5, 1], [4, 0]]);
    });

    test("x = 5, y = 1", () => {
        expect(_getNextCoordinates(6, [5, 1])).toEqual([[5, 0], [5, 2], [4, 1]]);
    });

    test("x = 3, y = 3", () => {
        expect(_getNextCoordinates(6, [3, 3])).toEqual([[3, 2], [4, 3], [3, 4], [2, 3]]);
    });

    test("x = 5, y = 5", () => {
        expect(_getNextCoordinates(6, [5, 5])).toEqual([[5, 4], [4, 5]]);
    });
});

describe("calculate", () => {
    const pitch = createPitch(6);

    test("calculate with equal coordinates", () => {
        expect(calculate(pitch, [1, 1], [1, 1], 5)).toBe(-1);
    });

    test("calculate from [2, 3] to [1, 1] with 0 steps count", () => {
        expect(calculate(pitch, [2, 3], [1, 1], 0)).toBe(-1);
    });

    test("calculate from [4, 1] to [4, 2] with 1 step", () => {
        expect(calculate(pitch, [4, 1], [4, 2], 1)).toBe(1);
    });

    test("calculate from [4, 1] to [2, 3] with 5 steps", () => {
        expect(calculate(pitch, [4, 1], [2, 3], 5)).toBe(6);
    });

    test("calculate from [4, 1] to [2, 3] with 3 steps", () => {
        expect(calculate(pitch, [4, 1], [2, 3], 3)).toBe(0);
    });

    test("calculate from [4, 1] to [2, 3] with 4 steps", () => {
        expect(calculate(pitch, [4, 1], [2, 3], 4)).toBe(6);
    });

    test("calculate from [0, 0] to [5, 0] with 6 steps", () => {
        expect(calculate(pitch, [0, 0], [5, 0], 7)).toBe(2);
    });

    test("calculate from [0, 0] to [0, 3] with 3 steps", () => {
        expect(calculate(pitch, [0, 0], [0, 3], 3)).toBe(1);
    });

    test("calculate from [0, 0] to [1, 2] with 3 steps", () => {
        expect(calculate(pitch, [0, 0], [1, 2], 3)).toBe(3);
    });

    test("calculate from [0, 0] to [5, 5] with 3 steps", () => {
        expect(calculate(pitch, [0, 0], [5, 5], 3)).toBe(0);
    });

    test("calculate from [0, 0] to [1, 1] with 2 steps", () => {
        expect(calculate(pitch, [0, 0], [1, 1], 2)).toBe(2);
    });

    test("calculate with 6 steps", () => {
        expect(calculate(pitch, [4, 1], [2, 3], 6)).toBe(6);
    });
});
