const productExceptSelf = (nums) => {
  let answer = Array(nums.length).fill(1);
  let leftProduct = 1;
  for (let i = 0; i < nums.length; i++) {
    answer[i] = leftProduct;
    leftProduct *= nums[i];
  }

  let rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] *= rightProduct;
    rightProduct *= nums[i];
  }
  return answer;
};
console.log(productExceptSelf([1, 2, 3, 4]));
