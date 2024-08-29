/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let count = 0,
    ans = "";

  for (let c of s) {
    if (c === "(") {
      if (count !== 0) {
        ans += c;
      }
      count++;
    } else {
      if (count > 1) {
        ans += c;
      }
      count--;
    }
  }
  return ans;
};

/**
 * Problem:  https://leetcode.com/problems/remove-outermost-parentheses/description/
 * Solution: https://leetcode.com/problems/remove-outermost-parentheses/solutions/5685043/removing-outer-layers-of-parentheses-in-linear-time-4ms-runtime/
 */
