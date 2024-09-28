class Solution {
  findKRotation(arr) {
    let low = 0,
      high = arr.length - 1,
      mid;

    while (low <= high) {
      mid = Math.floor((high + low) / 2);

      // Check if mid is the pivot element (the smallest element)
      if (arr[mid] < arr[mid - 1] && arr[mid] < arr[mid + 1]) {
        return mid;
      }
      // Check if the array is rotated in the left half
      if (arr[mid] > arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return 0 || low;
  }
}

/**
 * Problem: https://www.geeksforgeeks.org/problems/rotation4723/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=rotation
 *
 */
