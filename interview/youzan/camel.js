/**
 * 问题 4
 * 将一个json数据的所有key从下划线改为驼峰
 * 
 * @param {object | array} value 待处理对象或数组
 * @returns {object | array} 处理后的对象或数组
 */
function mapKeysToCamelCase(data) {
    // coding...
    if(typeof data === 'object'){
        Object.keys(data).forEach((item) => {
            if (typeof data[item] === 'object') {                
                mapKeysToCamelCase(data[item])
            }
            if (item.indexOf('_') !== -1) {                
                let arr = item.split('_')
                let key=[]
                key.push(arr[0])
                for (let i = 1; i < arr.length; i++) {
                    let arr2=arr[i].split('')
                    arr2[0]=arr2[0].toUpperCase()
                    let str2=arr2.join('')
                    key.push(str2)
                }
                
                let keyResultArr = key.join('')
                data[keyResultArr]=data[item]
                delete data[item]
            }
          
        })
        return data
    }

}

const testData = {
    a_bbb: 123,
    a_g: [1, 2, 3, 4],
    a_d: {
        s: 2,
        s_d: {s_22_33_dd_4234_tt:22}
    },
    a_f: [1, 2, 3, {
        a_g: 5
    }],
    a_d_s: 1
}

console.log(mapKeysToCamelCase(testData))
// {
//     aBbb: 123,
//     aG: [1, 2, 3, 4],
//     aD: {
//         s: 2,
//         sD: 3
//     },
//     aF: [1, 2, 3, {
//         aG: 5
//     }],
//     aDS: 1
// }