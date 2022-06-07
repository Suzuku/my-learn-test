/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const arr = s.split('');
    let tempArr = [];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!tempArr.includes(arr[i])) {
            // 没有则输入
            tempArr.push(arr[i]);
        } else {
            // 有则说明存在重复的，需要清空map并将结果添加到result数组里最后进行比较
            result.push(tempArr.length);
            // 需要解决不连续重复的问题
            const index = tempArr.findIndex((ele) => ele === arr[i]);
            const ctrlArr = [];
            for (let i = index + 1; i < tempArr.length; i++) {
                ctrlArr.push(tempArr[i]);
            }
            tempArr = ctrlArr;
            tempArr.push(arr[i]);
        }
    }
    // 需要最后再添加一次不然会少一个
    if (tempArr.length > 0) result.push(tempArr.length);
    // 这里不要用排序 因为sort()默认使用快排是nlogn 实际上用n的求最大值即可
    return result.length > 0 ? Math.max(...result) : 0;
};
// @lc code=end
lengthOfLongestSubstring('pwwkew');
lengthOfLongestSubstring('s');
lengthOfLongestSubstring('dvdf');
