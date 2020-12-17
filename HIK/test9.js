let arr=[1,2,3,4,5,6,7,8,9]
let copy=arr.concat()

const t=new Promise((resolve)=>{
    for(var i=0;i<copy.length;i++){
        (function(a){
            setTimeout(()=>{
                arr.splice(0,1)
                console.log(arr);
                console.log('-----------');
            },a*1000)
        })(i)
    }
})
t.then(()=>{
    arr=[]
})
