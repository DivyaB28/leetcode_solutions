/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let res = [];

  function makeCombination(index, comb, total) {
    if (total === n && comb.length === k) {
      res.push(comb.slice());
      return;
    }

    for (let i = index; i < 10; i++) {
      makeCombination(i + 1, comb.concat(i), total + i);
    }
  }
  makeCombination(1, [], 0);
  return res;
};

/**
 * problem: https://leetcode.com/problems/combination-sum-iii/description/
 * solution: https://leetcode.com/problems/combination-sum-iii/solutions/5646207/typical-backtracking-beats-66-kinda-simple-solution-tbh/
 */
