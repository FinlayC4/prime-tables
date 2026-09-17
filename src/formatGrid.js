
/**
 * Formats a two-dimensional array into an aligned grid.
 *
 * @param {Array[]} grid - Two-dimensional array of values
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

export { formatGrid };

