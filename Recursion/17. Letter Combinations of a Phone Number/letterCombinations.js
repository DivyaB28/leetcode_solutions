/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) return [];
  const res = [];
  const digitToLetters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  function backtrack(idx, comb) {
    if (idx === digits.length) {
      res.push(comb);
      return;
    }

    for (const letter of digitToLetters[digits[idx]]) {
      backtrack(idx + 1, comb + letter);
    }
  }
  backtrack(0, "");
  return res;
};

/**
 * 
 * TIme: O(3^n) or O(4^n)
 * Space: Space complexity: O(n)
n is length of input string. This is for recursive call stack.

Problem: https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
Solution:https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/5125020/video-simple-solution/
 */
