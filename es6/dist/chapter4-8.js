'use strict';

var acount = {
	id: 9958,
	name: 'admin',
	phone: '17868859988',
	creat_time: '2019',
	_private: 'test'
};
var accountproxy = new Proxy(acount, {
	get: function get(target, key) {
		switch (key) {
			case 'phone':
				return target[key].substring(0, 3) + "****" + target[key].substring(7);
			case 'creat_time':
				return target[key].replace('2019', 2020);
			default:
				return target[key];
		}
	},
	set: function set(target, key, value) {
		if (key === 'id') {
			return target[key];
		} else {
			return target[key] = value;
		}
	},
	has: function has(target, key) {
		if (key in target) {
			console.log('' + key, target[key]);
			return true;
		} else {
			console.log("该属性不存在");
			return false;
		}
	},
	deleteProperty: function deleteProperty(target, key) {
		if (key.indexOf("_") === 0) {
			console.log("该属性不能删除");
			return true;
		} else {
			delete target[key];
			return false;
		}
	},
	ownKeys: function ownKeys(target) {
		return Object.keys(target).filter(function (item) {
			return item !== "id" && item.indexOf("_") !== 0;
		});
	}
});
console.log("拦截读取", accountproxy.phone, accountproxy.creat_time);
accountproxy.id = 1234;
accountproxy.name = "lisi";
console.log(accountproxy.id, accountproxy.name);
console.log('拦截in', 'sex' in accountproxy);
// console.log('拦截in','name' in accountproxy);
// console.log('拦截in','_private' in accountproxy);
console.log("拦截删除", delete accountproxy['_private']);
console.log(Object.keys(accountproxy));
{
	var obj = {
		name: "zhangsan",
		age: 20,
		sex: "男",
		hobby: "playing"
	};
	console.log(Reflect.get(obj, "name")); //zhangsan
	// 设置值
	Reflect.set(obj, "name", "张三");
	console.log(obj.name);
	"name" in obj;
	console.log(Reflect.has(obj, "name"));
}