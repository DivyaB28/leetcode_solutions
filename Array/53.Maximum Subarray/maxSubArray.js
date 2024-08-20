/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length == 0) return 0;
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > 0) {
      nums[i] += nums[i - 1];
    }
    maxSum = Math.max(maxSum, nums[i]);
  }
  return maxSum;
};
