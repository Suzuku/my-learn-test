var a=1

function f(){
    var a=2
    c=4 
    return function g(){
        console.log(a++);
        console.log(b++);
        console.log(c++);
    }
}

console.log(a);
console.log(b);
console.log(c);

var g=f()
var b=3
g()


console.log(a);
console.log(b);
console.log(c);


