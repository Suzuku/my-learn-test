// 分析下面代码并说结果
function Person(name) {
    this.name = name;
    console.log(this);
  }
  Person.prototype.print = function() {
    return this.name;
  };
  Person('abc'); 
  console.log(name) // abc
  const a = new Person('abc').print.call({});
  console.log(a); // undefined
  
  const fn = () => {
    this.x = 'z';
  };
  const b = {x: 'y'};
  fn.call(b);
  console.log(b); // {x: 'y'}