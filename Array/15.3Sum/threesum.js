/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
 * Brute Force
 */
var threeSum1 = function (nums) {
  let ans = [],
    n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let temp = [nums[i], nums[j], nums[k]];
          temp.sort((a, b) => a - b);
          ans.push(temp);
        }
      }
    }
  }

  let st = new Set(ans.map(JSON.stringify));
  ans = Array.from(st).map(JSON.parse);
  return ans;
};

// O(N3 * log(no. of unique triplets))

/*
 * Intuition
 */

const threeSum2 = (nums) => {
  let n = nums.length,
    ans = [];

  for (let i = 0; i < n; i++) {
    let hashset = new Set();
    for (let j = i + 1; j < n; j++) {
      let third = -(nums[i] + nums[j]);

      if (hashset.has(third)) {
        let temp = [nums[i], nums[j], third];
        temp.sort((a, b) => a - b);
        ans.push(temp);
      }

      hashset.add(nums[j]);
    }
  }
  let set = new Set(ans.map(JSON.stringify));
  ans = Array.from(set).map(JSON.parse);
  return ans;
};

/**
 * Time Complexity: O(N2 * log(no. of unique triplets)),
 */

const threeSum3 = (nums) => {
  let ans = [],
    n = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    // remove duplicates
    if (i !== 0 && nums[i - 1] === nums[i]) continue;

    let j = i + 1,
      k = n - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        let temp = [nums[i], nums[j], nums[k]];
        ans.push(temp);
        j++;
        k--;

        while (j < k && nums[j] === nums[j - 1]) j++;
        while (j < k && nums[k] === nums[k + 1]) k--;
      }
    }
  }
  return ans;
};

/**
 * Time Complexity: O(NlogN)+O(N2), where N = size of the array.
Reason: The pointer i, is running for approximately N times. And both the pointers j and k combined can run for approximately N times including the operation of skipping duplicates. So the total time complexity will be O(N2). 

Space Complexity: O(no. of quadruplets), This space is only used to store the answer. We are not using any extra space to solve this problem. So, from that perspective, space complexity can be written as O(1).
 */
