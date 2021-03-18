/* 实现一个大数相加函数
浏览器值的运算有上限值，假如两个很大的数相加，该如何运算
 */

function add(num1, num2) {
    //类型判断是数字 否则throw error
    if(typeof num1!=="number"||typeof num2!=="number"){
        return `error type`
    }
    let arr1 = `${num1}`.split('');
    let arr2 = `${num2}`.split('');
    let result = [];
    let temp = [];
    let maxLength = Math.max(arr1.length, arr2.length);
    // 必须缓存下初始长度 不然后面补位的时候会变
    let arr1Length=arr1.length
    let arr2Length=arr2.length
    // 应该先补位0 然后再相加最简单
    if (arr1Length >arr2Length) {
        for (let i = 0; i < maxLength -arr2Length; i++) {
            arr2.unshift(0);
        }
    } else if (arr2.length > arr1Length) {
        for (let i = 0; i < maxLength - arr1Length; i++) {
            arr1.unshift(0);
        }
    }
    temp[maxLength - 1] = 0;
    for (let i = maxLength - 1; i >= 0; i--) {
        let num = Number(arr1[i]) + Number(arr2[i]) + temp[i]
        if (num >= 10) {
            result.push(num - 10);
            temp[i - 1] = 1;
        } else {
            result.push(num);
            temp[i - 1] = 0;
        }
    }
    result.reverse();
    return Number(result.join(''));
}
console.log(add(1234567867867, 12345678));
