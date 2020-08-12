'use strict';

/*let a1 = Symbol('kk');
let a2 = Symbol('kk');
console.log(a1);
console.log(a1 === a2); //false
var obj = {
    name: "zhangsan",
    age: 18
}
console.log(obj.name); //zhangsan
console.log(obj['name']); //zhangsan*/
/*
let a1 = Symbol('kk');
let a2 = Symbol('kk');
let obj = {};
let obj1 = {};
obj[a1] = a2;
obj1[a1] = a2;
console.log(obj[a1] === obj1[a1]); //{Symbol('kk'):3}
*/
/*
let a1 = Symbol('kk');
let obj = {};
Object.defineProperty(obj, a1, { value: 123 });
console.log(obj);
*/
var user = Symbol('Nick');
console.log(user);