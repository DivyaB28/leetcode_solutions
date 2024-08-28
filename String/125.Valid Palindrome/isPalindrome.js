/**
 *
 * Problem:
 * https://leetcode.com/problems/valid-palindrome/description/
 *
 * Reference:
 * https://takeuforward.org/data-structure/check-if-the-given-string-is-palindrome-or-not/
 * @param {string} s
 * @return {boolean}
 */

const recursive = (i, str) => {
  // Base Condition
  // If i exceeds half of the string means all the elements
  // are compared, we return true
  if (i >= str.length / 2) {
    return true;
  }
  if (str[i] !== str[str.length - i - 1]) {
    return false;
  }
  return recursive(i + 1, str);
};
var isPalindrome = function (s) {
  // let regExp = new RegExp(/[A-Za-z0-9]/, "g");
  // let ans = s.match(regExp);
  let ans = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  return recursive(0, ans);
};
