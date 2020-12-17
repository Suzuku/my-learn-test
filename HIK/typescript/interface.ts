interface Person{
    name:string,
    age:number
}

interface Student extends Person{
    studentId:string
}

interface Kiri extends Student{
    team:string
}

let kiri=<Kiri>{}

// 实际上编辑器就已经在提示类型了
kiri.name='kiri'
kiri.studentId='233'  

console.log(kiri);
