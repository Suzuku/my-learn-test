let arr=[1,2,3,4,5,6,7,8,9]
let copy=arr.concat()


function aa(){
    for(let i=0;i<copy.length;i++){
        setTimeout(()=>{
            arr.splice(0,1)
            console.log(arr);
            console.log('-----------');
        },i*1000)
    }
}

function bb(){
    arr=[]
}
aa()
bb()