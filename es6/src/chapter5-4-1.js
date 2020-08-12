// import 引入模块
/*
import {a} from "./chapter5-4-2.js"
console.log(a);
*/
/*
import {a,sayHello,test} from "./chapter5-4-2.js";
console.log(a,sayHello,test)*/
/*
import * as test from "./chapter5-4-2.js"
console.log(test.default.a);
console.log(test.default.sayHello);*/
/*
import test from "./chapter5-4-2.js"
console.log(test.sayHello)*/
import * as test from "./chapter5-4-2.js"
console.log(test.a);
console.log(test.sayHello);
console.log(test.test);