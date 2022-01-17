// 使用循环手写实现Array.prototype.some方法

const arr = [1, 2, 3];
Array.prototype.mySome = function (fn) {
  //  这里需要生成一个原数组的浅拷贝，避免影响原数组,用 JSON.parse(JSON.stringify(this))也是可以的
  const arr = Array.prototype.slice.call(this);
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    //   此时保证调用时this指向原数组，直接执行arr[i] = fn(arr[i], i)的话为全局对象
    // 因为是some,所以不需要遍历完数组，所以如果这里写成flag = fn.call(this, arr[i], i) ? true : flag 的话，就存在不必要的遍历
    if (fn.call(this, arr[i], i)) {
      flag = true;
      return flag;
    }
  }
  return flag;
};

console.log(
  arr.mySome((item, index) => {
    return item > 9;
  })
);
