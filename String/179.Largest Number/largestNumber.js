/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  if (nums.length === 0 || !nums) {
    return "0";
  }
  nums.sort((a, b) => `${b}${a}` - `${a}${b}`);
  if (nums[0] === 0) {
    return "0";
  }
  return nums.join("");
};

/**
 *
 * Problem: https://leetcode.com/problems/largest-number/description/?envType=daily-question&envId=2024-09-18
 * Solution: https://leetcode.com/problems/largest-number/solutions/1012321/javascript-with-sort-o-nlogn/?envType=daily-question&envId=2024-09-18
 */
