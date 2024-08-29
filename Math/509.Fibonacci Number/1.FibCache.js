/**
 * @param {number} n
 * @return {number}
 */

let cache = new Map();
var fib = function (n) {
  if (cache.get(n)) {
    return cache.get(n);
  }
  if (n < 2) {
    return n;
  }
  let result = fib(n - 1) + fib(n - 2);
  cache.set(n, result);
  return result;
};
