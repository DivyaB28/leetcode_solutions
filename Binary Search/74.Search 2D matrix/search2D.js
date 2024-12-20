/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length,
    n = matrix[0].length;
  let left = 0,
    right = m * n - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let mid_val = matrix[Math.floor(mid / n)][mid % n];

    if (mid_val === target) {
      return true;
    } else if (mid_val < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};

/**
 * https://leetcode.com/problems/search-a-2d-matrix/solutions/3874071/100-binary-search-video-simple-solution/
 */
