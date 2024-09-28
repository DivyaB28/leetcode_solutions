/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    mid;

  while (left < right) {
    mid = Math.floor((right + left) / 2);

    if (nums[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  // after the first while loop, the small index l should already be the first appearance index of target
  // otherwise, target is not in the array and [-1, -1] should be returned

  if (nums[left] !== target) {
    return [-1, -1];
  }
  // now we have the first appearance index of target, and it is the small index l
  // we can store it to a new variable for further usage

  let start = left;

  // since both of the indices were changed (both of them are at the first appearance index of target)
  // we need to reset the big index to the end of the array to do the second binary search
  // to find the last appearance index of the target

  right = nums.length - 1;

  while (left < right) {
    mid = Math.floor((left + right) / 2);
    nums[mid] <= target ? (left = mid + 1) : (right = mid);
  }

  let end = nums[left] === target ? left : left - 1;

  return [start, end];
};
/**
 * O(long n)
 * Problem: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 * Solution: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/694526/binary-search-o-log-n-even-for-worst-case-with-explanation/
 */
