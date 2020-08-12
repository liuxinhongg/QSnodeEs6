//复制
{
	const obj={name:'zhangsan',age:19};
	let result={...obj};
	console.log(result);
}
// 默认值
{
	const obj={name:'zhangsan',age:19};
	let result={...obj,name:'lisi'}
	console.log(result)
}
// 合并
{
	const obj={name:'zhangsan',age:19};
	const objO={color:"red"};
	let resulut={...obj,...objO};
	console.log(resulut);
}
{
	let name="yinhao";
	let age=18;
	let es5obj={
		name:name,
		age:age,
		sayHello:function(){
			console.log("this is es5obj");
		}
	}
	let es6Obj={
		name,
		age,
		sayHello(){
			console.log("this is es6obj");
		}
	}
	console.log('es5',es5obj);
	console.log('es5',es6Obj);
	es5obj.sayHello()
	es6Obj.sayHello();
}
{
	let key="name";
	// es5obj
	let objes5={};
	objes5[key]="张三";
	console.log(objes5);
	let objes6={
		[key]:"李四"
	}
	console.log(objes6)
}
// Object.is() 
{
	console.log(NaN===NaN);//false
	// let result=Object.is(NaN,NaN);
	let result=Object.is(null,null);
	// let result=Object.is(Symbol(),Symbol());
	console.log(result);//false
}
// Object.assign(目标值，来源对象) 
{
	const Obj={name:"wh",age:18,info:{hobby:"playing"}};
	let personOther={};
	Object.assign(personOther,Obj);
	console.log(personOther);
	Obj.age=20;
	console.log(personOther);
}
{
	const str="lbylbylby";
	console.log(str.split(""));
	// Array.from()
	let arrstr=Array.from(str);
	console.log(arrstr)
}
/* Object.keys() 遍历对象里面的属性名
Object.values() 遍历对象里面的属性值
Object.entries()遍历键值对 */
{
	const json={
		name:"wj",
		age:19,
		hobby:'playing'
	}
	let obj={};
	console.log(Object.keys(json));
	for(const key of Object.keys(json)){
		// obj[key]=json[key];
		console.log(key)
	}
	// console.log(obj);
}