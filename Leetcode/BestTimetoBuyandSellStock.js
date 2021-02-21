/* 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // 买入和卖出的价格分别记为
    let min = prices[0]
    let max = prices[0]
    let arr = []
    for (i = 1; i < prices.length; i++) {
        // 边界值要注意  不能取等于 因为会让max变成0  从而让真正的min过不去
        // 而且必须大于min才能赋值max 不然当max为0的时候 过不去
        if (prices[i] > max && prices[i] > min) {
            max = prices[i]
        } else if (prices[i] < min) {
            arr.push(max - min)
            min = prices[i]
            max = 0
        }
    }
    arr.push(max - min)
    console.log(arr)

    let result = Math.max(...arr)
    if (result > 0) {
        return result
    } else {
        return 0
    }
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))
console.log(maxProfit([4, 2, 1, 7]))
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]))
