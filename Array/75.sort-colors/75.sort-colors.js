/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let low = 0, // Pointer for 0 (red)
    high = nums.length - 1, // Pointer for 2 (blue)
    i = 0;
  while (i <= high) {
    if (nums[i] === 0) {
      // Swap with the low pointer and move both pointers
      [nums[i], nums[low]] = [nums[low], nums[i]];
      low++;
      i++;
    } else if (nums[i] === 2) {
      // Swap with the high pointer
      [nums[i], nums[high]] = [nums[high], nums[i]];
      high--;
    } else {
      i++; // Move forward if the element is 1 (white)
    }
  }
};
// Example usage:
const nums1 = [2, 0, 2, 1, 1, 0];
sortColors(nums1);
console.log(nums1); // Output: [0, 0, 1, 1, 2, 2]

const nums2 = [2, 0, 1];
sortColors(nums2);
console.log(nums2); // Output: [0, 1, 2]
