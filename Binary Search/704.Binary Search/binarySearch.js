/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let h = nums.length - 1;
  let l = 0;
  while (h >= l) {
    let mid = l + Math.floor((h - l) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] > target) {
      h = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
};
