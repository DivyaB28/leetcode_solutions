/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums, left = 0, right = nums.length - 1) {
  // return nums.reduce((a, b) => a ^ b);

  // for (let i = 0; i < nums.length; i += 2) {
  //     if (nums[i] != nums[i + 1]) {
  //         return nums[i];
  //     }
  // }
  // return nums[nums.length - 1];

  while (left < right) {
    let mid = left + (right - left) / 2;

    if (nums[mid] == nums[mid + 1]) mid = mid - 1;
    if ((mid - left + 1) % 2 != 0) right = mid;
    else left = mid + 1;

    //  let mid = Math.floor((left+right)/2)
    // if(mid%2===1) mid-- //indexes are odd so if mid is odd then reduce mid to make it even
    // if(nums[mid]===nums[mid+1]) left=mid+2
    // else right =mid-1
  }
  return nums[left];
};

/**
 * Problem: https://leetcode.com/problems/single-element-in-a-sorted-array/
 * Solution: https://leetcode.com/problems/single-element-in-a-sorted-array/solutions/4583825/easy-to-understand-binary-search-solution-with-explanation-beats-100/
 */
