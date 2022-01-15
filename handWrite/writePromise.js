// 参考 Promose A+ 规范 手写

function myPromise(executor) {
    // value 记录异步任务成功的执行结果
    this.value = null;
    // reason 记录异步任务失败的原因
    this.reason = null;
    // status 记录当前状态，初始化是 pending
    this.status = 'pending';

    // 缓存两个队列，维护 resolved 和 rejected 各自对应的处理函数
    this.onResolvedQueue = [];
    this.onRejectedQueue = [];

    // 把 this 存下来，后面会用到
    var self = this;

    // 定义 resolve 函数
    function resolve(value) {
        // 如果不是 pending 状态，直接返回
        if (self.status !== 'pending') {
            return;
        }
        // 异步任务成功，把结果赋值给 value
        self.value = value;
        // 当前状态切换为 resolved
        self.status = 'resolved';
        // 用 setTimeout 延迟队列任务的执行
        setTimeout(function () {
            // 批量执行 resolved 队列里的任务
            self.onResolvedQueue.forEach((resolved) => resolved(self.value));
        });
    }

    // 定义 reject 函数
    function reject(reason) {
        // 如果不是 pending 状态，直接返回
        if (self.status !== 'pending') {
            return;
        }
        // 异步任务失败，把结果赋值给 value
        self.reason = reason;
        // 当前状态切换为 rejected
        self.status = 'rejected';
        // 用 setTimeout 延迟队列任务的执行
        setTimeout(function () {
            // 批量执行 rejected 队列里的任务
            self.onRejectedQueue.forEach((rejected) => rejected(self.reason));
        });
    }

    // 把 resolve 和 reject 能力赋予执行器
    executor(resolve, reject);
}

myPromise.prototype.then = function (onResolved = () => {}, onRejected = () => {}) {
    if (typeof onRejected !== 'function' || typeof onResolved !== 'function') {
        throw 'expect function';
    }
};
