/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  /*
   *Initialize a variable k to 1. This variable represents the position where the next unique element should be placed.
   */
  let k = 1;
  //Start iterating over the array nums from the second element (index 1) using a pointer i.
  for (let i = 1; i < nums.length; i++) {
    //    Compare the current element nums[i] with the element at the position k-1 (the last unique element encountered so far).
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
//expected [0,1,2,3,4]
