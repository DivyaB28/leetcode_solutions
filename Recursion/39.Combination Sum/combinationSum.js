/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];
  function makeCombinations(index, comb, total) {
    if (total === target) {
      res.push([...comb]);
      return;
    }

    if (total > target || index >= candidates.length) {
      return;
    }

    comb.push(candidates[index]);
    makeCombinations(index, comb, total + candidates[index]);
    comb.pop();
    makeCombinations(index + 1, comb, total);
  }
  makeCombinations(0, [], 0);
  return res;
};
/**
 * Time complexity: O(2^t)
Space complexity: O(t+k)
 */

/**
 * Problem: https://leetcode.com/problems/combination-sum/description/
 * Solution: https://leetcode.com/problems/combination-sum/solutions/5426168/video-simply-check-all-combinations/
 */
