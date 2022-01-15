/* reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。

reduce() 方法有两个参数，第一个是回调函数，第二个是初始值 
arr.reduce(callback(accumulator, currentValue[,index[,array]])[, initialValue])
回调函数在数组的每个元素上执行。回调函数的返回值是累加结果，并作为下一次调用回调函数的参数提供。回调函数带有四个参数。
accumulator 累计器 ——累加器累加回调函数的返回值。
currentValue 当前值——处理数组的当前元素。
currentIndex 当前索引 （可选）
array 数组 （可选）
*/

Array.prototype.myReduce=function(callback){
   const sourceArr=this
   let total=null
   for(let item of sourceArr){
       total=callback(total,item)
       console.log(total,item);
   }
   return total
}

let testArr=[1,2,3,4,5]
console.log(testArr.myReduce((total,num)=>total+num));