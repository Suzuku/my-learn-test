
//箭头函数无法解决这个问题,关键在于异步和同步
for (var i = 1; i <= 5; i++) {
 setTimeout(()=>{
   console.log(i);
 },i*1000)
}
