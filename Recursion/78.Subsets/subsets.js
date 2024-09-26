var subsets = function (nums) {
  const res = [];
  const subset = [];

  function recursive(i) {
    if (i === nums.length) {
      res.push([...subset]);
      return;
    }

    subset.push(nums[i]);
    recursive(i + 1);

    subset.pop();
    recursive(i + 1);
  }
  recursive(0);
  return res;
};

/**
 * Time: O(2^n)
 * space: O(2^n)
 *
 * Problem:https://leetcode.com/problems/subsets/description/
 * Solution: https://leetcode.com/problems/subsets/solutions/5525998/video-we-have-two-choices-for-each-number/
 */
