/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  let count = kmp(s.split("").reverse().join(""), s);
  return s.slice(count).split("").reverse().join("") + s;
};

var kmp = function (txt, patt) {
  let newString = patt + "#" + txt;
  let pi = new Array(newString.length).fill(0);
  let i = 1,
    k = 0;
  while (i < newString.length) {
    if (newString[i] === newString[k]) {
      k++;
      pi[i] = k;
      i++;
    } else {
      if (k > 0) {
        k = pi[k - 1];
      } else {
        pi[i] = 0;
        i++;
      }
    }
  }
  return pi[newString.length - 1];
};
/**
 *Problem: https://leetcode.com/problems/shortest-palindrome/description/?envType=daily-question&envId=2024-09-20
 * Solution: KMP algorithm
 *
 * https://leetcode.com/problems/shortest-palindrome/solutions/5810352/beats-100-beginner-friendly-python3-java-c-c-ruby-go-javascript/?envType=daily-question&envId=2024-09-20
 */
