/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var p = 0;
    var iLength = grid.length;
    var getItemPerimeter = function (i, j) {
        var res = 4;
        if (grid[i][j - 1] === 1) {
            res--;
        }
        if (grid[i][j + 1] === 1) {
            res--;
        }
        if (i - 1 >= 0 && grid[i - 1][j] === 1) {
            res--;
        }
        if (i + 1 < iLength && grid[i + 1][j] === 1) {
            res--;
        }
        return res;
    };
    for (let i = 0; i < iLength; i++) {
        const row = grid[i];
        const jLength = row.length;
        for (let j = 0; j < jLength; j++) {
            const item = row[j];
            if (item === 1) {
                p += getItemPerimeter(i, j);
            }
        }
    }
    return p;
};
