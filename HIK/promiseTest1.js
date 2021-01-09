async function promiseTest1(){
    return new Promise(async(reslove,reject)=>{
        setTimeout(() => {
            reslove('promiseTest1')
        }, 2000);
    })
}

async function promiseTest2(){
    return new Promise(async(reslove,reject)=>{
        setTimeout(() => {
            // reject('promiseTest2')
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

main()