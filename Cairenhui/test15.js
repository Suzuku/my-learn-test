
//扩展运算符即可用在数组也可用在对象
let rew={
  aa:2,
  aw:undefined
}

let obj={
  a:2,
  ...rew
}
console.log(obj)