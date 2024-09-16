/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  let minutes = timePoints.map((time) => {
    let [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  });

  minutes.sort((a, b) => a - b);

  let minDiff = Infinity;

  for (let i = 0; i < minutes.length - 1; i++) {
    minDiff = Math.min(minDiff, minutes[i + 1] - minutes[i]);
  }

  minDiff = Math.min(
    minDiff,
    24 * 60 - minutes[minutes.length - 1] + minutes[0]
  );

  return minDiff;
};

/**
 *
 * Problem: https://leetcode.com/problems/minimum-time-difference/description/?envType=daily-question&envId=2024-09-16
 * Solution: https://leetcode.com/problems/minimum-time-difference/solutions/5792274/1440-mins-in-1-day-explained-with-video-c-java-python-js-count-total-minutes-explained/?envType=daily-question&envId=2024-09-16
 */
