
//原型链继承

function Person(){
  this.name='233'
}
Person.prototype.getName=function(){
  console.log(this.name);
}
let a=new Person()
a.getName()