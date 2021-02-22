// 二分查找 循环版本 时间复杂度o(logn)

function BinarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let mid = Math.floor(arr.length / 2);
    if (target === arr[low]) {
        return low;
    }
    if (target === arr[high]) {
        return high;
    }
    while (low < high) {
        if (target === arr[mid]) {
            return mid;
        } else if (target > arr[mid]) {
            low = mid + 1;
        } else if (target < arr[mid]) {
            high = mid - 1;
        }
    }
    return -1
}
console.log('result', BinarySearch([1, 2, 3, 4, 5, 7, 8, 12],12));
