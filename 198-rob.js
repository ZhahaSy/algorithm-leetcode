/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    // [1,2,3,1]
    // 最终结果：盗窃当前房屋的最高的盗窃金额, 
    // 寻找变量：盗窃 / 不盗窃 ？
    // 0 : 代表盗窃   1 代表不盗窃

    /* 
        这件屋子 金额为 1
        盗窃： 1
        不盗窃： 0
    */
    /* 
        这件屋子 金额为 2
        盗窃： 当前天盗窃 + 前一天不盗窃  2 + 0 = 2
        不盗窃： 前一天的盗窃最大值 1
    */
    /* 
        这件屋子 金额为 3
        盗窃： 当前天盗窃 + 前一天不盗窃  3 + 1 = 4
        不盗窃： 前一天的盗窃最大值 2
    */

    /* 
        这件屋子 金额为 1
        盗窃： 当前天盗窃 + 前一天不盗窃  1 + 2 = 3
        不盗窃： 前一天的盗窃最大值 4
    */

    /* 
    const len = nums.length

    let dp = [
        [nums[0], 0]
    ]

    for(let i = 1; i < len; i++) {
        dp[i] = [
            nums[i] + dp[i - 1][1],
            dp[i - 1][0]
        ]
    }

    return Math.max(...dp[len - 1])
     */


    // 上述方案会有一个 问题，
    // 无法判断出多个间断的情况。
    // [2,1,1,2]
    // 最终结果：盗窃当前房屋的最高的盗窃金额, 
    // 寻找变量：盗窃 / 不盗窃 ？
    // 0 : 代表盗窃   1 代表不盗窃
    /* 
        这件屋子 金额为 2
        盗窃： 2
        不盗窃： 0
    */
     /* 
        这件屋子 金额为 1
        盗窃： 1 今天盗窃，前一天必须不盗窃
        不盗窃： 当前天不盗窃时， 前一天可以盗窃，也可以不盗窃
          前一天  2
            盗窃  2
            不盗窃 0
    */
    /* 
        这件屋子 金额为 1
        盗窃： 2 + 1 今天盗窃，前一天必须不盗窃  3
        不盗窃： 当前天不盗窃时， 前一天可以盗窃，也可以不盗窃
          前一天  2
            盗窃  2
            不盗窃 0
    */
    /* 
        这件屋子 金额为 2
        盗窃： 4
        不盗窃： 当前天不盗窃时， 前一天可以盗窃，也可以不盗窃
          前一天 
            盗窃  3
            不盗窃 2
    */
    
    const len = nums.length
    let dp = [
        [nums[0], 0]
    ]
    for(let i = 1; i < len; i++) {
        dp[i] = [
            nums[i] + dp[i - 1][1],
            Math.max(dp[i - 1][0], dp[i - 1][1])
        ]
    }
    return Math.max(...dp[len - 1])
};
