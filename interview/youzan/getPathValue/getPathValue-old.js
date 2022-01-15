/**
 * ## 问题2
 * 实现 getValue 函数来获取path对应的值
 */

var object = { a: [{ b: { c: 3 } }] }; // path: 'a[0].b.c'
var array = [{ a: { b: [1] } }]; // path: '[0].a.b[0]'
var array2 = [{ p: [12, { l: 22, t: 44 }, 44] }];
function getValue(obj, path, defaultValue) {
  // coding...
  let splitArr = path.split('.');
  let strResultTotal = [];
  for (let [index, item] of splitArr.entries()) {
    if (item.indexOf('[') !== -1) {
      let strResult = item.split('[');
      if (strResult[0] !== '') {
        strResultTotal.push(strResult[0]);
      }
      for (let i = 1; i < strResult.length; i++) {
        strResult[i] = strResult[i].replace(']', '');
        strResultTotal.push(strResult[i]);
      }
    } else {
      strResultTotal.push(item);
    }
  }
  let result = [];
  result[0] = obj[strResultTotal[0]];
  for (let [index, item] of strResultTotal.entries()) {
    console.log(strResultTotal, result[index], strResultTotal[index + 1], result[index][strResultTotal[index + 1]]);
    if (typeof result[index] === 'object' && result[index][strResultTotal[index + 1]]) {
      result[index + 1] = result[index][strResultTotal[index + 1]];
    } else if (typeof result[index] !== 'object' && !strResultTotal[index + 1]) {
      return result[index];
    } else {
      return defaultValue;
    }
  }
  return result[result.length - 1];
}

console.log(getValue(object, 'a[0].b.c', 0)); // 输出3
console.log(getValue(array, '[0].a.b[0]', 12)); // 输出 1
console.log(getValue(array, '[0].a.b[0].c', 12)); // 输出 12
console.log(getValue(array2, '[0].p[1].l', 12));
