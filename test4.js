//使用async函数实现异步操作
async function getPromise() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve();
    }, 3000)
  })
}
async function getName(params) {
  await getPromise();
  console.log(params)
}

getName('233')