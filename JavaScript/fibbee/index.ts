type Pitch = Array<Array<0>>;

type Coords = [number, number]; // x, y - start with zero, start with 0

export const createPitch = (length: number): Pitch => new Array(length).fill(new Array(length).fill(0));

export const isEqual = ([ax, ay]: Coords, [bx, by]: Coords) => {
    if ((ax === bx) && (ay === by)) {
        return true;
    }

    return false;
}

export const _getNextCoordinates = (length: number, [x, y]: Coords): Array<[number, number]> => {
    const c: Array<[number, number]> = []; // top, right, bottom, left

    if (y !== 0) { // top
        c.push([x, y - 1]);
    }

    if (x < (length - 1)) { // right
        c.push([x + 1, y]);
    }

    if (y < (length - 1)) { // bottom
        c.push([x, y + 1]);
    }

    if (x !== 0) { // left
        c.push([x - 1, y]);
    }

    return c;
}

const _calculate = (pitch: Pitch, a: Coords, b: Coords, currentStep: number, count: number): number => {
    if (currentStep < 0) return count;

    if (isEqual(a, b)) {
        return count + 1;
    }

    const n = _getNextCoordinates(pitch.length, b);

    return n.reduce((acc, v) => _calculate(pitch, a, v, currentStep - 1, acc), count);
}

export const calculate = (pitch: Pitch, rCoords: Coords, eCoords: Coords, countSteps = 0): number => {
    if (isEqual(rCoords, eCoords)) {
        return -1;
    }

    if (countSteps === 0) {
        return -1;
    }

    return _calculate(pitch, rCoords, eCoords, countSteps, 0);
}
