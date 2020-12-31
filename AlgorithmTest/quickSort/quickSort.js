// 快速排序
function quick(arr) {
    // 先来一趟
    let i = 0;
    let j = arr.length - 1;
    let key = arr[0];
    while (i <j) {
        for (; j > i; j--) {
            if (arr[j] < key) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                break;
            }
        }
        for (; i <=j; i++) {
            if (arr[i] > key) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                break
            }
        }
    }
    console.log(i,j);
    console.log(arr);
}

quick([49, 38, 65, 97, 76, 13, 27, 49]);
