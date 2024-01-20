/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    // if mid is less then mid + 1 then we are in upside of mountain, so left is set to mid + 1
    if (arr[mid] < arr[mid + 1]) left = mid + 1;
    //if mid is greater then mid + 1 then we are in downside of mountain, so right is set to mid
    else right = mid;
  }
  return right;
};
