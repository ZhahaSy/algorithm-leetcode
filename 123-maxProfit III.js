// 买卖股票的最佳时机III
/**给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii
**/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    // let dp = [
    //     // 持有
    //     [
    //         [
    //             // 前一天未持有，今天持有
    //             // 前一天持有，今天依旧持有（前一天的收益）
    //         ]
    //     ],
    //     // 未持有
    //     [
    //         // 前一天未持有，今天未持有 （不买不卖）
    //         // 前一天持有，今天未持有 （卖出）
    //     ]
    // ]

    /** 每一天都 计算 一下四种情况的最大值
     * 买入一次，
     * 卖出一次，
     * 买入两次，
     * 卖出两次 
    **/ 

    
};