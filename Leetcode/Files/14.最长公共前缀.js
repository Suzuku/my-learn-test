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
var longestCommonPrefix = function (strs) {
    let result = []
    let successNumArr = []
    for (let i = 0; i < strs.length - 1; i++) {
        console.log(strs[i], strs[i + 1])

        for (let j = 0; j < strs[i].length; j++) {
            successNumArr[j] = 0
            if (strs[i][j] === strs[i + 1][j]) {
                successNumArr[j]++
            }
        }

        // if (successNumArr === strs.length - 1) {
        //     result.push(strs[i][0])
        // }
        console.log(successNumArr)
    }

    console.log(result)
}
longestCommonPrefix(['flower', 'flow', 'flight'])
// @lc code=end
