// Binary Search 二分查找 要求有序表  时间复杂度O(log2n)
let INDEX = -1;
let end=false
function BinarySearch(arr,index,target) {
    // 跳出循环的条件
    if(!end){
        let midIndex = Math.floor(arr.length / 2);
        if (arr[midIndex] === target) {
            end=true
            INDEX=index+midIndex
            return end
        }
        console.log(midIndex, INDEX);
        if (arr.length > 1) {
            // 考虑传Index进递归 不然无法获取到基于总数组的index
            BinarySearch(arr.slice(0, midIndex), index,target);
            BinarySearch(arr.slice(midIndex, arr.length), index+midIndex,target);
        }
    }
    return INDEX
}

console.log('result', BinarySearch([1, 2, 3, 4, 5, 7, 8, 12],0,13));
