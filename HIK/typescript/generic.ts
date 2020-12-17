// 泛型：把类型明确的工作推迟到创建对象或调用方法的时候才去明确的特殊的类型

// 参数和返回值类型 相同 泛型 <T>表达函数中的参数类型一致
function generic<T>(arg:T):T{
    console.log(arg);
    return arg
}
generic('string')

// 让参数和返回值都是一种类型的数组 如纯数字或者含对象
function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

loggingIdentity([4])