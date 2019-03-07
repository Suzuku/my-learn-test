//Set结构的学习
const cc=new Set([1,2,3,4]);

let arr=[{
  msg:'233'
},
{
  msg:'334'
},
{
  msg:'445'
}]

for(let item of arr){
  cc.add(item)
}
console.log(cc)
