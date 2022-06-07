/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} heightArr
 * @return {number}
 */
// 此方法时间复杂度为n2 执行大用例直接内存溢出
// var maxArea = function (heightArr) {
//     // 经典木桶效应，所以需要找一个下标越大且最小值越高的点
//     const end = 1;
//     const result = [];
//     for (let i = 0; i < heightArr.length; i++) {
//         for (let j = 1; j < heightArr.length; j++) {
//             result.push(Math.min(heightArr[i], heightArr[j]) * Math.abs(j - i));
//         }
//     }
//     return Math.max(...result)
// };

var maxArea = function (heightArr) {
    // 经典木桶效应，所以需要找一个下标越大且最小值越高的点
    let start = 0;
    let end = heightArr.length - 1;
    // 存储最大值
    let maxV = 0;
    while (start !== end) {
        // 贪心算法
        let max = Math.min(heightArr[start], heightArr[end]) * Math.abs(end - start);
        if (max > maxV) {
            maxV = max;
        }
        if (heightArr[start] <= heightArr[end]) {
            start++;
        } else {
            end--;
        }
    }
    return maxV;
};
maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
maxArea([1, 1]);

// @lc code=end
