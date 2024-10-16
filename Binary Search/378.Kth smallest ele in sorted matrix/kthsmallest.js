/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const n = matrix.length;

  function getCount(target) {
    let count = 0;

    for (let i = 0; i < n; i++) {
      let currCount = 0;

      for (let j = 0; j < n; j++) {
        if (matrix[i][j] <= target) currCount++;
        else break;
      }
      count += currCount;
      if (!currCount) break;
    }
    return count;
  }

  let start = matrix[0][0],
    end = matrix[n - 1][n - 1];

  while (start < end) {
    const mid = Math.floor((end - start) / 2) + start;
    const count = getCount(mid);
    if (count < k) start = mid + 1;
    else end = mid;
  }
  return end;
};

/**
 * Problem: https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/submissions/1407632798/
 */
