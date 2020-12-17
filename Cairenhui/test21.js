//构造函数的原型对象的constructor指向构造函数
function Name(){
  this.age=3
}
console.log(Name.prototype.constructor===Name);

//实现原型链继承

function Father(){
  this.name='father'
  this.getName=function(){
    console.log(this.name);
  }
}//以下两种方式定义函数均可
// Father.prototype.getName=function(){
//   console.log(this.name);
// }
function Child(){
  this.name='child'
}
Child.prototype=new Father()
const f=new Father()
const c=new Child()
f.getName()
c.getName()