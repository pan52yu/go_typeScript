// 开发中使用的比较少 因为万物皆对象
let a: object

/* 定义对象的结构 */
// 一般这样用 { } 用来指定对象中可以包含哪些属性 一一对应
let b: { age: number; name?: string }
b = {
    age: 12,
}

// [propName: string]: any 表示任意类型的属性
let c: { name: string; [propName: string]: any }
c = {
    name: 'zs',
    age: 13,
    gender: 'male',
}

/* 定义函数的结构 */
let d: (a: number, b: number) => number

d = (a, b) => {
    return a + b
}

/*
d = (a: string, b) => {
    return a
}*/

/* 数组的类型 两种方式 */
let e: number[]
e = [1, 2, 3]

let f: string[]
f = ['1', 'rtyuiF']

let g: Array<number>
g = [1, 2, 3 /*,'4'*/]

// 元组 元组就是固定长度的数组
//  语法： [类型，类型，类型]

let h: [string, string]
h = ['2', '5']

/**
 * enum 枚举
 */
enum Genders {
    Male = 0,
    Female = 1,
}

let i: { name: string; gender: Genders }

i = {
    name: 'zs',
    gender: Gender.Male,
}

console.log(i.gender === Genders.Male)

/**
 * 类型别名
 */

type NumType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
let k: NumType

k = 1
