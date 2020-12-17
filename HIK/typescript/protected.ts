class Person{
    private name:string;
    protected gender:string;
    age:number;
    constructor(age:number){
        this.age=age
    }
}
class Men extends Person{
    constructor(gender:string,name:string){
        super(gender)
    }
    getDevice(){
        console.log(this.gender,this.name);
    }
}
let hello=new Men('kiri','233')
console.log(hello.getDevice(),hello.gender);