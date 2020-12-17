
// test14,15对象浅拷贝的字面量赋值
let obj={
    a:33
}

let obj2=[{
    a:22
}]

obj=obj2
obj={
    b:33
}

console.log(obj,obj2);