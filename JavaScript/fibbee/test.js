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

describe("getNexCoordinates", () => {
    const pitch = createPitch(6);

    test("right and bottom", () => {
        expect(_getNextCoordinates(6, [0, 0])).toEqual([[1, 0], [0, 1]]);
    });

    test("top and left", () => {
        expect(_getNextCoordinates(6, [5, 5])).toEqual([[5, 4], [4, 5]]);
    });

    test("top and right and bottom", () => {
        expect(_getNextCoordinates(6, [0, 3])).toEqual([[0, 2], [1, 3], [0, 4]]);
    });

    test("top and bottom and left", () => {
        expect(_getNextCoordinates(6, [6, 4])).toEqual([[6, 3], [6, 5], [5, 4]]);
    });

    test("top and right and bottom and left", () => {
        expect(_getNextCoordinates(6, [2, 3])).toEqual([[2, 2], [3, 3], [2, 4], [1, 3]]);
    });
});

describe("calculate", () => {
    const pitch = createPitch(6);

    test("calculate with equal coordinates", () => {
        expect(calculate(pitch, [1, 1], [1, 1], 5)).toBe(-1);
    });

    test("calculate with zero steps count", () => {
        expect(calculate(pitch, [2, 3], [1, 1], 0)).toBe(-1);
    });

    test("calculate with one step", () => {
        expect(calculate(pitch, [4, 1], [4, 2], 1)).toBe(1);
    });

    test("calculate with 5 steps", () => {
        expect(calculate(pitch, [4, 1], [2, 3], 5)).toBe(6);
    });

    test("calculate with 3 steps", () => {
        expect(calculate(pitch, [4, 1], [2, 3], 3)).toBe(0);
    });

    test("calculate with 4 steps", () => {
        expect(calculate(pitch, [4, 1], [2, 3], 4)).toBe(6);
    });

    test("calculate from [0, 0] to [5, 0] with 6 steps", () => {
        expect(calculate(pitch, [0, 0], [5, 0], 6)).toBe(1);
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

    // before the algorithm is determined
    test("calculate with 6 steps", () => {
        expect(calculate(pitch, [4, 1], [2, 3], 6)).toBe(6);
    });
});
