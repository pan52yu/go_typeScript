// let b: 'male' | 'female'
/*b = 'male'*/

// 未知属性
let a: unknown
a = 'male'
a = 123
a = true

let b: any
b = 'female'
b = false

a = '1234'


let c: string
// c = a

// unknown 实际上就是一个类型安全的any
if (typeof a === 'string') {
    c = a
}

// 类型断言 告诉解析器 变量的实际类型
c = a as string
// 或者
c = <string>a


// void 用来表示空，以函数为例，就表示没有返回值的函数
function fn(): void {

}

// never 表示没有值 永远不会返回结果
function f(): never {
    throw new Error("Invalid!!!")
}

f()