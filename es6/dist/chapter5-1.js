"use strict";

{
	var aa = function aa(x, y) {
		y = y || 'hello';
		console.log(x + " " + y);
	};

	var es6aa = function es6aa(x) {
		var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "world";

		console.log("es6", x + y);
	};

	aa("world");
	aa("world", "");

	es6aa("hello"); //helloworld
	es6aa("hello", ""); //hello
}
// rest参数
{
	var add = function add() {
		var sum = 0;

		for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
			rest[_key] = arguments[_key];
		}

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = rest[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var value = _step.value;

				sum += value;
			}
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

		return sum;
	};

	console.log(add(1, 2, 34, 4, 5));
}
{
	var _console;

	(_console = console).log.apply(_console, [1, 2, 3, 4, 45]);
}
// 尾调用
{
	var step2 = function step2(x) {
		console.log("尾调用", x);
	};

	var step1 = function step1(x) {
		return step2(x);
	};

	step1(12);
}