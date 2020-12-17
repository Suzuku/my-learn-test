
//throw语句执行后，立即终止该函数的运行。并且在堆栈中寻找最近的一个catch()方法并抛出错误
async function getName(params) {  
  throw 'hello,world'
}

getName('233').then((result)=>{
  console.log(result)
}).catch(e=>{
  console.log(e)
})