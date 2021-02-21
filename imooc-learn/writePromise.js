// 参考 Promose A+ 规范 手写

class myPromise{
    constructor(executor){
       this.value=''
       this.error=''
       this.status='pending'
       executor(resolve,reject)
    }
    resolve(value){
        this.status='resolve'
        this.value=value
    }
    reject(error){
        this.status='resolve'
        this.error=error
    }
}
