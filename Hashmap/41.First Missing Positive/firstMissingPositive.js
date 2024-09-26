const firstMissingPositive = function (nums) {
  const n = nums.length;

  // Step 1: Place each number in its correct index position
  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
      // Swap nums[i] with nums[nums[i] - 1]
      let temp = nums[i];
      nums[i] = nums[nums[i] - 1];
      nums[temp - 1] = temp;
    }
  }

  // Step 2: Find the first index where the number is incorrect
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  // If all positions are correct, the smallest missing positive integer is n + 1
  return n + 1;
};
