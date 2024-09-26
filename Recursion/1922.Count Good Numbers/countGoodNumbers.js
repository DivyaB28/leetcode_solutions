/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function (n) {
  n = BigInt(n);
  let mod = 1000000007n;
  let odd = n / 2n;
  let even = (n + 1n) / 2n;
  /*
    * Since there are 5 even numbers between 0-9
    there are 4 prime numbers between 0-9
    */
  return Number((pow(5n, even) * pow(4n, odd)) % mod);

  function pow(x, n) {
    if (n === 0n) {
      return 1n;
    }
    let temp = pow(BigInt(x), n / 2n);
    // if n is even then return (x^(n/2))^2
    if (n % 2n === 0n) {
      return (temp * temp) % mod;
    }
    // if n is odd then return (x^(n/2))^2 * x
    else {
      return (x * temp * temp) % mod;
    }
  }
};
/**
 * Time complexity: O(log(n))

Space complexity: O(log(n))
 */

/**
 * Problem: https://leetcode.com/problems/count-good-numbers/description/
 * solution: https://leetcode.com/problems/count-good-numbers/solutions/4836032/js-solution-by-bharadwaj/
 */

/**
 * Intuition
We know that every digit can have range 0 - 9.
In this range there are 5 even numbers and 4 prime numbers.
So, for every even position we have 5 options to fill it and for every odd position we have 4 options to fill it.
Approach
Let observe something for n = 5.
Options : 5 4 5 4 5
Position : 0 1 2 3 4
So, our answer will be (5 x 4) x (5 x 4) x 5
This can be seen as we have 20 options for every n/2 positions if we group positions in 2.
Since we are following 0-indexing ==> last position will be even for odd n and will have 5 options.

For even n we will have perfectly n/2 groups each having 20 options.

Thus we first find out 20^(n/2). If n is odd multiply it by 5. Then return.

For calculating power we will use recursive binary exponentiation.
 */
