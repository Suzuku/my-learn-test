// 手写防抖 只认最后一次 每次触发重新计时
function myDebounce(fn,interval){
    let timer=null

    return function (...args){
        let self=this
        if(timer){
            clearTimeout(timer)
        }
        timer=setTimeout(()=>{
            fn.call(self,...args)
        },interval)
    }
}
function test(params){
    console.log(params);
}

let func=myDebounce(test,1000)
func(233)
func(233)
func(233)
func(233)

setTimeout(()=>{
    func(233)
},2000)
