/**
 * Problem:
 * https://leetcode.com/problems/minimum-size-subarray-sum/description/
 *
 * Solution:
 * https://leetcode.com/problems/minimum-size-subarray-sum/solutions/5645574/beats-99-sliding-window-java-explained/
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let right = 0,
    left = 0,
    sum = 0,
    ans = Number.MAX_VALUE,
    currLen = 0;
  while (right < nums.length) {
    sum += nums[right];

    while (sum >= target) {
      currLen = right - left + 1;
      ans = Math.min(ans, currLen);
      sum -= nums[left];
      left++;
    }
    right++;
  }
  return ans == Number.MAX_VALUE ? 0 : ans;
};
