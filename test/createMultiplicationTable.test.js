import { createMultiplicationTable } from "../src/createMultiplicationTable.js"

test("creates a multiplication table for first 3 prime numbers", () => {
    expect(createMultiplicationTable([2, 3, 5])).toEqual([
        [4, 6, 10],
        [6, 9, 15],
        [10, 15, 25]
    ]);
});

// Testing the lower boundary
test("creates a multiplication table for one prime", () => {
    expect(createMultiplicationTable([2])).toEqual([
        [4]
    ]);
});

test("creates a multiplication table for different primes", () => {
    expect(createMultiplicationTable([3, 7])).toEqual([
        [9, 21],
        [21, 49]
    ]);
});

// Ensure the table hsas the correct number of rows and columns
test("creates a square table matching the number of primes", () => {
    const table = createMultiplicationTable([2, 3, 5]);

    expect(table).toHaveLength(3);
    expect(table.every(row => row.length === 3)).toBe(true);
});

