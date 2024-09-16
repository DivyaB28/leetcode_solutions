/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let count = 0,
    max = 0;
  for (let c of s) {
    if (c === "(") {
      count++;
      if (max < count) {
        max = count;
      }
    } else if (c === ")") {
      count--;
    }
  }
  return max;
};

/**
 * problem: https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/
 * solution: https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/solutions/4969587/96-33-easy-solution-with-explanation/
 */
