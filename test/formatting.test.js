import { formatGrid, formatTable } from "../src/formatting.js"

describe("formatGrid", () => {
    test("formats a 3x3 grid when values have different lengths", () => {
        const table = [
            [4, 6, 10],
            [6, 9586, 15],
            [124, 15, 25]
        ];

        expect(formatGrid(table)).toBe(
            "  4    6 10\n" +
            "  6 9586 15\n" +
            "124   15 25"
        );
    });

    test("formats a 1x1 grid", () => {
        const table = [
            [42],
        ];

        expect(formatGrid(table)).toBe("42");
    });

    test("formats a 4x4 grid with some values as empty string", () => {
        const table = [
            ["", 2, 3, 5],
            [2, 4, 6, 10],
            [3, 6, 9, 15],
            [5, 10, 15, 25]
        ];

        expect(formatGrid(table)).toBe(
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

        expect(formatGrid(table)).toBe("");
    });

    test("aligns positive and negative values", () => {
        const table = [
            [-4, 22],
            [100, -6]
        ];

        expect(formatGrid(table)).toBe(
            " -4 22\n" +
            "100 -6"
        );
    });

    test("uses the specified column spacing", () => {
        const table = [
            [4, 125],
            [36, 9]
        ];

        expect(formatGrid(table, 4)).toBe(
            " 4    125\n" +
            "36      9"
        );
    });
});

describe("formatTable", () => {
    test("formats a multiplication table with row and column headers", () => {
        const table = [
            [4, 6, 10],
            [6, 9, 15],
            [10, 15, 25]
        ];

        const headers = [2, 3, 5];

        expect(formatTable(table, headers)).toBe(
            "   2  3  5\n" +
            "2  4  6 10\n" +
            "3  6  9 15\n" +
            "5 10 15 25"
        );
    });

    test("formats a table with one value", () => {
        const table = [
            [4]
        ];

        const headers = [2];

        expect(formatTable(table, headers)).toBe(
            "  2\n" +
            "2 4"
        );
    });

    test("formats a table with different sized values", () => {
        const table = [
            [4, 246],
            [246, 15276]
        ];

        const headers = [2, 123];

        expect(formatTable(table, headers)).toBe(
            "      2   123\n" +
            "  2   4   246\n" +
            "123 246 15276"
        );
    });
});