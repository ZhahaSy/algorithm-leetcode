// 01背包问题
// 有 n 件物品和一个最多能背重量为 w 的背包。第i件物品的重量是 weight[i]，
// 得到的价值是 value[i] 。每件物品只能用一次，求解将哪些物品装入背包里物品价值总和最大。

function getMaxValue(values, weights, maxWeight) {

    // 使用双侧循环, 外层循环用来确认当前的起始位置，内层循环用来获取从起始位置到最后一个能装的最大值
    // 每次在第二层循环开始前，先定义出来 以下两个变量
    /*
        preW， 代表上次循环后的，最大利益所需要的最大重量.也可以理解为上次如果不
        preV。代表上次循环后的最大价值
        preUnAddW
        preUnAddV
        判断逻辑如下
            if weights[j] + preW > maxWeight； 不执行放入操作
            如果小于或等于 
            直接放入会导致错过后面价值更大的数据， 所以需要涉及4种可能性
            1： 上次放入，本次不放
            2：上次放入，本次放
            3：上次不放，本次不放，
            4：上次不放， 本次放，

        方案行不通， 因为 无法确认 preW 和 preV的值如何复制，因为还要考虑后面的 情况。
    */ 

    // 使用动态规划
    // 已知最终结果为 价值。 所以最内层数组需要保留的是数组的  最大价值
    //  确认变量为 每一个物品 （确定的）。是否放入, 背包的容量 这两个有争议
    // dp数组结构如下 [[0,1]]
    // 如果使用是否放入变量 0为不放 1为放 动态转换方程 逻辑如下
    // dp[0]的值可以确认。 +第一个物品的价值，0
    // 第二的物品，需要判断是否存在，有以下四种状态
    /*
    1： 上次放入，本次不放
    3：上次不放，本次不放
     2：上次放入，本次放，
    4：上次不放， 本次放，

        dp[1][0] = Math.max(dp[0][1], dp[0][0])
        dp[1][1] = Math.max(dp[0][1] + values[1], dp[0][0] + values[1])

         dp[1][0] = Math.max(dp[0][1], dp[0][0])
        dp[1][1] = Math.max(dp[0][1] + values[1], dp[0][0] + values[1])
    
    */ 


    let maxValue = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = i; j < values.length; j++) {
        }
    }
    
}

// console.log(getMaxValue(
//     [
//       15,
//       20,
//       30
//     ],
//     [
//       1,3,4
//     ],
//     4
//   ));

  console.log(getMaxValue(
    [15, 20, 30, 50, 40],[1, 3, 4, 6, 5],  8
  ));