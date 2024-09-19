/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s.length) return 0;
  let left = 0,
    right = 0,
    maxLength = -Infinity;

  let set = new Set();
  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right]);
      right++;
      maxLength = Math.max(maxLength, set.size);
    } else {
      set.delete(s[left]);
      left++;
    }
  }
  return maxLength;
};
/**
 * Problem: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 * Solution: https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/927233/well-commented-javascript-sliding-window-solution-with-set-o-n-time-o-n-space/
 */
