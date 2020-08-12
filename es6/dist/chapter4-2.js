'use strict';

// ...复制数组
{
	var arr = [1, 2, 3, 4];
	var arr1 = [].concat(arr);
	console.log(arr1); //[1,2,3,4]
	arr.push(5); //[1,2,3,4,5]
}
// 分割数组
{
	var list = [1, 'a', 'b', 'c'];
	var otherlist = list.slice(1);

	console.log(otherlist);
}
// 给函数传递参数
{
	var fun = function fun(x, y) {
		return x + y;
	};

	var _list = [2, 3];
	console.log(fun.apply(undefined, _list));
}
// fill()填充数组,替换数组【替换全部】
{
	var _list2 = [1, 2, 3, 4, 5];
	var list2 = [].concat(_list2).fill(6);
	console.log(list2);
	var list3 = [].concat(_list2).fill(6, 0, 3);
	console.log(list3); //[1, 2, 6, 4, 5]
}
// find()
{
	var listf = [{ "title": "es6" }, { "title": "es7", id: 2 }, { "title": "es6" }, { "title": "es9" }];
	var _list3 = listf.find(function (item) {
		return item.title === "es6";
	});
	console.log(_list3); //{title: "es6"}
	var listindex = listf.findIndex(function (item) {
		return item.title === "es9";
	});
	console.log(listindex); //3
}
{
	var _list4 = [1, 2, 3, 4, 5];
	var result = _list4.includes(3);
	console.log(result); //true
}
//flat展开数组的操作
{
	var _ref;

	var _list5 = [1, 2, 3, ['second', 4, 5]];
	//es5
	var _result = (_ref = []).concat.apply(_ref, _list5);
	console.log(_result);
	var flatlist = _list5.flat();
	console.log(flatlist);
	var _listf = [1, 2, 3, ['second', 4, 5, ["third", 6, 7]]];
	var flatrul = _listf.flat(2);
	console.log(flatrul);
}