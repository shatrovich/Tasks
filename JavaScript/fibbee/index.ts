type C = {
    x: number;
    y: number;
}

export const calculate = (size: number, rc: C, ec: C, count: number): number => {
    if (rc.x === ec.x && rc.y === ec.y) {
        return 1;
    }

    if (count === 0) return 0;

    if (rc.x === 1 && rc.y === 1) {
        return calculate(size, { x: rc.x + 1, y: rc.y }, ec, count - 1) + calculate(size, { x: rc.x, y: rc.y + 1 }, ec, count - 1);
    }

    if (rc.x === size && rc.y === size) {
        return calculate(size, { x: rc.x - 1, y: rc.y }, ec, count - 1) + calculate(size, { x: rc.x, y: rc.y - 1 }, ec, count - 1);
    }

    if (rc.x === 1) {
        return calculate(size, { x: rc.x + 1, y: rc.y }, ec, count - 1) + calculate(size, { x: rc.x, y: rc.y + 1 }, ec, count - 1) + calculate(size, { x: rc.x, y: rc.y - 1 }, ec, count - 1);;
    }

    if (rc.y === 1) {
        return calculate(size, { x: rc.x, y: rc.y + 1 }, ec, count - 1) + calculate(size, { x: rc.x + 1, y: rc.y }, ec, count - 1) + calculate(size, { x: rc.x - 1, y: rc.y }, ec, count - 1);;
    }

    if (rc.x === size) {
        return calculate(size, { x: rc.x - 1, y: rc.y }, ec, count - 1) + calculate(size, { x: rc.x, y: rc.y + 1 }, ec, count - 1) + calculate(size, { x: rc.x, y: rc.y - 1 }, ec, count - 1);;
    }

    if (rc.y === size) {
        return calculate(size, { x: rc.x, y: rc.y - 1 }, ec, count - 1) + calculate(size, { x: rc.x + 1, y: rc.y }, ec, count - 1) + calculate(size, { x: rc.x - 1, y: rc.y }, ec, count - 1);;
    }

    return calculate(size, { x: rc.x - 1, y: rc.y }, ec, count - 1) + calculate(size, { x: rc.x + 1, y: rc.y }, ec, count - 1) + calculate(size, { x: rc.x, y: rc.y - 1 }, ec, count - 1) + calculate(size, { x: rc.x, y: rc.y + 1 }, ec, count - 1);;
}

export default calculate;
