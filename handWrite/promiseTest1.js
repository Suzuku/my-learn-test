/* 这个 await 关键字很绝，它的意思就是“我要异步了，可能会花点时间，后面的语句都给我等着”。
当我们给 httpPromise(url1) 这个异步任务应用了 await 关键字后，
整个函数会像被“yield”了一样，暂停下来，直到异步任务的结果返回后，它才会被“唤醒”，继续执行后面的语句。 */
async function promiseTest1(){
    return new Promise(async(resolve,reject)=>{
        setTimeout(() => {
            resolve('promiseTest1')
            console.log('promiseTest1');
        }, 2000);
    })
}

async function promiseTest2(){
    return new Promise(async(resolve,reject)=>{
        setTimeout(() => {
            resolve('promiseTest2')
            console.log('promiseTest2');
        }, 3000);
    })
}

async function main(){
    try {
        await promiseTest1()
        await promiseTest2()
        console.log(233);
    } catch (error) {
        console.log(error);
    }

}
// 首先输出object，然后过2s输出promiseTest1，再过3s输出promiseTest2，最后输出233
// 证明async函数中await是严格同步的，是generator函数的语法糖 相当于yield 停顿  


main()
console.log(`object`);