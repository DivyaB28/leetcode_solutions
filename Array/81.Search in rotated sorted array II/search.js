/**
 * Brute force approach: Linear Search
 */

function searchInARoatatedSortedArrayII(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      return true;
    }
  }
  return false;
}

let arr = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6];
let k = 3;
let ans = searchInARotatedSortedArrayII(arr, k);
if (!ans) {
  console.log("Target is not present.");
} else {
  console.log("Target is present in the array.");
}

/**
 * Optimal Approach
 *
 * Binary Search Algorithm
 *
 * First, we identify the sorted half of the array.
 * Once found, we determine if the target is located within this sorted half.
 * If not, we eliminate that half from further consideration.
 * Conversely, if the target does exist in the sorted half, we eliminate the other half.
 * 
 * 
 * this array may contain duplicates: 
 * We basically compare arr[mid] with arr[low] and arr[high] in the following way:

If arr[low] <= arr[mid]: In this case, we identified that the left half is sorted.
If arr[mid] <= arr[high]: In this case, we identified that the right half is sorted.
This check was effective in the previous problem, where there were no duplicate numbers. However, in the current problem, the array may contain duplicates. Consequently, the previous approach will not work when arr[low] = arr[mid] = arr[high].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);

    if (nums[mid] === target) {
      return true;
    }
    if (nums[low] === nums[mid] && nums[mid] === nums[high]) {
      low += 1;
      high -= 1;
      continue;
    }
    //if left part is sorted:
    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target <= nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (nums[mid] <= target && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return false;
};
