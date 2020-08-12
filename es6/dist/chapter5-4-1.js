"use strict";

var _chapter = require("./chapter5-4-2.js");

var test = _interopRequireWildcard(_chapter);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(test.a); // import 引入模块
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

console.log(test.sayHello);
console.log(test.test);