/* 类型别名和接口 分别什么时候用  比较类似也有区别
类型别名是一种非常灵活的概念，本身并不是一种类型  类似于快捷方式，常用于交叉类型和组合类型
接口则是一种类型 常用于extends和implements 
两者需要看实际情况进行使用 */
// 类型别名，就是给类型起一个别名，让它可以更方便的被重用。
let sum: (x: number, y: number) => number
const result = sum(1, 2)
type PlusType = (x: number, y: number) => number
let sum2: PlusType

// 支持联合类型
type StrOrNumber = string | number
let result2: StrOrNumber = '123'
result2 = 123

// 字符串字面量
type Directions = 'Up' | 'Down' | 'Left' | 'Right'
let toWhere: Directions = 'Up'

// 交叉类型
interface IName {
    name: string
}
type IPerson = IName & { age: number }
let person: IPerson = { name: 'hello', age: 12 }
