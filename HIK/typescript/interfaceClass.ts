interface Person<T>{
    name:T
}

class Kiri<Person>{
    name:Person
}

let kiri=new Kiri<Number>()

kiri.name=233

console.log(kiri);