/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // let reverse = 0;
  // let copy = x;

  // while (copy > 0) {
  //     reverse = (reverse * 10) + (copy % 10);
  //     copy = Math.trunc(copy / 10);
  // }
  // return reverse == x;

  let valueStr = x.toString();
  let length = valueStr.length - 1;
  for (let i = 0; i < length / 2; ++i) {
    if (valueStr[i] !== valueStr[length - i]) return false;
  }
  return true;
};
