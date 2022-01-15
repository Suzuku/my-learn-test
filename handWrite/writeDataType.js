// 手写一个返回数据类型的函数

function dataType(param){
    if(typeof param !=='object'){
        return (typeof param)
    }
     let paramResult=Object.prototype.toString.call(param)
     let result=paramResult.slice(8,paramResult.length-1)
     return result
}

console.log(dataType(()=>{
    
}))