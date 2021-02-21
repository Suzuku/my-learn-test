var a = 1

var obj = {
  a: 2,
  // 声明位置
  showA: () => {
      return ()=>{
         console.log(this.a);
      }
  }
}

// 调用位置
obj.showA()();  // undefined 因为父作用域上没有a的属性  
