/* 
前段时间学习了关于vue中响应式数据的原理，其实是通过Object.defineProperty控制getter和setter，
并利用观察者模式完成的响应式设计。那么数组有一系列的操作方法，这些方法并不会触发数组的getter和setter方法 
*/
let obj = {
    a: 212,
    arr: [1, 2, 3]
};
/* 
Object.assign()拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性（enumerable: false）。
不可枚举的属性比如引用类型Object Number实例的属性
 */
let arrList=Object.create(obj.arr);
Object.defineProperty(obj, 'arr', {
    get() {
        console.log('obj.arr');
        return arrList;    
    },
    set(newValue) {
        arrList=[...newValue]
        console.log('set', newValue);
    }
});

Object.defineProperty(obj, 'a', {
    get() {
        console.log('obj.a');
        return obj.a;
    },
    set(newValue) {
        console.log('set', newValue);
    }
});
obj.a = 233;
obj.arr = [3, 2, 4];
obj.arr = [7,8,5];
// 无法监听push、shift等方法改变的arr值，所以响应式数组采用的是另一种方法
obj.arr.push(2);
