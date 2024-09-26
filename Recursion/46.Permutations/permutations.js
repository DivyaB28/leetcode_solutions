/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];

  function recursive(start) {
    if (start === nums.length) {
      res.push([...nums]);
      return;
    }
    for (let i = start; i < nums.length; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]];
      recursive(start + 1);
      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  }
  recursive(0);
  return res;
};

/**
 * Time complexity: O(n * n!)

Recursive Calls: The permute function is called recursively, and each time it generates permutations for a smaller list by removing one element. In the worst case, the recursion depth is equal to the length of the input list nums, which is n.

Permutation Generation: For each index, we are generating permutations for the remaining elements and appending the removed element at the end. This involves recursive calls and list manipulations. In general time complexity of permutation should be O(n!)

Space complexity: O(n)

Recursion Depth: The depth of recursion goes up to the number of elements in the input list. So, the maximum recursion depth is O(n).

Additional Memory: The additional memory usage includes the res list, the n variable, and the space used in each recursive call.

Considering these factors, the space complexity is O(n)
 */

/**
 * Problem: https://leetcode.com/problems/permutations/description/
 * Solution: https://leetcode.com/problems/permutations/solutions/5152552/video-simple-backtracking-solution/
 */
