/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let rows = matrix.length,
    columns = matrix[0].length,
    x = 0,
    y = 0,
    dx = 1,
    dy = 0,
    res = [];

  for (let i = 0; i < rows * columns; i++) {
    res.push(matrix[y][x]);
    matrix[y][x] = ".";

    if (
      !(x + dx >= 0 && x + dx < columns && y + dy >= 0 && y + dy < rows) ||
      matrix[y + dy][x + dx] === "."
    ) {
      [dx, dy] = [-dy, dx];
    }
    x += dx;
    y += dy;
  }
  return res;
};

/**
 * Solution: https://leetcode.com/problems/spiral-matrix/solutions/5513240/video-explanation/
 * problem: https://leetcode.com/problems/spiral-matrix/description/
 */
