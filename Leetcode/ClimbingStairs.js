/* 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
注意：给定 n 是一个正整数。 */
// 找到状态转移方程 后 考虑缓存数据 减少时间复杂度

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let arr = []
    arr[0] = 1
    arr[1] = 2
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[n - 1]
}
