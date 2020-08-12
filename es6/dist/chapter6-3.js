"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

{
	var makeIte = function makeIte(array) {
		var index = 0;
		return {
			next: function next() {
				return index < array.length ? { value: array[index++], done: false } : { value: undefined, done: true };
			}
		};
	};

	var it = makeIte([1, 2, 3]);
	// console.log(it.next());
	// console.log(it.next());
	// console.log(it.next());
	// console.log(it.next());
}

{
	var obj = _defineProperty({
		color: "red",
		price: 18,
		size: "big"
	}, Symbol.iterator, function () {
		var index = 0;
		var value = Object.values(this);
		return {
			next: function next() {
				if (index < value.length) {
					return {
						value: value[index++],
						done: false
					};
				} else {
					return {
						value: undefined,
						done: true
					};
				}
			}
		};
	});
	// const it=obj[Symbol.iterator]()
	// console.log(it.next());
	// console.log(it.next());
	// console.log(it.next());
	// console.log(it.next());
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = obj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var value = _step.value;

			console.log(value);
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
}
/**/
{
	var arr = [1, 2, 3, 4, 5];
	// Symbol.iterator
	var fn = arr[Symbol.iterator]();
	console.log(fn.next());
	console.log(fn.next());
	console.log(fn.next());
	console.log(fn.next());
	console.log(fn.next());
	console.log(fn.next());
}