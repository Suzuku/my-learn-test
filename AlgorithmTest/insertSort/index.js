/* 插入排序是指在待排序的元素中，假设前面n-1(其中n>=2)个数已经是排好顺序的，考虑A[n]的值，从右向左扫描有序数组A[0,n-1]，
直到第一个小于等于A[n]的元素，将A[n]插在这个元素的后面。
现将第n个数插到前面已经排好的序列中，然后找到合适自己的位置，使得插入第n个数的这个序列也是排好顺序的。
按照此法对所有元素进行插入，直到整个序列排为有序的过程，称为插入排序 */

function insertSort(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let tempArr = [];
        if (result.length !== 0 && arr[i] < result[result.length - 1]) {
            if (arr[i] < result[0]) {
                tempArr.push(arr[i]);
            }
            for (let j = 0; j < result.length; j++) {
                tempArr.push(result[j]);
                if (result[j + 1] && arr[i] > result[j] && arr[i] <= result[j + 1]) {
                    tempArr.push(arr[i]);
                }
            }
            result = tempArr;
        } else {
            result.push(arr[i]);
        }
        console.log(result);
    }
    console.log('last', result);
}
insertSort([7,2,6,4,8,1,3,2,3,7,10,46,74,27]);
