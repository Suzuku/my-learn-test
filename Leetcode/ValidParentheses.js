// 分析题目，由于后匹配的括号需要先进行闭合 所以考虑使用stack  js里可以使用数组模拟stack，默认从左括号开始

function isValid(str) {
    let arr = str.split('')
    let map = new Map([
        ['}', '{'],
        [']', '['],
        [')', '('],
    ])

    // 栈
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i]) && map.get(arr[i]) === result[result.length - 1]) {
            result.pop()
        } else if (!map.has(arr[i])) {
            result.push(arr[i])
        } else if (map.has(arr[i]) && map.get(arr[i]) !== result[result.length - 1]) {
            return false
        }
        console.log(result)
    }
    if (result.length === 0) {
        return true
    } else {
        return false
    }
}

console.log(isValid('([)]'))
