/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let mp = new Map();
  let freqNum = [];
  let result = [];
  nums.map((num) => {
    mp.set(num, (mp.get(num) || 0) + 1);
  });
  for (let [num, freq] of mp) {
    freqNum[freq] = (freqNum[freq] || new Set()).add(num);
  }
  for (let i = freqNum.length - 1; i >= 0; i--) {
    if (freqNum[i]) result.push(...freqNum[i]);
    if (result.length === k) break;
  }
  return result;
};
