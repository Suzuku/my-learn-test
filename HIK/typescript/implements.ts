/* 为什么一个类用了接口之后 还是得声明一遍类型  那不是相当于冗余劳动了吗 */
interface Radio {
    switchRadio(trigger: boolean): void
}
class Car implements Radio {
    switchRadio(trigger) {
        return 123
    }
}

interface Battery {
    checkBatteryStatus(): void
}

// 要实现多个接口，我们只需要中间用 逗号 隔开即可。
class Cellphone implements Radio, Battery {
    switchRadio(trigger: boolean) {}
    checkBatteryStatus() {}
}
const cell = new Cellphone()
cell.switchRadio(233)
