/**
 * Binary Search
 * O(mlogn)
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let count = 0;
  const cols = grid[0].length;
  for (const row of grid) {
    let left = 0,
      right = cols - 1;
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      if (row[middle] < 0) {
        count += right - middle + 1;
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
  }
  return count;
};

/**
 * O(m + n)
 * @param {*} grid
 * @returns
 */

const countNegatives = (grid) => {
  let m = grid.length;
  let n = grid[0].length;
  let count = 0;
  let row = m - 1;
  let column = 0;

  while (row >= 0 && column < n) {
    if (grid[row][column] < 0) {
      count += n - column;
      row--;
    } else {
      column++;
    }
  }

  return count;
};
