// 快速排序
function quick(arr) {
    // 先来一趟
    if (arr.length > 1) {
        let i = 0;
        let j = arr.length - 1;
        let key = arr[0];
        while (i < j) {
            for (; j > i; j--) {
                if (arr[j] < key) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                    break;
                }
            }
            for (; i < j; i++) {
                if (arr[i] > key) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                    break;
                }
            }
            console.log(i, j);
        }
        console.log(arr);
        // 下面以一趟递归为基准 开始分而治之 递归
        quick(arr.slice(0, i));
        quick(arr.slice(i + 1, arr.length));

        console.log("last arr", arr);
    }
}

quick([49, 38, 65, 97, 76, 13, 27, 49]);
