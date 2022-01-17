// 使用循环手写实现Array.prototype.map方法

const arr = [1, 2, 3];
Array.prototype.myMap = function (fn) {
  //  这里需要生成一个原数组的浅拷贝，避免影响原数组,用 JSON.parse(JSON.stringify(this))也是可以的
  const arr = Array.prototype.slice.call(this);
  for (let i = 0; i < arr.length; i++) {
    //   此时保证调用时this指向原数组，直接执行arr[i] = fn(arr[i], i)的话为全局对象
    arr[i] = fn.call(this, arr[i], i);
  }
  return arr;
};

console.log(
  arr.myMap((item, index) => {
    console.log(index);

    item += 1;
    return item;
  })
);
console.log(
  arr.myMap(function (item, index) {
    console.log(this);

    item += 1;
    return item;
  })
);
