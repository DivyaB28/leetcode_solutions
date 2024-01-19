/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let left = 0,
    rows = matrix.length,
    cols = matrix[0].length,
    right = rows * cols - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midVal = matrix[Math.floor(mid / cols)][mid % cols];
    if (midVal === target) return true;
    if (target > midVal) left = mid + 1;
    else right = mid - 1;
  }
  return false;
};
