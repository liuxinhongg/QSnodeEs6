// 增删改查
{
	// 新增
	let array=[];
	let obj={};
	let set=new Set();
	let map=new Map();
	let goods={fruit:'apple'};
	array.push(goods);
	obj['fruit']='apple';
	set.add(goods);
	map.set('fruit','apple');
	console.log(array,obj,set,map)
	//查询
	const arrresult=array.includes(goods);
	const objresult='fruit' in obj;
	const mapresut=map.has('fruit');
	const setresut=set.has(goods);
	console.log(arrresult,objresult,mapresut,setresut);//true true true true
	// 修改
	array.forEach(function(item){
		item.fruit = item.fruit ? 'pear' : '';
	})
	obj['fruit']="pear";
	map.set("fruit","pear");
	set.forEach(function(item){
		item.fruit = item.fruit ? 'pear' : '';
	})
	console.log(array,obj,set,map)
	//删除
	// 数组
	const index=array.findIndex(function(item){
		return item.fruit;
	})
	array.splice(index,1);
	delete obj.fruit;
	map.delete("fruit");
	set.delete(goods);
	console.log(array,obj,set,map)
}
// 类型转换
{
	//对象==>map
	let obj={
		name:"huwei",
		age:18
	}
	// Object.entries(obj)
	console.log(Object.entries(obj));
	let map=new Map(Object.entries(obj));
	console.log(map);
	//map==>对象
	let obj2=Object.fromEntries(map);
	console.log(obj2);
	// 数组和set之间的转换
	// 数组==>Set
	let arr=[1,2,3,4,5];
	let set=new Set(arr);
	console.log(set);
	// set==>数组
	let arr2=Array.from(set);
	console.log(arr2)
}