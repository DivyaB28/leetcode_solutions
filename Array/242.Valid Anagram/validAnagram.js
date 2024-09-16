/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let sortedS = s.split("").sort().join();
  let sortedT = t.split("").sort().join();

  return sortedS == sortedT;
};


// https://leetcode.com/problems/valid-anagram/submissions/1372670471/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * solution: 
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const count = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
      count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
      count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }
  for (let i = 0; i < 26; i++) {
      if (count[i] !== 0) return false;
  }
  return true;
};