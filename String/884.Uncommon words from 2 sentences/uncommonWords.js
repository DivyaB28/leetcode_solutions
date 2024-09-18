/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  let arr1 = s1.split(" ");
  let arr2 = s2.split(" ");

  let hash = new Map();

  for (let word of arr1) {
    if (hash.has(word)) {
      hash.set(word, hash.get(word) + 1);
    } else {
      hash.set(word, 1);
    }
  }

  for (let word of arr2) {
    if (hash.has(word)) {
      hash.set(word, hash.get(word) + 1);
    } else {
      hash.set(word, 1);
    }
  }

  let res = [];
  hash.forEach((value, key) => {
    if (value == 1) res.push(key);
  });
  return res;
};

/**
 * Problem: https://leetcode.com/problems/uncommon-words-from-two-sentences/description/?envType=daily-question&envId=2024-09-17
 * Solution: https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/5799384/solution-javascript-c-python/?envType=daily-question&envId=2024-09-17
 */
