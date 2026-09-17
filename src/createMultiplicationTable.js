
/**
 * Creates a multiplication table from the supplied numbers.
 *
 * @param {number[]} numbers - Numbers to multiply
 * @returns {number[][]} A square multiplication table
 */
function createMultiplicationTable(numbers) {
    const table = [];

    for (const rowNum of numbers) {
        const row = [];

        // Multiple the number by itself and every other number
        for (const columnNum of numbers) {
            row.push(rowNum * columnNum);
        }
        table.push(row);
    }
    return table;
}

export { createMultiplicationTable }