/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let window_sum = 0,
    max = 0;
  for (let i = 0; i < k; i++) {
    window_sum += nums[i];
    max = window_sum / k;
  }
  for (let i = k; i < nums.length; i++) {
    window_sum += nums[i] - nums[i - k];

    if (window_sum / k > max) {
      max = window_sum / k;
    }
  }
  return max;
};
