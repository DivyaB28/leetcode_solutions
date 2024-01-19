/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (k == 0) return;
  k = k % nums.length;
  reverseArr(nums, 0, nums.length - 1);
  reverseArr(nums, k, nums.length - 1);
  reverseArr(nums, 0, k - 1);
};

function reverseArr(nums, start, end) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}

rotate([1, 2, 3, 4, 5, 6, 7]);
