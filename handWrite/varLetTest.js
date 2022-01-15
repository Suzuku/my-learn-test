// 用一个大括号表示块作用域
// {
//     let age=233
//     var age2=233
// }

// console.log(age2);

// 闭包
function addABC(){
    var a = 1,b = 2;
    
    function add(){
      return a+b+c;
    }
    return add;
  }
//   var c = 3


//   这样输出的c是undefined，如果改成let  则会报错，是因为var有变量提升，先进行声明，但是赋值不会提前
  var globalAdd = addABC()
  console.log(globalAdd(),c) 
  var c = 3

  
// 时隔一秒 输出0 1 2 3 4
  for (var i = 0; i < 5; i++) {
    let b=i
    setTimeout(function() {
        console.log(b);
    }, 1000);
}