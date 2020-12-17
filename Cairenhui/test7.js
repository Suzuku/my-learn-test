//测试关于作用域链的问题
function get(){
  let name1="haha";
  get1(name1);
  

}
get();

  function get1(params) {
  console.log(params);
}