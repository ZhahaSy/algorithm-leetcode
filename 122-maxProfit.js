// 买卖股票的最佳时机II
/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let dp = new Array(prices.length).fill(0).map(() => new Array(2))

    dp[0][0] = 0
    dp[0][1] = -prices[1]

    for(let i = 1; i<prices.length;i++) {
        // 当前阶段卖出的最大收益：前一阶段持有的最大收益 与 前一阶段卖出的最大收益 + 当前阶段买入的最大收益
        dp[i][0] = Math.max(dp[i - 1][1], dp[i-1][0] + prices[i]);
        // 当前阶段买入的最大收益：前一阶段卖出的最大收益 与 前一阶段买入的最大收益 - 当前阶段买入的最大收益
        dp[i][1] = Math.max(dp[i - 1][0], dp[i-1][1] - prices[i]);
    }
    return dp[prices.length - 1][0]
};
