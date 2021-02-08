/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (arr) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.get(arr[i]) >= 0) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }
    for (let [key, value] of map.entries()) {
        if (value === 1) {
            return key;
        }
    }
};

console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([2,2,1]));

// @lc code=end
