/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  let res = [];

  const makeCombinations = (target, start, comb) => {
    if (target < 0) {
      return;
    }
    if (target === 0) {
      res.push(comb.slice());
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue;
      }
      if (candidates[i] > target) {
        break;
      }
      makeCombinations(
        target - candidates[i],
        i + 1,
        comb.concat(candidates[i])
      );
    }
  };
  makeCombinations(target, 0, []);
  return res;
};

/**
 * Problem:
 * https://leetcode.com/problems/combination-sum-ii/description/
 *  Time complexity: O(nlogn+k∗2^n)
n log n from Sorting
k is number of valid combinations
The DFS algorithm has a worst-case time complexity of O(2^n)

Space complexity: O(n+k∗n)
The space complexity of the DFS algorithm is O(n), where n is the length of the input array. This is because the DFS algorithm stores the current combination and the remaining candidates on the call stack, which can grow to a depth of n in the worst case.
k is the number of valid combinations
n is the length of each combination.
 * Solution: https://leetcode.com/problems/combination-sum-ii/solutions/5426289/video-solution/
 */
