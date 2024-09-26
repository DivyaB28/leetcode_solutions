/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let map = new Map();
  for (let char of magazine) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  for (let char of ransomNote) {
    if (map.get(char)) {
      map.set(char, map.get(char) - 1);
    } else {
      return false;
    }
  }
  return true;
};

/**
 * Problem: https://leetcode.com/problems/ransom-note/description/
 * Solution: https://leetcode.com/problems/ransom-note/solutions/3360795/typescript-hashmap/
 */
