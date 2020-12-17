let str = 'btn btn-large';
let arr = str.split(' ');
let strName = 'btn-default';
//将字符串转数组再转字符串  实现addClass的DOM操作
arr.push(strName);
let arr2 = arr.join(' ');
console.log(arr2);

//直接调用String对象的concat方法 较简单
let str3=str.concat(` ${strName}`)
console.log(str3)