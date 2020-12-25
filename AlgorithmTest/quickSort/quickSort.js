// 快速排序
function quick(arr){
    // 先来一趟
    for(let i=0;i<arr.length;i++){
        for(j=arr.length-1;j=i;j--){
            if(arr[j]>arr[i]){
                let temp=arr[j]
                arr[j]=arr[i]
                arr[i]=temp
            }
        }
    }
}