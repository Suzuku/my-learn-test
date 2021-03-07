// 手写一个简易版的promise 用es6的class形式
// https://www.cnblogs.com/sugar-tomato/p/11353546.html
/* 
现在基本可以实现简单的同步代码，但是当resolve在setTomeout内执行，
then时state还是pending等待状态 我们就需要在then调用的时候，将成功和失败存到各自的数组，一旦reject或者resolve，就调用它们 */

class myPromise {
    constructor(fn) {
        this.status = 'pending'
        this.value = null
        this.error = null
        let self = this
        let resolve = (value) => {
            // 一次改变后不能再次改变
            if (this.state === 'pending') {
                self.status = 'fulfilled'
                self.value = value
            }
        }
        let reject = (error) => {
            if (this.state === 'pending') {
                self.status = 'rejected'
                self.error = error
            }
        }
        // 如果executor执行报错，直接执行reject
        try {
            fn(resolve, reject)
        } catch (err) {
            reject(err)
        }
    }
    then(onFulfilled = () => {}, onRejected = () => {}) {
        if (this.status === 'fulfilled') {
            onFulfilled(this.value)
        } else if (this.status === 'rejected') {
            onRejected(this.error)
        }
        return this
    }
}
