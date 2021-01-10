/* 插入排序是指在待排序的元素中，假设前面n-1(其中n>=2)个数已经是排好顺序的，
现将第n个数插到前面已经排好的序列中，然后找到合适自己的位置，使得插入第n个数的这个序列也是排好顺序的。
按照此法对所有元素进行插入，直到整个序列排为有序的过程，称为插入排序 */

function insertSort(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.length !== 0 && arr[i] > result[0] && arr[i] < result[result.length - 1]) {
            for (let j = 0; j < result.length - 1; j++) {
                if (arr[i] >= result[j] && arr[i] <= result[j + 1]) {
                }
            }
        } else if (result.length !== 0 && arr[i] <= result[0]) {
        } else {
            result.push(arr[i]);
        }
        console.log(result);
    }
    console.log("last", result);
}
insertSort([2, 5, 3, 7, 9, 1, 15]);
