/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let left = 0; left < nums.length; left++) {
    for (let right = left + 1; right < nums.length; right++) {
      if (nums[right] + nums[left] === target) return [left, right];
    }
  }
  return;
};
twoSum([3, 2, 3]);
