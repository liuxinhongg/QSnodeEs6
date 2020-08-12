'use strict';

{
	var say = /*#__PURE__*/regeneratorRuntime.mark(function say() {
		return regeneratorRuntime.wrap(function say$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return 'a';

					case 2:
						_context.next = 4;
						return 'b';

					case 4:
						_context.next = 6;
						return 'c';

					case 6:
						return _context.abrupt('return', 'd');

					case 7:
					case 'end':
						return _context.stop();
				}
			}
		}, say, this);
	});
	var fn = say();
	console.log(fn.next());
	console.log(fn.next());
	console.log(fn.next());
}
/*
{
	function* gen() {
	  yield  [12,23];
	}
	const fn=gen();
	console.log(fn.next());
	console.log(fn.next());
}*/
{
	var demo = /*#__PURE__*/regeneratorRuntime.mark(function demo() {
		return regeneratorRuntime.wrap(function demo$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.t0 = console;
						_context2.next = 3;
						return;

					case 3:
						_context2.t1 = _context2.sent;
						_context2.t2 = 'Hello' + _context2.t1;

						_context2.t0.log.call(_context2.t0, _context2.t2);

						_context2.t3 = console;
						_context2.next = 9;
						return 123;

					case 9:
						_context2.t4 = _context2.sent;
						_context2.t5 = 'Hello' + _context2.t4;

						_context2.t3.log.call(_context2.t3, _context2.t5);

					case 12:
					case 'end':
						return _context2.stop();
				}
			}
		}, demo, this);
	});

	var de = demo();
	// console.log(de.next())
	// console.log(de.next())
	// console.log(de.next())
	// console.log(de.next())
}
{
	var obj = {
		a: 1,
		b: 2,
		c: 3
	};
	obj[Symbol.iterator] = /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
		var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, key;

		return regeneratorRuntime.wrap(function _callee$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						_iteratorNormalCompletion = true;
						_didIteratorError = false;
						_iteratorError = undefined;
						_context3.prev = 3;
						_iterator = Object.keys(obj)[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
							_context3.next = 12;
							break;
						}

						key = _step.value;
						_context3.next = 9;
						return obj[key];

					case 9:
						_iteratorNormalCompletion = true;
						_context3.next = 5;
						break;

					case 12:
						_context3.next = 18;
						break;

					case 14:
						_context3.prev = 14;
						_context3.t0 = _context3['catch'](3);
						_didIteratorError = true;
						_iteratorError = _context3.t0;

					case 18:
						_context3.prev = 18;
						_context3.prev = 19;

						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}

					case 21:
						_context3.prev = 21;

						if (!_didIteratorError) {
							_context3.next = 24;
							break;
						}

						throw _iteratorError;

					case 24:
						return _context3.finish(21);

					case 25:
						return _context3.finish(18);

					case 26:
					case 'end':
						return _context3.stop();
				}
			}
		}, _callee, this, [[3, 14, 18, 26], [19,, 21, 25]]);
	});
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = obj[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			// console.log(value);

			var value = _step2.value;
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}
}
{
	var state = /*#__PURE__*/regeneratorRuntime.mark(function state() {
		return regeneratorRuntime.wrap(function state$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						if (!1) {
							_context4.next = 9;
							break;
						}

						_context4.next = 3;
						return 'success';

					case 3:
						_context4.next = 5;
						return 'fail';

					case 5:
						_context4.next = 7;
						return 'pending';

					case 7:
						_context4.next = 0;
						break;

					case 9:
					case 'end':
						return _context4.stop();
				}
			}
		}, state, this);
	});
	var stateDate = state();
	// console.log(stateDate.next())
	// console.log(stateDate.next())
	// console.log(stateDate.next())
	// console.log(stateDate.next())
	// console.log(stateDate.next())
	// console.log(stateDate.next())
	// console.log(stateDate.next())
}
/* const aa=function(){},
const aa=()=>{} */
{
	var fn1 = function fn1() {
		return new Promise(function (resolve) {
			setTimeout(function () {
				console.log("订单查询中");
				resolve({ code: 0 });
			}, 1000);
		});
	};

	var autoGetState = function autoGetState() {
		var gen = getState(); //得到一个迭代器
		var status = gen.next();
		status.value.then(function (res) {
			if (res.code == 0) {
				console.log("用户付款成功");
			} else {
				console.log("用户未付款");
				setTimeout(function () {
					return autoGetState();
				}, 1000);
			}
		});
	};

	var getState = /*#__PURE__*/regeneratorRuntime.mark(function getState() {
		return regeneratorRuntime.wrap(function getState$(_context5) {
			while (1) {
				switch (_context5.prev = _context5.next) {
					case 0:
						_context5.next = 2;
						return fn1();

					case 2:
					case 'end':
						return _context5.stop();
				}
			}
		}, getState, this);
	});

	autoGetState();
}