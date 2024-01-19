/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  // for (let i = 0; i < letters.length; i++) {
  //     if (letters[i] > target) return letters[i];
  // }
  // return letters[0];
  // O(n)

  let left = 0,
    right = letters.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (letters[mid] <= target) left = mid + 1;
    else right = mid - 1;
  }
  if (left === letters.length) left = 0;
  return letters[left];
};
