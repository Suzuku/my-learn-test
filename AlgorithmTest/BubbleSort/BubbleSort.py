# 冒泡排序
def bubble(arr):
    for i, item1 in enumerate(arr):
        for j, item2 in enumerate(arr):
            # 保证每次比较只比较n-i次  因为最后i个位置是定好了的 fix:可以直接用range控制
            if(j == len(arr)-i):
                break
            # 防止溢出
            if(j==len(arr)-1):
                break
            if(arr[j] > arr[j+1]):
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
    return arr

print(bubble([5, 2, 4, 5, 6, 2, 1, 5, 7, 8, 23, 11, 34, 21])) 
