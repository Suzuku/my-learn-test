let obj={
    a:2,
    b:3
}
let base={a:22}
let newObj={a:22,...obj}

let extengObj=Object.assign(base,{...obj})
console.log(newObj);// { base: { a: 2, b: 3 }, a: 2, b: 3 }
console.log(extengObj);// { a: 2, b: 3 }

