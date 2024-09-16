/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  s = s.trim();
  if (s.length === 0) return 0;

  let num = 0,
    sign = 1,
    i = 0;

  if (s[i] === "+") {
    i++;
  } else if (s[i] === "-") {
    i++;
    sign = -1;
  }
  while (i < s.length && /^\d$/.test(s[i])) {
    num = num * 10 + parseInt(s[i]);
    i++;
  }
  num *= sign;
  num = Math.max(Math.min(num, Math.pow(2, 31) - 1), -Math.pow(2, 31));
  return num;
};

/**
 *
 * problem: https://leetcode.com/problems/string-to-integer-atoi/description/
 * solution: https://leetcode.com/problems/string-to-integer-atoi/solutions/3497114/c-java-python-javascript-with-explanation-beats-99-81/
 */
