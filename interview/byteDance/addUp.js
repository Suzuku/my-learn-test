/* 
funciton add(a,b)=>Promise.resolve(a+b)
实现 function addUp(arr)  累加返回结果
 */

function add(a,b){
    return Promise.resolve(a+b)
}

async function addUp(arr){
    let total=0
    // let res=await addUp(total,arr[0])
    for(let i=0;i<arr.length;i++){
        total=await add(total,arr[i])
        console.log(total);
    }
    return total
}

console.log(addUp([1,2,3,4]).then((value)=>{console.log(value);}));
