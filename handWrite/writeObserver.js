/* 实现一个observer 递归绑定所有属性 vue双向绑定原理
var a=Observer({b:1,c:3,d:{e:3}…})
要求递归绑定所有属性
赋值时输出newValue和oldValue
比如a.b=2 //2
a.d.e=3 //3
 */

function myObserver(param) {
    let obj = bindProperty(param);
    return obj;
}

//  递归绑定属性函数
function bindProperty(obj) {
    if (typeof obj !== 'object') {
        return;
    } else {
        Object.keys(obj).forEach((prop) => {
            // 注意这里不能用obj.prop 因为prop实际上是字符串 
            // 这里需要存一下oldValue 不然写在get里会无限循环
            let temp=obj[prop]
            if (typeof obj[prop] !== 'object') {
                Object.defineProperty(obj, prop, {
                    get(){
                        return temp
                    },
                    set(newValue) {
                        console.log('set old value', temp);
                        console.log('set new value', newValue);
                    }
                });
            } else if (typeof obj[prop] === 'object') {
                // 此时为对象 则递归
                bindProperty(obj[prop]);
            }
        });
    }
    return obj;
}

let test = myObserver({ b: 1, c: 3, d: { e: 3 } });
test.b = 2;
test.d.e = 5;
