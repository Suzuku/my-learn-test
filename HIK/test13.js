let a=[{haha:1},2,[2,3]]
let b=[...a]
a[0].haha=3
console.log(a,b);