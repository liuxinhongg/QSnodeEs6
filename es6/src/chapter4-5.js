// map() 构造函数,只接受数组作为参数
{
	// set()
	let map=new Map();
	map.set([1,2,3],'number');
	console.log(map);
	let map2=new Map([
		["name","zhangsan"],
		["age",18]
	])
	console.log(map2);
	console.log(map2.size);//2
	map2.set("name","lisi").set("hobby",["playing","eating"]);
	console.log(map2);
	const getmap=map2.get("hobby");
	console.log(getmap);
	console.log(map2.has("name"));//true
	map2.delete("age")
	console.log(map2);
}
// 遍历
{
	const map=new Map([
		["name","zhangsan"],
		["age",18],
		["hobby","playing"]
	])
	/*
	for(let key of map.keys()){
		console.log(key)
	}
	for(let key of map.values()){
		console.log(key)
	}
	for(let key of map.entries()){
		console.log(key)
	}*/
}
// WeakMap()只接受一个对象作为键名,不接受其他类型的数据作为键名
{
	let weakmap=new WeakMap([
		[{"weakobj":"hahaha"},"zhangsan"]
	])
	console.log(weakmap);
}
