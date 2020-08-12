"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.sayHello = sayHello;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// export 导出变量
/**/
var a = exports.a = 12;
function sayHello() {
	console.log("hello");
}

var test = exports.test = function () {
	function test() {
		_classCallCheck(this, test);
	}

	_createClass(test, [{
		key: "say",
		value: function say() {
			console.log("test");
		}
	}]);

	return test;
}();

/*
let a=12;
function sayHello(){
	console.log("hello");
}
export default {
	a,
	sayHello,
}*/