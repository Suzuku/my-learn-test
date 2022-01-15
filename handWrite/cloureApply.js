// 闭包的应用 1.在setTimeout里传参

function test(param){
    return function(){
        console.log(param);
    }
}

setTimeout(test(1),1000)


// 实际上 这里如果是构造函数  那么使用不使用闭包是一样的 但是如果是Class 就很重要  因为constructor里没法定义能让整个成员方法访问的变量
const User = function() {
    // 定义私有变量_password
    let _password

    return function User(name,password){
        this.name=name;
        let PASSWORD=password;
        this.login=function() {
            // 这里我们增加一行 console，为了验证 login 里仍可以顺利拿到密码
            console.log(this.username, PASSWORD)
            // 使用 fetch 进行登录请求，同上，此处省略
        }
    }
}
let user1=User()
let user = new user1('zhangsan','233')

console.log(user.username)
console.log(user.password)
console.log(user._password)
user.login()

const User1 = function() {
    // 定义私有变量_password
    let _password

    class User{
        constructor(name,password){
            this.username=name
            _password=password
        }
        login(){
            console.log(this.username, _password)
        }
    }
    return User
}
let user2=User1()
let user3 = new user2('zhangsan','233')

console.log(user3.username)
console.log(user3.password)
console.log(user3._password)
user3.login()