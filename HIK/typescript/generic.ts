// 泛型：把类型明确的工作推迟到创建对象或调用方法的时候才去明确的特殊的类型

// 参数和返回值类型 相同 泛型 <T>表达函数中的参数类型一致
function generic<T>(arg: T): T {
    console.log(arg)
    return arg
}
generic('string')

// 让参数和返回值都是一种类型的数组 如纯数字或者含对象
function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length) // Array has a .length, so no more error
    return arg
}

loggingIdentity([4])

// 约束泛型
// 上例中，泛型 T 不一定包含属性 length，我们可以给他传入任意类型，当然有些不包括 length 属性，那样就会报错

interface IWithLength {
    length: number
}
function echoWithLength<T extends IWithLength>(arg: T): T {
    console.log(arg.length)
    return arg
}
// 对象 字符串 数组均有length属性 而数字没有所以报错
echoWithLength('str')
const result3 = echoWithLength({ length: 10 })
echoWithLength(10)
