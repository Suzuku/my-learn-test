//箭头函数中的this指向是固定不变的，即是在定义函数时的指向； 
//而普通函数中的this指向时变化的，即是在使用函数时的指向。 
let obj={
  a:'2',
  b(){
    console.log('普通函数输出如下')
    console.log(this.a)
    
  }
}
function kk(){
  obj.a=222;
  obj.b();
}
kk();


let objArrows={
  a:'2',
  b:()=>{
    console.log('箭头函数输出如下')
    console.log(this.a)
  }
}
function arrow(){
  objArrows.a=333;
  objArrows.b();
}
arrow()
