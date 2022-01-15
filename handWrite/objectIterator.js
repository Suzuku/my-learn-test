// Object的多种遍历方法
Object.prototype.c=55
let obj={a:22,b:23}

for(let key in obj){
    console.log(key,obj[key]);
}

console.log(`------------------`);

Object.keys(obj).forEach((item)=>{
    console.log(item,obj[item]);
})

console.log(`------------------`);

for(let key in obj){
    if(obj.hasOwnProperty(key)){
        console.log(key,obj[key]);
    }
}
console.log(`------------------`);

// 对象自身的Symbol.iterator不返回一个遍历器生成函数  所以需要进行处理才能使用for...of遍历
for(let [key,value] of Object.entries(obj)){
    console.log(key,value);
}