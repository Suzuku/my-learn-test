// 快速排序
/* 
49, 38, 65, 97, 76, 13, 27, 49
key=49

27<49 -> 27, 38, 65, 97, 76, 13, 27, 49
65>49 > 27, 38, 65, 97, 76, 13, 65, 49
13<49 -> 27, 38, 13, 97, 76, 13, 65, 49
97>49 -> 27, 38, 13, 97, 76, 97, 65, 49

low=high=97 赋值 为49 一趟排序完成
27, 38, 13, 49, 76, 97, 65, 49
*/
function quick(arr, low, high) {
    if (low >= 0 && low < high) {
        let key = arr[low]
        let i = low
        let j = high
        while (i < j) {
            for (; i < j && arr[j] >= key; j--) {}
            // 此时arr[j]是<key的  故将high的值赋值给low
            arr[i] = arr[j]
            for (; i < j && arr[i] <= key; i++) {}
            // 此时arr[i]是>key的  故将low的值赋值给high
            arr[j] = arr[i]
        }
        // 此时low=j 所指的位置即为该趟的索引 赋值为key
        arr[i] = key
        quick(arr, 0, low - 1)
        quick(arr, low + 1, high)
        return arr
    }
}
let data = [49, 38, 65, 97, 76, 13, 27, 49]
console.log(quick(data, 0, data.length - 1))
