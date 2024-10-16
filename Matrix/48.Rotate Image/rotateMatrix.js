/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let edgeLength = matrix.length;

  let top = 0,
    bottom = edgeLength - 1;

  while (top < bottom) {
    for (let col = 0; col < edgeLength; col++) {
      let temp = matrix[top][col];
      matrix[top][col] = matrix[bottom][col];
      matrix[bottom][col] = temp;
    }
    top++;
    bottom--;
  }

  for (let row = 0; row < edgeLength; row++) {
    for (let col = row + 1; col < edgeLength; col++) {
      let temp = matrix[row][col];
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = temp;
    }
  }
};

/**
 * Solution: https://leetcode.com/problems/rotate-image/solutions/5455041/video-make-2-lines/
 * Problem: https://leetcode.com/problems/rotate-image/description/
 */
