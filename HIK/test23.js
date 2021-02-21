// es8 Object.values()  map不能用 因为他是迭代器结构 对象自身可枚举属性的键值对

let obj = {
    a: 23,
    b: 33,
}
let map = new Map(['a', 44], ['b', 55])
console.log(Object.values(obj))
console.log(Object.values(map))
