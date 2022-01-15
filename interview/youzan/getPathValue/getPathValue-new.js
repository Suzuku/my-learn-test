/**
 * ## 问题2
 * 实现 getValue 函数来获取path对应的值
 */

var object = { a: [{ b: { c: 3 } }] }; // path: 'a[0].b.c'
var array = [{ a: { b: [1] } }]; // path: '[0].a.b[0]'
var array2 = [{ p: [12, { l: 22, t: 44 }, 44] }];

function getValue(obj, path, defaultValue) {
  let pathArr = path.split('.')
  let result = []
  for(let item of pathArr){
    // 当包含[]形式的时候 需要拆成两个元素
    if(item)
  }
}
console.log(getValue(object, 'a[0].b.c', 0)); // 输出3
console.log(getValue(array, '[0].a.b[0]', 12)); // 输出 1
// console.log(getValue(array, '[0].a.b[0].c', 12)); // 输出 12
// console.log(getValue(array2, '[0].p[1].l', 12));
