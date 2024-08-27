/**
 * Problem:
 *
 * https://leetcode.com/problems/non-overlapping-intervals/description/
 *
 * solution:
 * https://leetcode.com/problems/non-overlapping-intervals/solutions/5513250/video-sorting-solution/
 *
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  let res = 0;
  intervals.sort((a, b) => a[1] - b[1]);
  let prev = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (prev > intervals[i][0]) {
      res++;
    } else {
      prev = intervals[i][1];
    }
  }
  return res;
};
