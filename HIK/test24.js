let obj={p:1}
let obj2={}
let symbol=Symbol('foo')
obj2[obj]=1
obj2[symbol]=2
console.log(obj2)