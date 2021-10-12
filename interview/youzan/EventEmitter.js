// 题目 2

/**
 * 实现一个事件模型（EventEmitter）
 * 包括简单的 `on`、`emit`、`off`、`once` 等功能
 */

class EventEmitter {
  constructor() {
    //   维护一个队列 保证先进先出
    this.queue = [];
  }
  emit(key, ...args) {
    const tempArr = this.queue.filter((item) => item.key === key);
    if (tempArr.length > 0) {
      for (let item of tempArr) {
        if (item.isOnce) {
          this.off(key);
        }
        item.callback(...args);
      }
    }
  }
  on(key, callback) {
    this.queue.push({ key, callback });
  }
  off(key) {
    // 去掉队列的key即可
    const tempArr = this.queue.filter((item) => item.key !== key);
    this.queue = tempArr;
  }
  once(key, callback) {
    this.queue.push({ key, callback, isOnce: true });
  }
}

const myEvent = new EventEmitter();

myEvent.emit('key', '233');

// 用例
myEvent.on('key', (data) => {
  console.log('绑定上了', data);
});
myEvent.on('key', (data) => {
  console.log('我又绑定上了', data);
});
myEvent.emit('key', '1');
myEvent.emit('key', '2');

console.log('开始解绑');

myEvent.off('key');

myEvent.emit('key', '233');

myEvent.once('key', (data) => {
  console.log('我解绑了',data);
});
myEvent.emit('key', '3');
myEvent.emit('key', '4');

