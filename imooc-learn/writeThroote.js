// 手写一个节流  throttle 的中心思想在于：在某段时间内，不管你触发了多少次回调，我都只认第一次，并在计时结束时给予响应。
 
function myThrottle(fn,interval){
    let bindTime=0
    return function(){
        let self=this
        let args=arguments
        let currentTime=Date.now()
        if(currentTime-bindTime>=interval){
            bindTime=currentTime
            fn.call(self)
        }
    }
}

function login(){
    console.log(1);
}

const test=myThrottle(login,1000)
test()
test()
test()
test()

setTimeout(() => {
    test()
}, 2000);