// 手写一个Iterator  采用闭包,能访问到外层的index 写起来很简单 核心是调用next()方法

function myIterator(array){
    let index=-1
    return {
        next(){
            index++
            return (array[index]!==undefined)?{value:array[index],done:false}:{value:undefined,done:true}
        }
    }
}

let iterator=myIterator([1,2,3])

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());