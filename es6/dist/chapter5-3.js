"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

{
	var Person = function Person(name, age) {
		this.name = name;
		this.age = age;
	};

	Person.prototype.sayHello = function () {
		console.log("hello~,\u6211\u53EB" + this.name + ",\u6211\u4ECA\u5E74" + this.age + "\u5C81\u4E86");
	};
	var op = new Person("张卡", 3);
	// console.log(op);
}
// es6 class类
{
	var _Person = function () {
		function _Person(name, age) {
			_classCallCheck(this, _Person);

			this.name = name;
			this.age = age;
		}

		_createClass(_Person, [{
			key: "sayHello",
			value: function sayHello() {
				console.log("hello~,\u6211\u53EB" + this.name + ",\u6211\u4ECA\u5E74" + this.age + "\u5C81\u4E86");
			}
		}]);

		return _Person;
	}();

	var _op = new _Person("张卡", 3);
	// console.log(op)
}
/* 类的特点
继承 */
{
	var Parent = function Parent() {
		var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "zk";

		_classCallCheck(this, Parent);

		this.name = name;
	};

	var Child = function (_Parent) {
		_inherits(Child, _Parent);

		function Child() {
			var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "yh";

			_classCallCheck(this, Child);

			var _this = _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this, name));

			_this.name = name;
			return _this;
		}

		return Child;
	}(Parent);

	console.log(new Child());
}
// 具有get和set属性
{
	var _Person2 = function () {
		function _Person2() {
			var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "kz";

			_classCallCheck(this, _Person2);

			this.name = name;
		}

		_createClass(_Person2, [{
			key: "fullName",
			get: function get() {
				return this.name;
			},
			set: function set(value) {
				this.name = value;
			}
		}]);

		return _Person2;
	}();

	var p = new _Person2();
	console.log("get", p.fullName);
	p.fullName = "zhangke";
	console.log(p.name);
}
// 静态方法
{
	var _Person3 = function () {
		function _Person3() {
			var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "zs";

			_classCallCheck(this, _Person3);

			this.name = name;
		}

		_createClass(_Person3, null, [{
			key: "sayHello",
			value: function sayHello(obj) {
				console.log("my name is" + " " + obj.name);
			}
		}]);

		return _Person3;
	}();

	var _p = new _Person3("小明");
	console.log(_p);
	_Person3.sayHello(_p); //
}
// 静态属性
{
	var _Person4 = function () {
		// static aa="test"
		function _Person4() {
			var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "ls";

			_classCallCheck(this, _Person4);

			this.name = name;
		}

		_createClass(_Person4, null, [{
			key: "sayHello",
			value: function sayHello(obj) {
				console.log("my name is" + " " + obj.name);
			}
		}]);

		return _Person4;
	}();

	_Person4.aa = "test";
	console.log(_Person4.aa);
}