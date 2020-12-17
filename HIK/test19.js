// 对象中删除某一属性

let obj = { a: 22, b: 33, c: 44 };

obj['b'] = undefined;

console.log(obj);

let obj2 = { a: 22, b: 33, c: 44 };

delete obj2.b;
console.log(obj2);
