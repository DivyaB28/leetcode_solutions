/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let ch = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = ch.length - 1;
  while (left < right) {
    if (ch[left] !== ch[right]) return false;
    left++;
    right--;
  }
  return true;
};
isPalindrome("A man, a plan, a canal: Panama");
