// 手写一个简易版的promise 用es6的class形式
// https://www.cnblogs.com/sugar-tomato/p/11353546.html
/* 
现在基本可以实现简单的同步代码，但是当resolve在setTomeout内执行，
then时state还是pending等待状态 我们就需要在then调用的时候，将成功和失败存到各自的数组，一旦reject或者resolve，就调用它们 */

class myPromise {
    constructor(fn) {
        this.status = 'pending';
        this.value = null;
        this.error = null;
        this.resolveCallback = [];
        this.rejectCallback = [];
        let resolve = (value) => {
            // 一次改变后不能再次改变
            if (this.status === 'pending') {
                this.status = 'fulfilled';
                this.value = value;
                // 是否需要这个异步  需要 保证then收集完了再执行
                setTimeout(() => {
                    for (let fn of this.resolveCallback) {
                        fn();
                    }
                });
            }
        };
        let reject = (error) => {
            if (this.status === 'pending') {
                this.status = 'rejected';
                this.error = error;
                // 是否需要这个异步  需要 保证then收集完了再执行
                setTimeout(() => {
                    for (let fn of this.rejectCallback) {
                        fn();
                    }
                });
            }
        };
        // 如果executor执行报错，直接执行reject
        try {
            fn(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }
    then(onFulfilled = () => {}, onRejected = () => {}) {
        // 为了兼容异步函数的情况 即调用then的时候  实际上状态还是pending 会在不久以后改变 
        if (this.status === 'pending') {
            // 所以需要把任务放到resolve/reject的时候再执行，
            this.resolveCallback.push(() => {
                onFulfilled(this.value);
            });
            this.rejectCallback.push(() => {
                onRejected(this.error);
            });
        }
        // 如果是同步任务 那么直接改变状态 调用函数即可
        if (this.status === 'fulfilled') {
            onFulfilled(this.value);
        } else if (this.status === 'rejected') {
            onRejected(this.error);
        }
        return this;
    }
}

new myPromise((resolve, reject) => {
    setTimeout(() => {
        console.log(1);
        reject(3);
    }, 1000);
}).then(
    (value) => {
        console.log(value);
    },
    (error) => {
        console.log(error);
    }
);
