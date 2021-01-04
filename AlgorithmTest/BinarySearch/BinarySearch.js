// Binary Search 二分查找 要求有序表  时间复杂度O(log2n)

function BinarySearch(arr,target){
    let midIndex=Math.floor(arr.length/2)
    if(arr[midIndex]===target){
        return midIndex
    }
    if(midIndex>0){
        BinarySearch(arr.slice(0,midIndex),target)
        BinarySearch(arr.slice(midIndex,arr.length),target)
    }
    return -1
}

console.log('result',BinarySearch([1,2,3,4,5,7,8,12],8)); 