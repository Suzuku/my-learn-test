// 找到状态转移方程 后 考虑缓存数据 减少时间复杂度

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let arr=[]
    arr[0]=1
    arr[1]=2
    for(let i=2;i<n;i++){
        arr[i]=arr[i-1]+arr[i-2]
    }
    return arr[n-1]
};

