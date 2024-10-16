/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations.sort((a, b) => b - a);

  let left = 0,
    right = citations.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (citations[mid] === mid + 1) {
      return mid + 1;
    } else if (mid < citations[mid]) left = mid + 1;
    else right = mid - 1;
  }
  return left;
};
