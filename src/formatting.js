
/**
 * Formats a two-dimensional array into an aligned grid.
 *
 * @param {Array[]} grid - Two-dimensional array of values
 * @param {number} minColumnSpacing - Minimum number of spaces between columns.
 * @returns {string} The formatted grid
 */
function formatGrid(grid, minColumnSpacing = 1) {
    const columnWidths = [];

    // Find the widest value in each column
    for (const row of grid) {
        row.forEach((value, index) => {
            const width = String(value).length;

            columnWidths[index] = Math.max(
                columnWidths[index] || 0,
                width
            );
        });
    }

    return grid
        .map(row =>
            row
                .map((value, index) =>
                    String(value).padStart(columnWidths[index])
                )
                .join(" ".repeat(minColumnSpacing))
        )
        .join("\n");
}

/**
 * Formats a multiplication table with row and column headers.
 *
 * @param {number[][]} table - Multiplication table values
 * @param {number[]} headers - Row and column headers
 * @param {number} minColumnSpacing - Minimum number of spaces between columns.
 * @returns {string} The formatted table
 */
function formatTable(table, headers, minColumnSpacing = 1) {
    const grid = [
        ["", ...headers],
        ...table.map((row, index) => [headers[index], ...row])
    ];

    return formatGrid(grid, minColumnSpacing);
}

export { formatGrid, formatTable };

