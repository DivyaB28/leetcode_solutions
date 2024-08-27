/**
 * Reference :
 * Problem:
 * https://leetcode.com/problems/number-of-visible-people-in-a-queue/description/
 * Solution
 * https://leetcode.com/problems/number-of-visible-people-in-a-queue/solutions/5340544/js-solution-with-explanation/
 *  */

/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function (heights) {
  let result = [],
    stack = [];
  for (let i = heights.length - 1; i >= 0; i--) {
    let count = 0;
    while (stack.length > 0 && heights[i] > heights[stack[stack.length - 1]]) {
      count++;
      stack.pop();
    }
    if (stack.length > 0) count++;
    result[i] = count;
    stack.push(i);
  }
  return result;
};
