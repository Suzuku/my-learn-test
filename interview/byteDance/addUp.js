/* 
funciton add(a,b)=>Promise.resolve(a+b)
实现 function addUp(arr)  累加返回结果
 */

function add(a,b){
    return Promise.resolve(a+b)
}

function addUp(arr){
    arr.reduce((total,num)=>{
        return total+num
    })
}
