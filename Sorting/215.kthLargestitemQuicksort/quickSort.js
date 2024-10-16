/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return quickSort(nums, 0, nums.length - 1, k);
};

function quickSort(nums, leftIndex, rightIndex, k) {
  let pivotIndex = partition(nums, leftIndex, rightIndex);

  if (k < nums.length - pivotIndex) {
    return quickSort(nums, pivotIndex + 1, rightIndex, k);
  } else if (k > nums.length - pivotIndex) {
    return quickSort(nums, leftIndex, pivotIndex - 1, k);
  }
  return nums[pivotIndex];
}

function partition(nums, leftIndex, rightIndex) {
  const pivot = nums[rightIndex];
  let l = leftIndex,
    r = rightIndex - 1;

  while (l <= r) {
    while (nums[l] < pivot) {
      l++;
    }
    while (nums[r] > pivot) {
      r--;
    }

    if (l <= r) {
      swap(nums, l, r);
      l++;
      r--;
    }
  }
  swap(nums, l, rightIndex);
  return l;
}

function swap(nums, l, r) {
  let temp = nums[l];
  nums[l] = nums[r];
  nums[r] = temp;
}
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
