
//测试async函数的try catch结构  es6推荐写法
async function getarr(arr,params) {
    arr.push(params)
    // throw 'new error'
}

async function tryr() {
  let arr=[];
  try {
    await getarr(arr,1);
    console.log(arr)
  } 
  catch (error) {
    console.log(error)
  }
}
tryr();
