/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  let ans = new Array(nums.length);
  for (let i = 0; i < ans.length; i++) {
    ans[i] = nums[nums[i]];
  }
  return ans;
};
