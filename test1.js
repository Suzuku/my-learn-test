
'use strict'


//使用扩展运算符结合解构赋值输出参数序列
let first=[1,2,3];
let second=[4,5,6]


let arr=[...first,...second];

console.log(...arr)


//最简单的实现两个数组交换值的做法
let [arr1,arr2]=[first,second];
 [first,second]=[arr2,arr1];
console.log(first)