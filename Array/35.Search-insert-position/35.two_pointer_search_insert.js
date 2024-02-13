/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums.includes(target)) return nums.indexOf(target);

  if (nums[nums.length - 1] < target) return nums.length;

  if (nums[0] > target) return 0;

  for (let i = 0; i < nums.length - 1; i++) {
    const left = nums[i];
    const right = nums[i + 1];
    if (left < target && right > target) return i + 1;
  }
};
// O(n)
searchInsert([1, 3, 5, 6], 2); // 1

const searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  let middle = Math.floor((left + right) / 2);

  if (target < nums[left]) return 0;
  else if (target > nums[right]) return right + 1;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);

    if (target < nums[middle]) {
      right = middle - 1;
    } else if (target > nums[middle]) {
      left = middle + 1;
    } else {
      return middle;
    }
  }
  return left;
};
