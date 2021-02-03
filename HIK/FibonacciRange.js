// 生成斐波那契数列
let arr = []
arr[0] = 1
arr[1] = 1

for (let i = 2; i < 10; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
}

console.log(arr)
