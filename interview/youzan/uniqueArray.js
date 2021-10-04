
/**
 * ## 问题 2
 * 对数组做去重
 *
 * @example
 * [1,'1',1, null]                            -> [1,'1']
 * [{a: 1}, {b: 1}, {a: 1}]             -> [{a: 1}, {b: 1}]
 * [{a: 1, b: 2}, {b: 1}, {a: 1, b: 2}] -> [{a: 1, b: 2}, {b: 1}]
 * [[1, {a: 1}], [2], [3], [1, {a: 1}]] -> [[1, {a: 1}], [2], [3]]
 * [{a: 1, b: 2}, {b: 1}, {b: 2, a: 1}] -> [{a: 1, b: 2}, {b: 1}]
 */
// 数组去重，考虑对象的key对应的属性值相等即为全等的对象
function uniqueArray(arr) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
      let isSame = false;
      for (let j = 0; j < resultArr.length; j++) {
        if (typeof arr[i] === 'object' && typeof arr[j] === 'object' && isSameObject(arr[i], arr[j])) {
          isSame = true;
          break;
        } else {
          isSame = arr[i] === arr[j];
          if (isSame) {
            break;
          }
        }
      }
      if (!isSame) {
        resultArr.push(arr[i]);
      }
    }
    return resultArr;
  }
  
  
  // 判断两个对象或数组是否全等
  function isSameObject(obj1, obj2) {
    //   不考虑循环引用的情况
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }
    let resultArr = Object.keys(obj1).map((item) => {
      // 都是对象的情况
      if (typeof obj1[item] === 'object' && typeof obj2[item] === 'object') {
        return isSameObject(obj1[item], obj2[item]);
      }
      return obj1[item] === obj2[item];
    });
    return resultArr.every((content) => !!content);
  }
  
  
  
  console.log(uniqueArray([[1, { a: 1 }], [2], [3], [1, { a: 1 }]]));
  console.log(uniqueArray([{ a: 1 }, { b: 1 }, { a: 1 }]));
  console.log(uniqueArray([{ a: 1, b: 2 }, { b: 1 }, { b: 2, a: 1 }]));
  console.log(uniqueArray([{ a: 1, b: 2 }, { b: 1 }, { b: 2, a: 1 }]));
  
  
  console.log(
    uniqueArray([
      {
        a: 1,
        b: 2,
        age: {
          a: 1,
          b: 2,
          c: {
            age: 22,
            name: {
              age: 22,
            },
          },
        },
      },
      { b: 1 },
      {
        b: 2,
        a: 1,
        age: {
          c: {
            name: {
              age: 22,
            },
            age: 22,
          },
          b: 2,
          a: 1,
        },
      },
    ])
  );
  
  console.log(uniqueArray([1, 2, 1]));
  
  console.log(
    isSameObject(
      {
        a: 1,
        b: 2,
        c: {
          age: 22,
          name: {
            age: 22,
          },
        },
      },
      {
        c: {
          name: {
            age: 22,
          },
          age: 22,
        },
        b: 2,
        a: 1,
      }
    )
  );
  