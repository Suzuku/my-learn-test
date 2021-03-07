/* 
生成1000个不重复的六位验证码字符串数组：

1.单个验证码6位数字0-9
2.一次1000个验证码。数组形式返回
3.单次生成一批不能重复

function random():string[]{
} */



function random(){
    let map=new Map()
    let result=[]
    for(let i=0;i<1000;i++){
        randomApply(map,result)
    }
    return result
}

// 生成单个不重复的字符串
function randomApply(map,result){
    let randomStr=productRandomStr()
    while(map.has(randomStr)){
        randomStr=productRandomStr()
    }
    map.set(randomStr,'')
    result.push(randomStr)
}

// 生成六位random字符串函数
function productRandomStr(){
    let str=``
    for(let i=0;i<6;i++){
        str+=`${Math.floor(Math.random()*10)}`
    }
    return str
}

console.log(random()); 