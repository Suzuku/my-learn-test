/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  // 先定义一个map
  const data = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  const arr = digits.split('');
  const tempArr = [];
  for (let i = 0; i < arr.length; i++) {    
    if (data[arr[i]] && data[arr[i]].length > 0) {
      tempArr.push(data[arr[i]]);
    }
  }
  console.log(tempArr);
  
};
// @lc code=end
letterCombinations('23')
letterCombinations('')
letterCombinations('2')