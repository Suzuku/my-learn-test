
//自增操作符会调用
let obj={

  a:'1',
  b:'2',
  valueOf:function(){
    return -2
  }
}
console.log(--obj)
console.log(obj)