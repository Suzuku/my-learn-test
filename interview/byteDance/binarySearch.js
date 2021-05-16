/* 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target ，
写一个函数二分查找 nums 中的 target，如果目标值存在返回下标，否则返回 -1。 */

function test(arr,target,low,high){
    if(low>=high){
        return -1
    }
    if(arr[low]===target){
        return low
    }
    if(arr[high]===target){
        return high
    }
    let mid=Math.floor((low+high)/2)
     if(arr[mid]===target){
        return target
    }
    //中间值小于target
    if(arr[mid]<target){
        low=mid+1
    }
    if(arr[mid]>target){
        high=mid-1
    }
    return test(arr,target,low,high)
}

console.log(test([1,2,3,4,6],8,0,4)); 