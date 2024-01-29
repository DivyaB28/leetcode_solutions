/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let wordSorted = "";
  let mp = new Map();
  for (let i = 0; i < strs.length; i++) {
    wordSorted = strs[i].split("").sort().join("");
    if (mp.has(wordSorted)) {
      mp.set(wordSorted, [strs[i], ...mp.get(wordSorted)]);
    } else mp.set(wordSorted, [strs[i]]);
  }
  return Array.from(mp.values());
};
