// Symbol意思是独一无二的值，是新增的原始数据类型 类似于字符串

let testSymbol1=Symbol('test')
let testSymbol2=Symbol('test')

let obj={
    [testSymbol1]:'233',
    [testSymbol2]:'244',
}

console.log(obj);
