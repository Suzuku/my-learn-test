/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
let arr=[]
let result=[]
for(let i=0;i<strs.length;i++){
    arr[i]=strs[i].split('')
}
console.log(result)
};
longestCommonPrefix(["flower","flow","flight"])
// @lc code=end

