let arr=[1,3,5,7];
let id=0
function appendArr(arr,index){
    if(arr[0]!=1){
        return 0
    }
    for(let item of arr){
        index=item;
        if(!arr.includes(item+1)){
            break;
        }
    }
    return index
}


console.log(appendArr(arr,0));