// 买卖股票的最佳时机I
/**
 * @param {number[]} prices
 * @return {number}
 */

 var maxProfit = function(prices) {
    let max = 0;
    let min = prices[0]
    for(let i = 0; i<prices.length; i++) {
        max = Math.max(max, prices[i] - min)
        min = Math. min(min, prices[i])
    }
    return max
};
