// 手写 promise.race
/* 
Promise.race(iterable) 方法返回一个 promise，一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝。 */

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
Promise.myRace = function (promiseList) {
    return new Promise((resolve, reject) => {
        promiseList.forEach((item) => {
            item()
                .then((value) => {
                   resolve(value)
                })
                .catch((error) => {
                    reject(error);
                });
        });
    });
};

Promise.myRace([promiseTest1, promiseTest2]).then((value)=>{
    console.log('success',value)
}).catch((error)=>{
    console.log('error',error);
})
