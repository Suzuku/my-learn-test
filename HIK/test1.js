let arr=[{
    name:'233'
},
{
    name:'244'
},]


let arrFake=arr.forEach((item)=>{
    item.name='255'
})
console.log(arr);
console.log(arrFake);