// 类的三大特性  封装、继承、多态

/* 多态是指 类继承父类后可以重写同名方法，即重载*/

class Person {
    name: string
    age: number
    constructor(age: number, name: string) {
        this.age = age
        this.name = name
    }
    sayHello() {
        return `Person ${this.name} say Hello ${this.age}`
    }
}
class Student extends Person {
    constructor(age: number, name: string) {
        super(age, name)
    }
    sayHello() {
        return `Student ` + super.sayHello()
    }
}

console.log(new Person(22, '张三').sayHello())
console.log(new Student(15, '小明').sayHello())
