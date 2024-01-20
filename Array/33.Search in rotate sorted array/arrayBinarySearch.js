/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[left] <= nums[mid]) {
      //then first half is sorted then search in first half
      if (nums[left] <= target && target < nums[mid]) {
        // if target lies in first half
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      //then next half is sorted then search in next half
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
