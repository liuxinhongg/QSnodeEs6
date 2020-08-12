//set
{
	let set=new Set();
	// 添加元素
	set.add(1);
	console.log(set);
	let setIS=new Set(["1",2,3,4,5,2,3,4]);
	setIS.add(1);
	console.log(setIS);
	console.log(setIS.has(3));
	console.log(setIS.size)
}
{
	let set=new Set();
	set.add({"hobby":"eating"})
	console.log(set.has({"hobby":"playing"}));//false
	const item={"hobby":"eating"};
	set.add(item)
	console.log(set)
	console.log(set.has(item));
}
{
	const set=new Set([1,2,3,4,5]);
	// console.log(set[1])
	for(let key of set.entries()){
		console.log(key)
	}
}
{
	const arr=[1,3,2,4,5,6,2,34];
	let que=new Set(arr);
	console.log(que);
	let quearr=Array.from(que);
	console.log(quearr)
}
// weakset obj size clear
{
	let obj={};
	let weakset=new WeakSet();
	weakset.add(obj);
	console.log(weakset)
}