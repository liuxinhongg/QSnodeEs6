'use strict';

// 增删改查
{
	// 新增
	var array = [];
	var obj = {};
	var set = new Set();
	var map = new Map();
	var goods = { fruit: 'apple' };
	array.push(goods);
	obj['fruit'] = 'apple';
	set.add(goods);
	map.set('fruit', 'apple');
	console.log(array, obj, set, map);
	//查询
	var arrresult = array.includes(goods);
	var objresult = 'fruit' in obj;
	var mapresut = map.has('fruit');
	var setresut = set.has(goods);
	console.log(arrresult, objresult, mapresut, setresut); //true true true true
	// 修改
	array.forEach(function (item) {
		item.fruit = item.fruit ? 'pear' : '';
	});
	obj['fruit'] = "pear";
	map.set("fruit", "pear");
	set.forEach(function (item) {
		item.fruit = item.fruit ? 'pear' : '';
	});
	console.log(array, obj, set, map);
	//删除
	// 数组
	var index = array.findIndex(function (item) {
		return item.fruit;
	});
	array.splice(index, 1);
	delete obj.fruit;
	map.delete("fruit");
	set.delete(goods);
	console.log(array, obj, set, map);
}
// 类型转换
{
	//对象==>map
	var _obj = {
		name: "huwei",
		age: 18
		// Object.entries(obj)
	};console.log(Object.entries(_obj));
	var _map = new Map(Object.entries(_obj));
	console.log(_map);
	//map==>对象
	var obj2 = Object.fromEntries(_map);
	console.log(obj2);
	// 数组和set之间的转换
	// 数组==>Set
	var arr = [1, 2, 3, 4, 5];
	var _set = new Set(arr);
	console.log(_set);
	// set==>数组
	var arr2 = Array.from(_set);
	console.log(arr2);
}