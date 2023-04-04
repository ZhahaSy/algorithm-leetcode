/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function (coins, amount) {
    // 变量为 剩余金额 内层为使用币额
    // 每一次的结果都是 在剩余i元金额的时候 使用不同面额 硬币 所需要的数量

    // 当剩余金额为0的时候；
    // 只需要 0 个硬币
    // 当剩余金额为1的时候；
    // 需要 1 个1；求解方程为：1 - 1 = 0；

    // 当剩余金额为 2 的时候；
    // 需要2个1；求解方程为： 2 - 1 - 1 = 0
    // 或
    // 需要1个2 求解方程为：2 - 2 = 0

    // 求出当前的 最小硬币数位 1; 
    // 当剩余金额 为 3  
    /**
        已知之前的硬币金额 - 1的最小硬币数位 1 所以本次的硬币数应为 
        上一次的最小硬币数 + （当前剩余硬币金额 - 上一次剩余金额）所得出的 首次的硬币金额
    */
    // 当剩余金额 为 4 同三的逻辑
    // 得出剩余金额为4时，最小硬币数为2

    // 当剩余金额 为 5
    // 需要遍历三种情况
    // 使用1 2 + 1 = 3
    // 使用2 4 + 2 > 5 ? -1
    // 使用5  -1


    // i代表剩余金额数，当金额为 0 时，所需最少硬币数亦为 0 直接设置默认值并跳过

    if (amount === 0) return 0
    let dp = new Array(amount).fill(-1)
    for (let i = 1; i <= amount; i++) {

        let coinsNums = [];
        for (let j = 0; j < coins.length; j++) {
            let coinAmount = coins[j];

            if (i - coinAmount === 0) {
                // 去除完了
                coinsNums.push(1)
            }
            if (i - coinAmount > 0) {
                //有剩余
                coinsNums.push(dp[i - coinAmount] + 1)
            }

        }
        dp[i] = Math.min(...coinsNums)

    }
    if (dp[dp.length - 1] === 0 && amount > 0) return -1
    return isFinite(dp[dp.length - 1]) ? dp[dp.length - 1] : -1

};


