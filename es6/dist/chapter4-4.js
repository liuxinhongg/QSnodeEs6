'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//复制
{
	var obj = { name: 'zhangsan', age: 19 };
	var result = _extends({}, obj);
	console.log(result);
}
// 默认值
{
	var _obj = { name: 'zhangsan', age: 19 };
	var _result = _extends({}, _obj, { name: 'lisi' });
	console.log(_result);
}
// 合并
{
	var _obj2 = { name: 'zhangsan', age: 19 };
	var objO = { color: "red" };
	var resulut = _extends({}, _obj2, objO);
	console.log(resulut);
}
{
	var name = "yinhao";
	var age = 18;
	var es5obj = {
		name: name,
		age: age,
		sayHello: function sayHello() {
			console.log("this is es5obj");
		}
	};
	var es6Obj = {
		name: name,
		age: age,
		sayHello: function sayHello() {
			console.log("this is es6obj");
		}
	};
	console.log('es5', es5obj);
	console.log('es5', es6Obj);
	es5obj.sayHello();
	es6Obj.sayHello();
}
{
	var key = "name";
	// es5obj
	var objes5 = {};
	objes5[key] = "张三";
	console.log(objes5);
	var objes6 = _defineProperty({}, key, "李四");
	console.log(objes6);
}
// Object.is() 
{
	console.log(NaN === NaN); //false
	// let result=Object.is(NaN,NaN);
	var _result2 = Object.is(null, null);
	// let result=Object.is(Symbol(),Symbol());
	console.log(_result2); //false
}
// Object.assign(目标值，来源对象) 
{
	var Obj = { name: "wh", age: 18, info: { hobby: "playing" } };
	var personOther = {};
	Object.assign(personOther, Obj);
	console.log(personOther);
	Obj.age = 20;
	console.log(personOther);
}
{
	var str = "lbylbylby";
	console.log(str.split(""));
	// Array.from()
	var arrstr = Array.from(str);
	console.log(arrstr);
}
/* Object.keys() 遍历对象里面的属性名
Object.values() 遍历对象里面的属性值
Object.entries()遍历键值对 */
{
	var json = {
		name: "wj",
		age: 19,
		hobby: 'playing'
	};
	var _obj3 = {};
	console.log(Object.keys(json));
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = Object.keys(json)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _key = _step.value;

			// obj[key]=json[key];
			console.log(_key);
		}
		// console.log(obj);
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
}