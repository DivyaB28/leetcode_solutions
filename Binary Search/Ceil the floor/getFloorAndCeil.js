class Solution {
  getFloorAndCeil(x, arr) {
    arr = arr.sort((a, b) => a - b);
    let result = [0, 0];

    let low = 0,
      high = arr.length - 1;

    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      if (arr[mid] > x) {
        high = mid - 1;
      } else if (arr[mid] < x) {
        low = mid + 1;
      } else {
        result = [arr[mid], arr[mid]];
        return result;
      }
    }
    // if loop breaks
    result[0] = high == -1 ? -1 : arr[high];
    result[1] = low == arr.length ? -1 : arr[low];

    return result;
  }
}
/**
 * Problem: https://www.geeksforgeeks.org/problems/ceil-the-floor2802/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=ceil-the-floor
 * 
 * Solution: https://www.geeksforgeeks.org/find-floor-ceil-unsorted-array/
 * 
 * Time Complexity : O(n log n) 
Auxiliary Space : O(1)
 */
