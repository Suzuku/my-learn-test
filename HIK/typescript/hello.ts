interface Person{
    name:String,
    age:number
}


const greet=(person:Person)=>{
    console.log(person.age,person.name);
}
// 只有pro版本 单个限制存储服务器 
greet({age:233,name:'233'})

console.log(<any>window.greet());