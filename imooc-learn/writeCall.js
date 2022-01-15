// 手写call  原理是将this绑定到传参上，即将该方法直接绑成obj的成员方法
Function.prototype.myCall = function (obj, ...args) {
  console.log(this);
  // 这里的this指向调用myCall的那个函数
  obj.myCallFunciton = this;
  obj.myCallFunciton(...args);
  delete obj.myCallFunciton;
};

// call apply都是相当于传递函数作用域
let person = {
  name: '233',
  sayName() {
    console.log(`Hello ${this.name}`);
  },
};

let Ming = {
  name: '332',
};

// person.sayName.myCall(Ming)
console.log(Object.prototype.toString.myCall([12,3]));
