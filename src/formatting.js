
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

            // Store the largest width found for each column
            columnWidths[index] = Math.max(
                columnWidths[index] || 0,
                width
            );
        });
    }

    // Format each row using the calculated column widths
    return grid
        .map(row =>
            row
                .map((value, index) =>
                    // Right-align each value to the width of its column
                    String(value).padStart(columnWidths[index])
                )
                // Add the minimum spacing between each column
                .join(" ".repeat(minColumnSpacing))
        )
        // Put each formatted row on a new line
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
    // Add a blank corner cell followed by the column headers
    const grid = [
        ["", ...headers],

        // Add each row header to the start of its corresponding table row
        ...table.map((row, index) => [headers[index], ...row])
    ];

    return formatGrid(grid, minColumnSpacing);
}

export { formatGrid, formatTable };

