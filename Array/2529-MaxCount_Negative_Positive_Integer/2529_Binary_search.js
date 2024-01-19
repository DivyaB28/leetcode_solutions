/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  let [l, h, pos, neg] = [0, nums.length - 1, 0, 0];
  //loop to find positives from right side of mid
  while (h >= l) {
    let mid = Math.floor(l + (h - l) / 2);

    if (nums[mid] > 0) {
      pos += h - mid + 1;
      h = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  l = 0;
  h = nums.length - 1;
  //loop to find negatives from left side of mid
  while (h >= l) {
    let mid = Math.floor(l + (h - l) / 2);

    if (nums[mid] < 0) {
      neg += mid - l + 1;
      l = mid + 1;
    } else {
      h = mid - 1;
    }
  }
  return Math.max(pos, neg);
};
