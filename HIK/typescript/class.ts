class Person {
    fullName:string
    constructor(age:number,name:string) {
        this.fullName=age+name
    }
}

console.log(new Person(233,'233').fullName);