// 冒泡排序 时间复杂度o(n2)
function bubble(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            //  保证每次比较只比较n-i次  因为最后i个位置是定好了的  fix:可以直接在循环里用j<n-1限制即可
            if(j===arr.length-i){
                break
            }
            // 防止溢出
            if(j==arr.length-1){
                break
            }
            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }

    return arr
}

 console.log(bubble([5,2,4,5,6,2,1,5,7,8,23,11,34,21])); 
