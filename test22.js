//测试map方法中return一个对象
let arr=[0,1,2]
let arr1=[{label:'2',name:'3'},{label:'3',name:'4'}]

let arr2=arr.map((item)=>{
  return {
    item,
    ...arr1[item]
  }
})
console.log(arr2);