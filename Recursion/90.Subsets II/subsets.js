/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  const subset = [];

  function recursive(index) {
    res.push([...subset]);
    for (let i = index; i < nums.length; i++) {
      if (i !== index && nums[i] === nums[i - 1]) continue;
      subset.push(nums[i]);
      recursive(i + 1);
      subset.pop();
    }
  }
  recursive(0);
  return res;
};

/**
 * Time complexity:
O(2^n∗n)

Space complexity:
O(2^n∗k)
*
*/

/**
 * Problem: https://leetcode.com/problems/subsets-ii/description/
 * Solution: https://leetcode.com/problems/subsets-ii/solutions/4501326/beats-100-users-c-java-python-javascript-explained/
 */
