interface Person {
    readonly id: number
    name: string
    age: number
}

interface Student extends Person {
    studentId: string
}

interface Kiri extends Student {
    team: string
}
interface TestFunction {
    (x: string, y?: string): string
}
const test: TestFunction = (x, y) => {
    return x + y
}
test('123', '456')
let kiri = <Kiri>{}

// 实际上编辑器就已经在提示类型了
