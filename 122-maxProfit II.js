// 买卖股票的最佳时机II
/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let dp = [
        [
            0, // 未持有
            -prices[0] // 持有
        ]
    ]

    for(let i = 1; i < prices.length;i++) {
        dp[i] = [
            // 今天未持有
            Math.max(
                // 前天未持有
                dp[i-1][0],
                // 前一天持有
                dp[i-1][1] + prices[i],
            ),
            // 今天持有
            Math.max(
                // 前天未持有
                dp[i-1][0] - prices[i],
                // 前一天持有
                dp[i-1][1],
            )
        ]
    }
    return dp[prices.length - 1][0]
};