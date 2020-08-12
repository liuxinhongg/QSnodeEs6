"use strict";

//set
{
	var set = new Set();
	// 添加元素
	set.add(1);
	console.log(set);
	var setIS = new Set(["1", 2, 3, 4, 5, 2, 3, 4]);
	setIS.add(1);
	console.log(setIS);
	console.log(setIS.has(3));
	console.log(setIS.size);
}
{
	var _set = new Set();
	_set.add({ "hobby": "eating" });
	console.log(_set.has({ "hobby": "playing" })); //false
	var item = { "hobby": "eating" };
	_set.add(item);
	console.log(_set);
	console.log(_set.has(item));
}
{
	var _set2 = new Set([1, 2, 3, 4, 5]);
	// console.log(set[1])
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = _set2.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var key = _step.value;

			console.log(key);
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
{
	var arr = [1, 3, 2, 4, 5, 6, 2, 34];
	var que = new Set(arr);
	console.log(que);
	var quearr = Array.from(que);
	console.log(quearr);
}
// weakset obj size clear
{
	var obj = {};
	var weakset = new WeakSet();
	weakset.add(obj);
	console.log(weakset);
}