/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let pairCount = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === nums[i]) pairCount++;
    }
  }
  return pairCount;
};

// Big- O : O(2^n) -> not good solution

// Hint 1
// Count how many times each number appears. If a number appears n times, then n * (n – 1)
// 2 good pairs can be made with this number.

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let goodPair = new Map();
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (goodPair.get(nums[i])) {
      goodPair.set(nums[i], goodPair.get(nums[i]) + 1);
    } else {
      goodPair.set(nums[i], 1);
    }
  }
  goodPair.forEach((value) => {
    count += (value * (value - 1)) / 2;
  });
  return count;
};
