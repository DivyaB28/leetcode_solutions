/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let returnArr = [...nums];
  for (let i = 0; i < nums.length; i++) {
    returnArr.push(nums[i]);
  }
  return returnArr;
};
