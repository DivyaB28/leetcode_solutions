/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;
  nums.forEach((ele) => {
    if (i == 0 || i == 1 || nums[i - 2] !== ele) {
      nums[i] = ele;
      i++;
    }
  });
  return i;
};

removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]);
//expected [0,0,1,1,2,3,3]
