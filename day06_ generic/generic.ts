// 在定义函数或者类时，如果遇到类型不明确就可以使用泛型
function fn2<T>(a: T): T {
  return a
}

// 可以直接调用具有泛型的函数
let result = fn2(10) // 不指定泛型，TS可以自动对类型进行推断
let result2 = fn2<string>("hello") // 指定泛型

interface Inter {
  length: number
}

//  T extends Inter 表示泛型T必须是Inter实现类（子类）
function fn3<T extends Inter>(a: T): number {
  return a.length
}
console.log(fn3("123"))
console.log(fn3([1, 2, 3, 4, 5]))
console.log(fn3({ length: 10 }))
// console.log(fn3(123)) // error
