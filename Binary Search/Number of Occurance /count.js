/**
 * Problem: https://www.geeksforgeeks.org/problems/number-of-occurrence2259/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=number-of-occurrence
 * Solution: https://www.geeksforgeeks.org/count-number-of-occurrences-or-frequency-in-a-sorted-array/
 */

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} x
 * @return {number}
 */

class Solution {
  firstOcc(arr, n, low, high, x) {
    if (high >= low) {
      let mid = Math.floor((high + low) / 2);
      // Check if the element is present at the middle or
      // if the element is present in the left half (if
      // the element is greater than the middle element)
      if (mid === 0 || (x > arr[mid - 1] && arr[mid] === x)) {
        return mid;
      } else if (x > arr[mid]) {
        // Search in right half
        return this.firstOcc(arr, n, mid + 1, high, x);
      } else {
        return this.firstOcc(arr, n, low, mid - 1, x);
      }
    }
    return -1;
  }

  secondOcc(arr, n, low, high, x) {
    if (high >= low) {
      let mid = Math.floor((high + low) / 2);
      // Check if the element is present at the middle or
      // if the element is present in the right half (if
      // the element is smaller than the middle element)
      if ((mid === n - 1 || x < arr[mid + 1]) && arr[mid] === x) {
        return mid;
      } else if (x < arr[mid]) {
        // Search in the left half
        return this.secondOcc(arr, n, low, mid - 1, x);
      } else {
        return this.secondOcc(arr, n, mid + 1, high, x);
      }
    }
    return -1;
  }

  count(arr, n, x) {
    let indexFirst = this.firstOcc(arr, n, 0, n - 1, x);

    if (indexFirst == -1) {
      return 0;
    }
    let indexSec = this.secondOcc(arr, n, indexFirst, n - 1, x);
    return indexSec - indexFirst + 1;
  }
}
