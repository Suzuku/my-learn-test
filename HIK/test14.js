var arr = [
    { a: 1 },
    { b: 2 }
]

var obj = arr[0]

console.log(obj === arr[0])

var obj1 = {
    a: arr[0]
}

console.log(obj1.a === arr[0])