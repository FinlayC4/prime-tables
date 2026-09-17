import { formatGrid } from "../src/formatGrid.js"

test("formats a 3x3 grid when values have different lengths", () => {
    const table = [
        [4, 6, 10],
        [6, 9586, 15],
        [124, 15, 25]
    ];

    expect(formatGrid(table, 2)).toBe(
        "  4     6  10\n" +
        "  6  9586  15\n" +
        "124    15  25"
    );
});

test("formats a 1x1 grid", () => {
    const table = [
        [42],
    ];

    expect(formatGrid(table, 2)).toBe("42");
});

test("formats a 4x4 grid with some values as empty string", () => {
    const table = [
        ["", 2, 3, 5],
        [2, 4, 6, 10],
        [3, 6, 9, 15],
        [5, 10, 15, 25]
    ];

    expect(formatGrid(table, 2)).toBe(
        "   2  3  5\n" +
        "2  4  6 10\n" +
        "3  6  9 15\n" +
        "5 10 15 25"
    );
});

test("leaves an empty string as-is", () => {
    const table = [
        [""],
    ];

    expect(formatGrid(table, 2)).toBe("");
});

test("aligns positive and negative values", () => {
    const table = [
        [-4, 22],
        [100, -6]
    ];

    expect(formatGrid(table, 2)).toBe(
        " -4  22\n" +
        "100  -6"
    );
});

test("uses the specified column spacing", () => {
    const table = [
        [4, 6],
        [6, 9]
    ];

    expect(formatGrid(table, 4)).toBe(
        "4    6\n" +
        "6    9"
    );
});
