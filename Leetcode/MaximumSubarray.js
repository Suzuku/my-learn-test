// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 注意  只需要返回最大和 不需要返回该子序列

function sumary(arr) {
    let sum = 0
    let result = []
    let maxSub = -213333
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (sum <= 0) {
            sum = 0
        } else {
            result.push(sum)
        }
    }
    // 如果result为空 那么说明arr里应该全为负数  那么直接找arr里的最大单值即可
    if (result.length > 0) {
        for (let i = 0; i < result.length; i++) {
            if (maxSub <= result[i]) {
                maxSub = result[i]
            }
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (maxSub <= arr[i]) {
                maxSub = arr[i]
            }
        }
    }

    return maxSub
}

console.log(sumary([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(sumary([-2, -3, -1]))
console.log(sumary([5]))
