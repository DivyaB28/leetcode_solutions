/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let left = 0,
    right = 1,
    maxProfit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
    } else {
      left = right;
    }
    right++;
  }
  return maxProfit;
};
maxProfit([7, 1, 5, 3, 6, 4]);

var maxProfitSolution2 = function (prices) {
  let buy = prices[0],
    profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
    }
    profit = Math.max(profit, prices[i] - buy);
  }
  return profit;
};
