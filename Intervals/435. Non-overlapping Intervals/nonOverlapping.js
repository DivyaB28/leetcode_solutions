/**
 * @param {number[][]} intervals
 * @return {number}
 */

/**
Explanation:
Sort intervals:
Sort the intervals based on their ending times. This is crucial for the greedy approach to work.


Iterate and choose:
Iterate through the intervals, keeping track of the end time of the last non-overlapping interval.

Check for overlap:
If the start time of the current interval is greater than or equal to the end time of the previous non-overlapping interval, there's no overlap. We can include this interval in our result.


Count removals:
The number of intervals to remove is the total number of intervals minus the number of non-overlapping intervals we found.
 */

var eraseOverlapIntervals = function (intervals) {
  if (intervals.length === 0) return 0;

  intervals.sort((a, b) => a[1] - b[1]);

  let prevEnd = intervals[0][1],
    nonOverlappingCount = 1;

  for (let i = 0; i < intervals.length; i++) {
    let currStart = intervals[i][0];

    if (currStart >= prevEnd) {
      nonOverlappingCount++;
      prevEnd = intervals[i][1];
    }
  }
  return intervals.length - nonOverlappingCount;
};

/**
 * https://leetcode.com/problems/non-overlapping-intervals/description/
 */
