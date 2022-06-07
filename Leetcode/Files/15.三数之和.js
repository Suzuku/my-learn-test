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
var threeSum = function (nums) {
    // 试试经典暴力遍历
    let result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                console.log(nums[i], nums[j], nums[k]);
                if (nums[i] + nums[j] + nums[k] === 0 && !result.some((item) => item.includes(nums[i]) && item.includes(nums[j]) && item.includes(nums[k]))) {
                    result.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }
    console.log(result);
    return result;
};

// @lc code=end
threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]);
