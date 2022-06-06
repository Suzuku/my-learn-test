/**
 * 问题 4
 * 将一个json数据的所有key从下划线改为驼峰
 *
 * @param {object | array} value 待处理对象或数组
 * @returns {object | array} 处理后的对象或数组
 */

function transToCamel(data) {
    // 可加一个是否为对象的判断
  for (let item of Object.keys(data)) {
    //   明显是个递归的处理方式，于是先考虑对象嵌套对象的处理
    if (typeof data[item] === 'object') {
      transToCamel(data[item]);
    }
    //   单纯是值的情况下
    const arr = item.split('_');
    const resultArr = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
      const testArr = arr[i].split('');
      testArr[0] = testArr[0].toUpperCase();
      resultArr.push(testArr.join(''));
    }
    // 赋值并删除原有key值
    const temp =  data[item]
    // 需要先删再赋值，否则会出现同名key（即不需要转化处理）的情况下 一个都没了
    delete data[item];
    data[resultArr.join('')] =temp;
  }
  return data;
}

const testData = {
  a_bbb: 123,
  a_g: [1, 2, 3, 4],
  a_d: {
    s: 2,
    s_d: { s_22_33_dd_4234_tt: 22 },
  },
  a_f: [
    1,
    2,
    3,
    {
      a_g: 5,
    },
  ],
  a_d_s: 1,
};
console.log(transToCamel(testData));
