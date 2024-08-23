/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let prefix = 1,
    suffix = 1,
    max = Number.MIN_SAFE_INTEGER,
    n = nums.length;

  for (let i = 0; i < n; i++) {
    if (prefix == 0) prefix = 1;
    if (suffix == 0) suffix = 1;
    prefix *= nums[i]; // product of left of zero
    suffix *= nums[n - i - 1]; // product from right

    max = Math.max(max, Math.max(prefix, suffix));
  }
  return max;
};

// Time complexity : O(n)
// Space complexity : O(1)
