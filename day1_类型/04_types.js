// 开发中使用的比较少 因为万物皆对象
var a;
/* 定义对象的结构 */
// 一般这样用 { } 用来指定对象中可以包含哪些属性 一一对应
var b;
b = {
    age: 12
};
// [propName: string]: any 表示任意类型的属性
var c;
c = {
    name: 'zs',
    age: 13,
    gender: 'male'
};
/* 定义函数的结构 */
var d;
d = function (a, b) {
    return a + b;
};
/*
d = (a: string, b) => {
    return a
}*/
/* 数组的类型 两种方式 */
var e;
e = [1, 2, 3];
var f;
f = ['1', 'rtyuiF'];
var g;
g = [1, 2, 3 /*,'4'*/];
// 元组 元组就是固定长度的数组
//  语法： [类型，类型，类型]
var h;
h = ['2', '5'];
/**
 * enum 枚举
 */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: 'zs',
    gender: Gender.Male
};
console.log(i.gender === Gender.Female);

