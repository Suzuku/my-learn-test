/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 经典超出时间限制
// var threeSum = function (nums) {
//     // 试试经典暴力遍历
//     let result = [];
//     for (let i = 0; i < nums.length - 2; i++) {
//         for (let j = i + 1; j < nums.length - 1; j++) {
//             for (let k = j + 1; k < nums.length; k++) {
//                 // console.log(nums[i], nums[j], nums[k]);
//                 if (nums[i] + nums[j] + nums[k] === 0) {
//                     result.push([nums[i], nums[j], nums[k]]);
//                 }
//             }
//         }
//     }
//     // 数组去重数组
//     result = result.map((item) => item.sort());
//     let tempArr = [];
//     for (let i = 0; i < result.length-1; i++) {
//         for (let j = i + 1; j < result.length; j++)
//             if (result[i][0] === result[j][0] && result[i][1] === result[j][1] && result[i][2] === result[j][2] && !tempArr.includes(j)) {
//                 tempArr.push(j);
//             }
//     }
//     // 排序然后删
//     // console.log(result, tempArr);

//     tempArr = tempArr.sort((a, b) => a - b);
//     for (let i = tempArr.length - 1; i >= 0; i--) {
//         result.splice(tempArr[i], 1);
//     }
//     // console.log(result, tempArr);

//     return result;
// };

var threeSum = function (nums) {
    const sortArr = nums.sort((a, b) => a - b);
    let start = 0;
    let end = sortArr.length - 1;
    // console.log(sortArr);

    const result = [];
    // 使用双指针
    for (let i = 0; i < sortArr.length; i++) {
        // 查看题解后 添加一些边界判断可降低遍历次数
        if(sortArr[i]>0){
            return result
        }
        // 这里去重采用首元素不一致即可 优化方案
        // if(i>0 && sortArr[i]===sortArr[i-1]){
        //     continue
        // }
        start = i + 1;
        end = sortArr.length - 1;
        while (start < end) {
            // console.log('下标', i, start, end);
            // console.log('值', sortArr[i], sortArr[start], sortArr[end]);

            if (sortArr[i] + sortArr[start] + sortArr[end] === 0) {
                // 需要考虑数组去重 否则就需要在外部统一做掉
                // 这里去重可以进行优化
                if (!result.some((item) => item[0] === sortArr[i] && item[1] === sortArr[start])) {
                    result.push([sortArr[i], sortArr[start], sortArr[end]]);
                }
                start++;
            } else if (Math.abs(sortArr[i] + sortArr[start]) > sortArr[end]) {
                start++;
            } else {
                // 末尾指针前移
                end--;
            }
        }
    }
    // console.log(result);
    return result;
};
// @lc code=end
threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]);
threeSum([-1, 0, 1, 2, -1, -4]);
threeSum([]);
threeSum([0, 0, 0]);
threeSum([-2, 0, 1, 1, 2]);
threeSum([3, 0, -2, -1, 1, 2]);
threeSum([0, 0, 0, 0]);
