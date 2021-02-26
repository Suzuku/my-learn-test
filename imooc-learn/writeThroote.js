// 手写一个节流  throttle 的中心思想在于：在某段时间内，不管你触发了多少次回调，我都只认第一次，并在计时结束时给予响应。
 
function myThrottle(fn,interval){
    let bindTime=0
    return function(...args){
        let self=this
        let currentTime=Date.now()
        if(currentTime-bindTime>=interval){
            bindTime=currentTime
            fn.call(self,...args)
        }
    }
}

function login(params){
    console.log(params);
}

const test=myThrottle(login,1000)
test(223)
test(223)
test(223)
test(223)

setTimeout(() => {
    test(223)
}, 2000);