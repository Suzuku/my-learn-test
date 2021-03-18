/**
 * ## 问题3
 * 对数组做去重
 * 
 * @example
 * [1,'1',1]                            -> [1,'1']
 * [{a: 1}, {b: 1}, {a: 1}]             -> [{a: 1}, {b: 1}]
 * [{a: 1, b: 2}, {b: 1}, {a: 1, b: 2}] -> [{a: 1, b: 2}, {b: 1}]
 * [[1, {a: 1}], [2], [3], [1, {a: 1}]] -> [[1, {a: 1}], [2], [3]]
 * [{a: 1, b: 2}, {b: 1}, {b: 2, a: 1}] -> [{a: 1, b: 2}, {b: 1}]
 */
let resArr = []
function uniqueArray(array) {
    // coding...

}


console.log(uniqueArray([1, '1', 1]))
// [1,'1']
console.log(uniqueArray([{ a: 1, b: 2 }, { b: 1 }, { b: 2, a: 1 }]))
// [{a: 1, b: 2}, {b: 1}]