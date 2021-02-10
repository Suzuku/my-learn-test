/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (arr, target) {
    let map = new Map();
    for (i = 0; i < arr.length; i++) {
        if (map.has(target - arr[i])) {
            return [map.get(target - arr[i]),i]
        } else {
            map.set(arr[i], i);
        }
    }
};
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3,3],6));
console.log(twoSum([3,2,4],6));
// @lc code=end
