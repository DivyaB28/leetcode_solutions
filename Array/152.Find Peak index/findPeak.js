/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let left = 0,
    right = nums.length - 1,
    mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    const curr = nums[mid];
    const prev = nums[mid - 1] || -Infinity;
    const next = nums[mid + 1] || -Infinity;
    if (prev < curr && curr > next) return mid;
    else if (prev < curr) left = mid + 1;
    else right = mid - 1;
  }
  return 0;
};
