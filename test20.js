//原生Promise的错误处理机制
const t=new Promise((resolve,reject)=>{
  Promise.reject(2)
})

t.then(()=>{
  console.log(2);
}).catch((e)=>{
  console.log(e);
})