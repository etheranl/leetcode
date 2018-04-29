/**
 * @author etheranl-haoran
 * @email imhaoran.wang@foxmail.com
 * @desc https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0,
    min = prices[0]
  for (let i = 1; i < prices.length; i++) {
    let num = prices[i]
    min = Math.min(min, num);    // 记录最小值
    profit = Math.max(profit, num - min);  // 拿最小值之后可能产生的最大利润和已经产生的最大利润做比较
  }
  return profit
};

console.log(maxProfit([7, 2, 4, 6, 1, 3, 8]));
