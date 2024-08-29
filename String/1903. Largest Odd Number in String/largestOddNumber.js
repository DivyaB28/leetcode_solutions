/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  if (parseInt(num.slice(-1)) % 2 === 1) return num;

  let index = num.length - 1;
  while (index >= 0) {
    const n = parseInt(num[index]);
    if (n % 2 === 1) return num.slice(0, index + 1);
    index--;
  }
  return "";
};

var largestOddNumber = function (num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (parseInt(num[i]) % 2 === 1) {
      // Check if the digit is odd
      return num.substring(0, i + 1); // Return the substring
    }
  }
  return ""; // Return an empty string if no odd digit is found
};

/**
 *
 * Problem: https://leetcode.com/problems/largest-odd-number-in-string/description/
 *
 * Solution: https://leetcode.com/problems/largest-odd-number-in-string/solutions/4372468/beats-100-c-java-python-js-odd-number-substring-visualized/
 */
