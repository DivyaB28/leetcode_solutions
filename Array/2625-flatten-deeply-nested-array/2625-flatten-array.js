/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  let res = [];
  let flattering = (nums, l) =>
    nums.forEach((num) => {
      if (Array.isArray(num) && l > 0 && l <= n) {
        flattering(num, l - 1);
      } else {
        res.push(num);
      }
    });
  flattering(arr, n);
  return res;
};
