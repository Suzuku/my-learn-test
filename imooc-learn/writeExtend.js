// 分析几种继承

function Person(name,age){
    this.name=name
    this.age=age
    
}
Person.prototype.sayHello=function(){
    console.log(123);
}
let person=new Person('xiaoMing',233)
person.sayName=33

// 第一种 通过原型链继承 缺点 子实例会共享父类实例  父类实例修改 子实例也会变 ---实际上多个子实例间也会影响 比如b1改了继承的属性值  b2的那个也会变
function Ming(age){
    this.age=age
}
Ming.prototype=person
let xiaoMing=new Ming(444)
// 444 'xiaoMing'
console.log(xiaoMing.age,xiaoMing.name,xiaoMing);  


// 第二种 借用构造函数 调用call()继承 可以继承多个构造函数属性（call多个）可选继承 而不是继承父类原型上的所有属性  子类可向父类传参
// 关键 只能继承父类构造函数上的属性和方法  不能继承原型上的所有属性
function Hong(age){
    Person.call(this,'xiaoHong')
    this.age=age
}
let hong=new Hong(444)
console.log(hong);  

// 第三种 组合继承[即原型链+借用构造函数] 可以继承父类原型上的属性，可以传参，可复用。   调用了两次父类构造函数（耗内存）
// 相同的属性既被写入了原型中，又被写入了实例中，这是没有必要的。

function Yello(age){
    Person.call(this,age)
}
Yello.prototype=new Person(233)
let yellow=new Yello(555)
console.log(yellow);

// 第四种 寄生组合式继承 【常用】  
// 先封装一个容器
function content(obj){
    function F(){}
    F.prototype=obj
    return new F()
}
// 子类
function Black(age) {
    Person.call(this,'black',age)
}
// 重点
// 生成父类的原型对象拷贝
let superProto=content(Person.prototype)
Black.prototype=superProto
superProto.constructor=Black
let black=new Black(233)
console.log(black);

