// https://www.geeksforgeeks.org/problems/floor-in-a-sorted-array-1587115620/1?track=DSASP-Searching&amp%253BbatchId=154&utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=floor-in-a-sorted-array

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} x
 * @returns {number}
 */

class Solution {
  findFloor(arr, n, x) {
    function floorSearch(arr, low, high, x) {
      if (low > high) {
        return -1;
      }

      if (x >= arr[high]) {
        return high;
      }

      let mid = Math.floor((low + high) / 2);

      if (arr[mid] == x) {
        return mid;
      }
      // If x lies between mid-1 and mid
      if (mid > 0 && arr[mid - 1] <= x && x < arr[mid]) {
        return mid - 1;
      }
      // If x is smaller than mid, floor
      // must be in left half.
      if (x < arr[mid]) {
        return floorSearch(arr, low, mid - 1, x);
      }

      return floorSearch(arr, mid + 1, high, x);
    }
    return floorSearch(arr, 0, n - 1, x);
  }
}
/**
 * Time Complexity: O(log N). To run a binary search.
Auxiliary Space: O(1). As no extra space is required.
 */
/**
 *Solution:  https://www.geeksforgeeks.org/floor-in-a-sorted-array/
 */
