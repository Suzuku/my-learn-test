// 手写 promise.all
/* 
Promise.all() 方法接收一个promise的iterable类型（注：Array，Map，Set都属于ES6的iterable类型）的输入，并且只返回一个Promise实例，
 那个输入的所有promise的resolve回调的结果是一个数组。
这个Promise的resolve回调执行是在所有输入的promise的resolve回调都结束，或者输入的iterable里没有promise了的时候。
它的reject回调执行是，只要任何一个输入的promise的reject回调执行或者输入不合法的promise就会立即抛出错误，并且reject的是第一个抛出的错误信息。 */

async function promiseTest1() {
    return new Promise(async (resolve, reject) => {
        setTimeout(() => {
            resolve("promiseTest1");
            console.log("promiseTest1");
        }, 2000);
    });
}

async function promiseTest2() {
    return new Promise(async (resolve, reject) => {
        setTimeout(() => {
            resolve("promiseTest2");
            console.log("promiseTest2");
        }, 3000);
    });
}

async function promiseTest3() {
    return new Promise(async (resolve, reject) => {
        setTimeout(() => {
            reject("promiseTest3");
            console.log("promiseTest3");
        }, 1000);
    });
}
Promise.myAll = function (promiseList) {
    let successNum = 0;
    let totalNum = promiseList.length;
    return new Promise((resolve, reject) => {
        promiseList.forEach((item) => {
            item()
                .then(() => {
                    successNum++;
                    if (successNum === totalNum) {
                        resolve(promiseList);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    });
};

Promise.myAll([promiseTest1, promiseTest2,promiseTest3]).then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log('error',error);
})
