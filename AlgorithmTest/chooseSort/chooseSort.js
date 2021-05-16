// 选择排序
function swap(arr) {
    // 先来一趟
    console.log(arr.length);
    for (let i = 0; i < arr.length; i++) {
        for (j = arr.length - 1; j >= i; j--) {
            if (arr[j] < arr[i]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
        console.log(arr);
    }
}

swap([49, 38, 65, 97, 76, 13, 27, 49]);
