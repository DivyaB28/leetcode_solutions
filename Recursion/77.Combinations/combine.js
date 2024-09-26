/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [];
  const comb = [];

  function recursive(start) {
    if (comb.length === k) {
      res.push([...comb]);
      return;
    }

    for (let num = start; num <= n; num++) {
      comb.push(num);
      recursive(num + 1);
      comb.pop();
    }
  }
  recursive(1);
  return res;
};

/**
 * Time: O(n * k)
 * space: O(k)
 *
 * problem: https://leetcode.com/problems/combinations/description/
 * Solution: https://leetcode.com/problems/combinations/solutions/5418489/video-simple-backtracking-solution/
 */
