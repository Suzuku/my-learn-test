// 避免回调地狱 采用promise.then()
const https = require('https');

function httpPromise(url){
  return new Promise(function(resolve,reject){
    https.get(url, (res) => {
      resolve(data);
    }).on("error", (err) => {
      reject(error);
    });
  })
}

httpPromise().then(function(data){
}).catch(function(error){})

// 实际上还是嵌套
httpPromise(url1)
    .then(res => {
        console.log(res);
        return httpPromise(url2);
    })
    .then(res => {
        console.log(res);
        return httpPromise(url3);
    })
    .then(res => {
      console.log(res);
      return httpPromise(url4);
    })
    .then(res => console.log(res));