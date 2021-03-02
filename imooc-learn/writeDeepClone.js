// 手写深拷贝 实现一个传参为对象（数组） 返回一个深拷贝后的对象（数组）
// 由于对象的属性值仍可能为对象 故需要使用递归

function myDeepClone(obj) {
    // 初始化返回值
    if (typeof obj !== 'object') {
        return obj
    }
    let copy
    if (Array.isArray(obj)) {
        copy = []
        copy = obj.concat()
    } else {
        copy = new Object()
        Object.keys(obj).forEach((prop) => {
            if (typeof obj[prop] === 'object') {
                copy[prop] = myDeepClone(obj[prop])
            } else {
                // 单纯是值的话
                copy[prop] = obj[prop]
            }
        })
    }

    return copy
}

let testObj = { a: 33, b: 44, c: [12, 3, 4] }
let deep = myDeepClone(testObj)
testObj.t = [33, 2]
console.log(testObj, deep)
