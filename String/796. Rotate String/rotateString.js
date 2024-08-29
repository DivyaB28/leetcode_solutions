/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  for (let shift = 0; shift < s.length; shift++) {
    if (s.slice(shift) + s.slice(0, shift) === goal) {
      return true;
    }
  }
  return goal.length ? false : true;
};

/**
 * problem: https://leetcode.com/problems/rotate-string/description/
 * Solution: https://leetcode.com/problems/rotate-string/solutions/353851/two-line-js-solution-44-ms-faster-than-98-20-memory-usage-33-8-mb-less-than-100-00/
 */
